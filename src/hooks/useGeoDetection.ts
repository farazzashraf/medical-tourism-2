import { useState, useEffect, useCallback } from 'react';
import { COUNTRY_TO_REGION, ISO_COUNTRY_NAMES } from '../config/regions';

const GEO_STORAGE_KEY = 'indiacaretrip_geo_region';
const GEO_COUNTRY_KEY = 'indiacaretrip_geo_country';
const GEO_COUNTRY_NAME_KEY = 'indiacaretrip_geo_country_name';
const GEO_EXPIRY_KEY = 'indiacaretrip_geo_expiry';
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

/**
 * Robust helper to resolve an accurate country name from code, API name, or timezone
 */
export function resolveCountryName(countryCode?: string, countryName?: string): string {
  if (
    countryName && 
    countryName.trim().length > 0 && 
    countryName.toLowerCase() !== 'global' && 
    countryName.toLowerCase() !== 'international'
  ) {
    return countryName;
  }
  if (countryCode && ISO_COUNTRY_NAMES[countryCode.toUpperCase()]) {
    return ISO_COUNTRY_NAMES[countryCode.toUpperCase()];
  }
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.includes('Calcutta') || tz.includes('Kolkata') || tz.includes('India')) return 'India';
    if (tz.includes('London')) return 'United Kingdom';
    if (tz.includes('Dubai')) return 'UAE';
    if (tz.includes('Berlin')) return 'Germany';
    if (tz.includes('Paris')) return 'France';
    if (tz.includes('New_York') || tz.includes('Chicago') || tz.includes('Los_Angeles')) return 'United States';
  } catch {
    // ignore
  }
  return 'India';
}

export interface GeoDetectionResult {
  detectedRegion: string;         // e.g. "germany", "uk", "uae", "africa", "default"
  detectedCountry: string;        // ISO code e.g. "IN", "DE", "GB", "US"
  detectedCountryName: string;    // Full name e.g. "India", "Germany", "United States"
  isLoading: boolean;
  isManuallySet: boolean;
  setRegion: (region: string) => void;
}

/**
 * Hook for IP-based geo-detection with localStorage caching.
 * Always resolves to a clean country name (e.g. "India") — never "Global" or "International".
 */
export function useGeoDetection(): GeoDetectionResult {
  // Read initial values synchronously from cache or fallback so there is zero flicker of wrong text
  const initialCountry = (() => {
    try {
      return localStorage.getItem(GEO_COUNTRY_KEY) || '';
    } catch {
      return '';
    }
  })();

  const initialCountryName = (() => {
    try {
      const cached = localStorage.getItem(GEO_COUNTRY_NAME_KEY);
      const code = localStorage.getItem(GEO_COUNTRY_KEY);
      return resolveCountryName(code || undefined, cached || undefined);
    } catch {
      return resolveCountryName();
    }
  })();

  const initialRegion = (() => {
    try {
      return localStorage.getItem(GEO_STORAGE_KEY) || 'default';
    } catch {
      return 'default';
    }
  })();

  const [detectedRegion, setDetectedRegion] = useState<string>(initialRegion);
  const [detectedCountry, setDetectedCountry] = useState<string>(initialCountry);
  const [detectedCountryName, setDetectedCountryName] = useState<string>(initialCountryName);
  const [isLoading, setIsLoading] = useState(false);
  const [isManuallySet, setIsManuallySet] = useState(false);

  // Manual override
  const setRegion = useCallback((region: string) => {
    setDetectedRegion(region);
    setIsManuallySet(true);
    try {
      localStorage.setItem(GEO_STORAGE_KEY, region);
      localStorage.setItem(GEO_COUNTRY_KEY, 'manual');
      localStorage.setItem(GEO_EXPIRY_KEY, String(Date.now() + CACHE_DURATION_MS));
    } catch {
      // localStorage unavailable
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function detect() {
      // 1. Check if valid cache exists with country name
      try {
        const cachedRegion = localStorage.getItem(GEO_STORAGE_KEY);
        const cachedCountry = localStorage.getItem(GEO_COUNTRY_KEY);
        const cachedCountryName = localStorage.getItem(GEO_COUNTRY_NAME_KEY);
        const expiry = localStorage.getItem(GEO_EXPIRY_KEY);

        if (cachedCountry && cachedCountryName && expiry && Date.now() < Number(expiry)) {
          const resolvedName = resolveCountryName(cachedCountry, cachedCountryName);
          if (!cancelled) {
            setDetectedRegion(cachedRegion || 'default');
            setDetectedCountry(cachedCountry !== 'manual' ? cachedCountry : '');
            setDetectedCountryName(resolvedName);
            setIsManuallySet(cachedCountry === 'manual');
            setIsLoading(false);
          }
          return;
        }
      } catch {
        // localStorage unavailable, proceed with API
      }

      // 2. Call IP geo API
      try {
        const response = await fetch('https://ipapi.co/json/', {
          signal: AbortSignal.timeout(5000),
        });

        if (!response.ok) throw new Error('Geo API failed');

        const data = await response.json();
        const countryCode: string = data.country_code || '';
        const rawCountryName: string = data.country_name || '';
        const resolvedName = resolveCountryName(countryCode, rawCountryName);
        const region: string = COUNTRY_TO_REGION[countryCode] || 'default';

        if (!cancelled) {
          setDetectedRegion(region);
          setDetectedCountry(countryCode);
          setDetectedCountryName(resolvedName);
          setIsLoading(false);

          // Cache the resolved result
          try {
            localStorage.setItem(GEO_STORAGE_KEY, region);
            localStorage.setItem(GEO_COUNTRY_KEY, countryCode);
            localStorage.setItem(GEO_COUNTRY_NAME_KEY, resolvedName);
            localStorage.setItem(GEO_EXPIRY_KEY, String(Date.now() + CACHE_DURATION_MS));
          } catch {
            // localStorage unavailable
          }
        }
      } catch {
        // Fallback: safely resolve from local timezone or default
        if (!cancelled) {
          const resolvedName = resolveCountryName();
          setDetectedRegion('default');
          setDetectedCountry('IN');
          setDetectedCountryName(resolvedName);
          setIsLoading(false);
        }
      }
    }

    detect();

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    detectedRegion,
    detectedCountry,
    detectedCountryName,
    isLoading,
    isManuallySet,
    setRegion,
  };
}

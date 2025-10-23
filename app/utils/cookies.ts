// Cookie utility functions
export const cookieUtils = {
  // Set a cookie with expiration date
  setCookie: (name: string, value: string, days: number = 365) => {
    if (typeof window === 'undefined') return;
    
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  },

  // Get a cookie value
  getCookie: (name: string): string | null => {
    if (typeof window === 'undefined') return null;
    
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  // Delete a cookie
  deleteCookie: (name: string) => {
    if (typeof window === 'undefined') return;
    
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  },

  // Check if cookies are enabled
  areCookiesEnabled: (): boolean => {
    if (typeof window === 'undefined') return false;
    
    try {
      document.cookie = "testcookie=1";
      const hasCookie = document.cookie.indexOf("testcookie=") !== -1;
      document.cookie = "testcookie=1; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      return hasCookie;
    } catch {
      return false;
    }
  }
};

// Local storage utility functions (fallback when cookies are disabled)
export const storageUtils = {
  setItem: (key: string, value: string) => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(key, value);
    } catch {
      console.warn('LocalStorage not available, falling back to cookies');
      cookieUtils.setCookie(key, value);
    }
  },

  getItem: (key: string): string | null => {
    if (typeof window === 'undefined') return null;
    
    try {
      return localStorage.getItem(key);
    } catch {
      return cookieUtils.getCookie(key);
    }
  },

  removeItem: (key: string) => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem(key);
    } catch {
      cookieUtils.deleteCookie(key);
    }
  }
};

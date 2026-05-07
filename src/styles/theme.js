// src/styles/theme.js
export const theme = {
  colors: {
    primary: '#1B4D3E',      // Vert forêt foncé
    secondary: '#2D5F4F',    // Vert forêt moyen
    accent: '#D4AF37',       // Or classique
    gold: '#FFD700',         // Or brillant
    lightGold: '#F4E4C1',    // Or clair
    dark: '#0F2922',         // Vert très foncé
    light: '#E8F5E9',        // Vert très clair
    white: '#FFFFFF',
    text: '#333333',
    textLight: '#666666',
    
    // Ajouts utiles
    error: '#DC2626',
    success: '#10B981',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
  
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    xxl: '3rem',     // 48px
  },
  
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
    md: '0 4px 16px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.15)',
    gold: '0 8px 24px rgba(212, 175, 55, 0.3)',
  },
  
  typography: {
    fontFamily: {
      primary: "'Inter', 'Segoe UI', sans-serif",
      heading: "'Playfair Display', serif",
    },
    fontSize: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      base: '1rem',    // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '2rem',   // 32px
      '4xl': '2.5rem', // 40px
    },
  },
  
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
  },
};

// Export individuel pour faciliter l'import
export const colors = theme.colors;
export const spacing = theme.spacing;
export const shadows = theme.shadows;
import type { Config } from "tailwindcss";

/**
 * High-tech medical aesthetic theme.
 *
 * Mirrors the clinical / glass-morphism look:
 *  - Icy-blue -> white background with a soft radial glow wrapper
 *  - Deep clinical ocean blue for headers & primary text
 *  - Neon lime green for active states, badges & circular icon buttons
 *  - Translucent bright-white glass cards with large (2xl / 3xl) radii
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Page background: light icy blue blending into pure white.
        background: {
          DEFAULT: "#FFFFFF", // pure white
          icy: "#E9F1F7",     // light icy blue
        },

        // Muted slate-blue outer canvas the page "card" floats on.
        canvas: {
          DEFAULT: "#92A8C2",
          light: "#A6B9CF",
          deep: "#7E96B4",
        },

        // Deep clinical ocean blue — major headers & primary text.
        primary: {
          DEFAULT: "#003E7E",
          50: "#E6EEF6",
          100: "#C2D5E9",
          200: "#8FB0D3",
          300: "#5C8BBD",
          400: "#2A66A7",
          500: "#003E7E", // base
          600: "#003266",
          700: "#00264D",
          800: "#001A33",
          900: "#000D1A",
          foreground: "#FFFFFF",
        },

        // High-visibility neon lime green — active states, badge text,
        // circular arrow icon buttons.
        accent: {
          DEFAULT: "#22E06A",
          50: "#E7FCEF",
          100: "#C2F7D6",
          200: "#88EFAD",
          300: "#52E888",
          400: "#22E06A", // base
          500: "#16C457",
          600: "#0F9E45",
          700: "#0A7833",
          foreground: "#00261A",
        },

        // Glass-morphism card surface: translucent bright white.
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.6)",
          solid: "#FFFFFF",
          border: "rgba(255, 255, 255, 0.6)", // pairs with border-white/60
          foreground: "#003E7E",
        },
      },

      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },

      // Radial blur wrapper / blended page background utilities.
      backgroundImage: {
        // Seamless icy-blue -> white blend for the page shell.
        "app-shell":
          "linear-gradient(160deg, #E9F1F7 0%, #FFFFFF 55%, #E9F1F7 100%)",
        // Soft radial glow used behind hero / content (the blur wrapper).
        "radial-glow":
          "radial-gradient(60% 60% at 50% 25%, rgba(233,241,247,0.9) 0%, rgba(255,255,255,0) 70%)",
        // Accent halo for highlighted modules.
        "accent-glow":
          "radial-gradient(50% 50% at 50% 50%, rgba(34,224,106,0.18) 0%, rgba(34,224,106,0) 70%)",
        // Muted slate-blue canvas behind the floating page card.
        "page-canvas":
          "linear-gradient(180deg, #A6B9CF 0%, #92A8C2 40%, #8094B1 100%)",
        // Highlighted (solid blue) service-card gradient.
        "card-feature":
          "linear-gradient(160deg, #2A66A7 0%, #003E7E 100%)",
      },

      // Lean toward large, soft radii for the clinical glass look.
      borderRadius: {
        DEFAULT: "1rem",   // 16px — bump the baseline
        card: "1.5rem",    // == rounded-2xl
        panel: "1.75rem",  // 28px
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      // Glass elevation + accent glow shadows.
      boxShadow: {
        glass: "0 8px 32px rgba(0, 62, 126, 0.08)",
        "glass-lg": "0 16px 48px rgba(0, 62, 126, 0.12)",
        "accent-glow": "0 0 0 4px rgba(34, 224, 106, 0.15)",
        "icon-button": "0 4px 14px rgba(34, 224, 106, 0.35)",
      },

      // Stronger blur tiers for the radial blur wrapper & glass panels.
      backdropBlur: {
        xs: "2px",
        glass: "16px",
        wrapper: "40px",
      },

      borderColor: {
        glass: "rgba(255, 255, 255, 0.6)",
      },

      ringColor: {
        accent: "#22E06A",
      },
    },
  },
  plugins: [],
};

export default config;

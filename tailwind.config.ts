import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // 真っ黒系
        void: {
          DEFAULT: '#000000',
          950: '#030305',
          900: '#08080B',
          800: '#101015',
          700: '#1A1A20',
          600: '#26262E'
        },
        // ネオングリーン
        neon: {
          DEFAULT: '#00FF95',
          bright: '#22FFA8',
          dim: '#00C275',
          ink: '#003D24'
        },
        // 白〜灰のスケール（暗背景上のテキスト用）
        pale: {
          DEFAULT: '#FFFFFF',
          900: '#F5F5F7',
          700: '#A8A8B0',
          500: '#6B6B73',
          400: '#4A4A52',
          300: '#2A2A30'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-0.06em',
        tighter: '-0.04em'
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'fadein': 'fadein 1.2s ease-out forwards',
        'twinkle': 'twinkle 3s ease-in-out infinite'
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
};

export default config;

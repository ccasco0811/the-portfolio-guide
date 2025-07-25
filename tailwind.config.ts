import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				editorial: {
					accent: 'hsl(var(--editorial-accent))',
					light: 'hsl(var(--editorial-light))',
					border: 'hsl(var(--editorial-border))'
				}
			},
			fontFamily: {
				'moderustic': ['Moderustic', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'epilogue': ['Epilogue', 'sans-serif'],
			},
			fontSize: {
				'hero': 'var(--text-hero)',
				'display': 'var(--text-display)',
				'heading': 'var(--text-heading)',
				'subheading': 'var(--text-subheading)',
				'body': 'var(--text-body)',
				'small': 'var(--text-small)'
			},
			spacing: {
				'xs': 'var(--space-xs)',
				'sm': 'var(--space-sm)',
				'md': 'var(--space-md)',
				'lg': 'var(--space-lg)',
				'xl': 'var(--space-xl)',
				'2xl': 'var(--space-2xl)'
			},
			boxShadow: {
				'editorial': 'var(--shadow-editorial)',
				'editorial-strong': 'var(--shadow-strong)'
			},
			letterSpacing: {
				'tighter': '-0.05em',
				'tight': '-0.025em',
				'normal': '0',
				'wide': '0.025em',
				'wider': '0.05em',
				'widest': '0.1em'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'hero-parallax': {
					'0%': { 
						transform: 'translateY(0px) scale(1)',
						filter: 'blur(0px)',
						opacity: '1'
					},
					'100%': { 
						transform: 'translateY(30px) scale(0.95)',
						filter: 'blur(4px)',
						opacity: '0'
					}
				},
				'section-emerge': {
					'0%': { 
						transform: 'translateY(50px)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateY(0px)',
						opacity: '1'
					}
				},
				'smooth-fade': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'scale-in': 'scale-in 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'hero-parallax': 'hero-parallax 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'section-emerge': 'section-emerge 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'smooth-fade': 'smooth-fade 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

import type { Config } from "tailwindcss";
import defaultTheme, { fontFamily } from "tailwindcss/defaultTheme";

const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			screens: {
				xs: "475px",
				...defaultTheme.screens,
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				card: {
					DEFAULT: "var(--card))",
					foreground: "var(--card-foreground)",
				},
				popover: {
					DEFAULT: "var(--popover))",
					foreground: "var(--popover-foreground)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				destructive: {
					DEFAULT: "var(--destructive))",
					foreground: "var(--destructive-foreground)",
				},
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
} satisfies Config;

export default config;

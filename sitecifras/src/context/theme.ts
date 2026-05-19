import { createContext } from "react";

type Theme = "light" | "dark";

export type ThemeStyles = {
	background: string;
	card: string;
	text: string;
	border: string;
	button: string;
	placeholder: string;
};

export type ThemeContextType = {
	theme: Theme;
	themeStyles: ThemeStyles;
	toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

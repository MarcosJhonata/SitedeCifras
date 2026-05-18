import { createContext, useContext, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

type ThemeStyles = {
	background: string;
	card: string;
	text: string;
	border: string;
	button: string;
};

type ThemeContextType = {
	theme: Theme;
	themeStyles: ThemeStyles;
	toggleTheme: () => void;
};

type ThemeProviderProps = {
	children: ReactNode;
};

const themes = {
	light: {
		background: "bg-gray-100",
		card: "bg-white",
		text: "text-gray-900",
		border: "border-gray-300",
		button: "bg-blue-600 text-white",
	},

	dark: {
		background: "bg-gray-900",
		card: "bg-gray-800",
		text: "text-white",
		border: "border-gray-700",
		button: "bg-blue-500 text-white",
	},
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>("light");

	function toggleTheme() {
		setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
	}

	return (
		<ThemeContext.Provider
			value={{
				theme,
				themeStyles: themes[theme],
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme precisa estar dentro do ThemeProvider");
	}

	return context;
}

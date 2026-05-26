import { useCallback, useState, type ReactNode } from "react";
import { ThemeContext, type ThemeStyles } from "./theme";

type Theme = "light" | "dark";

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
		placeholder: "placeholder:text-gray-400",
	},

	dark: {
		background: "bg-gray-900",
		card: "bg-gray-800",
		text: "text-white",
		border: "border-gray-700",
		button: "bg-blue-500 text-white",
		placeholder: "placeholder:text-gray-400",
	},
} satisfies Record<Theme, ThemeStyles>;

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>("light");

	const toggleTheme = useCallback(function toggleTheme() {
		setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
	}, []);

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

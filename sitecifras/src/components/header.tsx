import { useTheme } from "../context/theme-context";
import Container from "./container";
export default function Header() {
	const { theme, toggleTheme, themeStyles } = useTheme();
	return (
        
		<Container
			as="header"
			className={`w-full
    h-20
    flex
    items-center
    justify-between
    px-6
    border
    rounded-xl
    shadow-lg
    ${themeStyles.card}
    ${themeStyles.border}
    ${themeStyles.text}`}
		>
			BIBLIOTECA DE CIFRAS E ACORDES
			<button
				type="button"
				onClick={toggleTheme}
				className={`
          h-11
          px-5
          rounded-lg
          font-semibold
          cursor-pointer
          transition
          ${themeStyles.button}`}
			>
				{theme === "light" ? "Tema Escuro" : "Tema Claro"}
			</button>
		</Container>
	);
}

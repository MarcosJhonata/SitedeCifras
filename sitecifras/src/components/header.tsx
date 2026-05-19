import { useTheme } from "../context/use-theme";
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
    gap-8
    ${themeStyles.card}
    ${themeStyles.border}
    ${themeStyles.text}`}
		>
			<h1 className="text-2xl font-bold">BIBLIOTECA DE CIFRAS E ACORDES</h1>
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

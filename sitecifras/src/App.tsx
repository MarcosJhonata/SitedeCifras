import Container from "./components/container";
import Header from "./components/header";
import { useTheme } from "./context/theme-context";
import "./index.css";

export default function App() {
	const { themeStyles } = useTheme();

	return (
		<Container className={`min-h-screen ${themeStyles.background} ${themeStyles.text}`}>
			<Container
				className={`max-w-225 mx-auto
					p-8
					rounded-2xl
					shadow-lg
					${themeStyles.card}`}
			>
				<Header />
			</Container>
		</Container>
	);
}

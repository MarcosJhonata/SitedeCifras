import Container from "./components/container";
import Header from "./components/header";
import SongForm from "./components/song-form";
import { useTheme } from "./context/theme-context";
import "./index.css";

export default function App() {
	const { themeStyles } = useTheme();

	return (
		<Container className={`min-h-screen ${themeStyles.background} ${themeStyles.text}`}>
			<Container
				className={`max-w-225 mx-auto
          flex 
          flex-col
          gap-5
					p-8
					rounded-2xl
					shadow-lg
					${themeStyles.card} gap-5`}
			>
				<Header />
        <SongForm/>
			</Container>
		</Container>
	);
}

import { useState } from "react";
import Container from "./components/container";
import Header from "./components/header";
import SongForm from "./components/song-form";
import SongList from "./components/song-list";
import { useTheme } from "./context/use-theme";
import "./index.css";

type Song = {
	id: number;
	musica: string;
	acordes: string[];
};

export default function App() {
	const [listaMusicas, setListaMusicas] = useState<Song[]>([]);

	function adicionarMusica(novaMusica: Song) {
		setListaMusicas((prevListaMusicas) => [
			...prevListaMusicas,
			novaMusica,
		]);
	}
	const { themeStyles } = useTheme();

	return (
		<Container
			className={`min-h-screen ${themeStyles.background} ${themeStyles.text}`}
		>
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
				<SongForm adicionarMusica={adicionarMusica} />
				<SongList listaMusicas={listaMusicas} />
			</Container>
		</Container>
	);
}

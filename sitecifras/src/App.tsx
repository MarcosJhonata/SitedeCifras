import { useEffect, useState } from "react";
import Container from "./components/container";
import Header from "./components/header";
import { carregarMusicasSalvas, salvarMusicas } from "./components/local-storage";
import SongForm from "./components/song-form";
import { useTheme } from "./context/use-theme";
import "./index.css";
import SongList from "./components/song-list";
import SongStats from "./components/song-stats";
import type { Song } from "./types/song";

export default function App() {
	const [listaMusicas, setListaMusicas] =
		useState<Song[]>(carregarMusicasSalvas);

	function adicionarMusica(novaMusica: Song) {
		setListaMusicas((prevListaMusicas) => [...prevListaMusicas, novaMusica]);
	}
	const { themeStyles } = useTheme();

	useEffect(() => {
		salvarMusicas(listaMusicas);
	}, [listaMusicas]);

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
				<SongStats listaMusicas={listaMusicas} />
				<SongList listaMusicas={listaMusicas} />
			</Container>
		</Container>
	);
}

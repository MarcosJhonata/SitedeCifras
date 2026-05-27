import { useCallback, useEffect, useMemo, useState } from "react";
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
	const [busca, setBusca] = useState("");

	const adicionarMusica = useCallback(function adicionarMusica(novaMusica: Song) {
		setListaMusicas((prevListaMusicas) => [...prevListaMusicas, novaMusica]);
	}, []);

	const removerMusica = useCallback(function removerMusica(id: number) {
		setListaMusicas((prevListaMusicas) =>
			prevListaMusicas.filter((musica) => musica.id !== id),
		);
	}, []);

	const musicasFiltradas = useMemo(() => {
		return listaMusicas.filter((musica) =>
			musica.musica.toLowerCase().includes(busca.toLowerCase()),
		);
	}, [listaMusicas, busca]);

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
				<div
					className={`w-full
					flex
					flex-col
					gap-2
					px-6
					py-5
					border
					rounded-xl
					shadow-lg
					${themeStyles.card}
					${themeStyles.border}
					${themeStyles.text}`}
				>
					<label htmlFor="busca" className="font-semibold">
						Buscar musica
					</label>
					<input
						id="busca"
						type="text"
						value={busca}
						onChange={(event) => setBusca(event.target.value)}
						placeholder="Buscar musica..."
						className={`
							h-11
							w-full
							px-3
							rounded-lg
							border
							outline-none
							focus:border-blue-600
							${themeStyles.card}
							${themeStyles.border}
							${themeStyles.placeholder}
						`}
					/>
				</div>
				<SongStats listaMusicas={listaMusicas} />
				<SongList
					listaMusicas={musicasFiltradas}
					removerMusica={removerMusica}
				/>
			</Container>
		</Container>
	);
}

import Container from "./container";
import { useTheme } from "../context/use-theme";
import type { Song } from "../types/song";
import SongCard from "./song-card";

type SongListProps = {
	listaMusicas: Song[];
	removerMusica: (id: number) => void;
};

export default function SongList({ listaMusicas, removerMusica }: SongListProps) {
	const { themeStyles } = useTheme();
	return (
		<Container
			as="div"
			className={`w-full
    min-h-25
    flex
    items-center
    justify-between
    px-6
    border
    rounded-xl
    shadow-lg
    gap-10
    ${themeStyles.card}
    ${themeStyles.border}
    ${themeStyles.text}`}
		>
			<ul className="flex flex-col gap-5 px-2 py-3">
				{listaMusicas.map((musica) => (
					<SongCard
						key={musica.id}
						musica={musica}
						removerMusica={removerMusica}
					/>
				))}
			</ul>
		</Container>
	);
}

import Container from "./container";
import { useTheme } from "../context/use-theme";

type Song = {
	id: number;
	musica: string;
	acordes: string[];
};

type SongListProps = {
	listaMusicas: Song[];
};

export default function SongList({ listaMusicas }: SongListProps) {
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
					<li key={musica.id} className="flex flex-col gap-1">
						<strong>{musica.musica}</strong>
						<div className="flex flex-wrap items-center gap-3">
							<span className="font-semibold">Acordes:</span>
							{musica.acordes.map((acorde) => (
								<span
									key={`${musica.id}-${acorde}`}
									className="min-w-11 rounded-full bg-blue-100 px-3 py-1 text-center font-bold text-blue-600"
								>
									{acorde}
								</span>
							))}
						</div>
					</li>
				))}
			</ul>
		</Container>
	);
}

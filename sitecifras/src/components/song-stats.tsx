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

export default function SongStats({ listaMusicas }: SongListProps) {
	const { themeStyles } = useTheme();
	const totalMusicas = listaMusicas.length;

	function retornarNotasFiltradas() {
		const notas: string[] = [];

		for (const musica of listaMusicas) {
			for (const acorde of musica.acordes) {
				if (acorde !== "" && !notas.includes(acorde)) {
					notas.push(acorde);
				}
			}
		}

		return notas;
	}

	const notasFiltradas = retornarNotasFiltradas();
	const totalAcordes = notasFiltradas.length;

	return (
		<Container
			as="div"
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
`}
		>
			<div>total de musicas: {totalMusicas}</div>
			<div>total de acordes: {totalAcordes}</div>
		</Container>
	);
}

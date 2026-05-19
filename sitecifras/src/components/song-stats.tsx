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
	const totalAcordes = listaMusicas.reduce(
		(total, musica) => total + musica.acordes.length,
		0,
	);

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

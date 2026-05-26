import { useMemo } from "react";
import Container from "./container";
import { useTheme } from "../context/use-theme";
import type { Song } from "../types/song";

type SongListProps = {
	listaMusicas: Song[];
};

export default function SongStats({ listaMusicas }: SongListProps) {
	const { themeStyles } = useTheme();
	const totalMusicas = listaMusicas.length;

	const estatisticas = useMemo(() => {
		const acordes: string[] = [];

		for (const musica of listaMusicas) {
			for (const acorde of musica.acordes) {
				if (acorde !== "") {
					acordes.push(acorde);
				}
			}
		}

		const acordesUnicos: string[] = [];
		let acordeMaisUsado = "Nenhum";
		let maiorQuantidade = 0;

		for (const acorde of acordes) {
			if (!acordesUnicos.includes(acorde)) {
				acordesUnicos.push(acorde);
			}
		}

		for (const acorde of acordesUnicos) {
			let quantidade = 0;

			for (const acordeAtual of acordes) {
				if (acordeAtual === acorde) {
					quantidade++;
				}
			}

			if (quantidade > maiorQuantidade) {
				maiorQuantidade = quantidade;
				acordeMaisUsado = acorde;
			}
		}

		return {
			totalAcordes: acordes.length,
			totalAcordesUnicos: acordesUnicos.length,
			acordeMaisUsado,
		};
	}, [listaMusicas]);

	return (
		<Container
			as="div"
			className={`w-full
    min-h-20
    flex
		flex-wrap
    items-center
    justify-between
    px-6
		py-4
    border
    rounded-xl
    shadow-lg
    gap-8
    ${themeStyles.card}
    ${themeStyles.border}
`}
		>
			<div>total de musicas: {totalMusicas}</div>
			<div>Total de acordes: {estatisticas.totalAcordes}</div>
			<div>Acordes unicos: {estatisticas.totalAcordesUnicos}</div>
			<div>Acorde mais utilizado: {estatisticas.acordeMaisUsado}</div>
		</Container>
	);
}

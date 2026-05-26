import { memo } from "react";
import type { Song } from "../types/song";

type SongCardProps = {
	musica: Song;
	removerMusica: (id: number) => void;
};

function SongCard({ musica, removerMusica }: SongCardProps) {
	return (
		<li className="flex flex-col gap-2">
			<div className="flex flex-wrap items-center justify-between gap-3">
				<strong>{musica.musica}</strong>
				<button
					type="button"
					onClick={() => removerMusica(musica.id)}
					className="rounded-lg bg-red-600 px-3 py-1 font-semibold text-white"
				>
					Remover
				</button>
			</div>
			<div className="flex flex-wrap items-center gap-3">
				<span className="font-semibold">Acordes:</span>
				{musica.acordes.map((acorde, index) => (
					<span
						key={`${musica.id}-${acorde}-${index}`}
						className="min-w-11 rounded-full bg-blue-100 px-3 py-1 text-center font-bold text-blue-600"
					>
						{acorde}
					</span>
				))}
			</div>
		</li>
	);
}

export default memo(SongCard);

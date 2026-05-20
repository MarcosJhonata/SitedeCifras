import { useState } from "react";
import { useTheme } from "../context/use-theme";
import type { Song } from "../types/song";

type SongFormProps = {
	adicionarMusica: (novaMusica: Song) => void;
};

export default function SongForm({ adicionarMusica }: SongFormProps) {
	const { themeStyles } = useTheme();
	const [nomeMusica, setNomeMusica] = useState("");
	const [acordes, setAcordes] = useState("");
	const [erro, setErro] = useState("");

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (nomeMusica.trim() === "") {
			setErro("Digite o nome da musica");
			return;
		}

		if (acordes.trim() === "") {
			setErro("Digite os acordes");
			return;
		}

		const novaMusica = {
			id: Date.now(),
			musica: nomeMusica,
			acordes: acordes.split(",").map((acorde) => acorde.trim()),
		};

		adicionarMusica(novaMusica);

		setNomeMusica("");
		setAcordes("");
		setErro("");
	}

	return (
		<form
			onSubmit={handleSubmit}
			className={`w-full
			min-h-25
			flex
			flex-wrap
			items-end
			justify-between
			gap-5
			px-6
			py-5
			border
			rounded-xl
			shadow-lg
			${themeStyles.card}
			${themeStyles.border}
			${themeStyles.text}`}
		>
			<h2 className="w-full text-left text-xl font-bold">
				ADICIONAR NOVA MUSICA
			</h2>
			<div className="flex min-w-70 flex-1 flex-col gap-2">
				<label htmlFor="musicas" className="font-semibold">
					Nome da Musica
				</label>
				<input
					value={nomeMusica}
					onChange={(e) => setNomeMusica(e.target.value)}
					id="musicas"
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
            `}
					type="text"
					placeholder="Ex: É Ele - Drops"
				/>
			</div>
			<div className="flex min-w-70 flex-1 flex-col gap-2">
				<label htmlFor="cifras" className="font-semibold">
					Acordes
				</label>
				<input
					value={acordes}
					onChange={(e) => setAcordes(e.target.value)}
					id="cifras"
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
					type="text"
					placeholder="G, A, D, F"
				/>
			</div>
			<div className="flex w-full justify-center gap-4">
				<button
					type="submit"
					className={`
          h-11
          px-5
          rounded-lg
          font-semibold
          cursor-pointer
          transition
          ${themeStyles.button}`}
				>
					Cadastrar musica
				</button>
				{erro && (
					<p
						className={`${themeStyles.text} font-bold flex justify-center items-center`}
					>
						{erro}
					</p>
				)}
			</div>
		</form>
	);
}

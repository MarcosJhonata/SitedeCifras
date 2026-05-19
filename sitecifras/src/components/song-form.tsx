import { useState } from "react";
import { useTheme } from "../context/use-theme";

type Song = {
	id: number;
	musica: string;
	acordes: string[];
};

type SongFormProps = {
	adicionarMusica: (novaMusica: Song) => void;
};

export default function SongForm({ adicionarMusica }: SongFormProps) {
	const { themeStyles } = useTheme();
	const [nomeMusica, setNomeMusica] = useState("");
	const [acordes, setAcordes] = useState("");

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const novaMusica = {
			id: Date.now(),
			musica: nomeMusica,
			acordes: acordes.split(",").map((acorde) => acorde.trim()),
		};

		adicionarMusica(novaMusica);

		setNomeMusica("");
		setAcordes("");
	}

	return (
		<form
			onSubmit={handleSubmit}
			className={`w-full
        p-6
        rounded-xl
        border
        flex
        flex-wrap
        gap-5
        justify-between
       `}
		>
			<h2 className="w-full text-left text-xl font-bold">
				ADICIONAR NOVA MUSICA
			</h2>
			<div className="flex flex-col gap-2">
				<label htmlFor="musicas">Nome da Musica</label>
				<input
					value={nomeMusica}
					onChange={(e) => setNomeMusica(e.target.value)}
					id="musicas"
					className={`
            h-11
            w-70
            px-3
            rounded-lg
            border
            border-gray-300
            outline-none
            focus:border-blue-600
             ${themeStyles.card}
            `}
					type="text"
					placeholder="Digite o nome da musica"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="cifras">Acordes</label>
				<input
					value={acordes}
					onChange={(e) => setAcordes(e.target.value)}
					id="cifras"
					className={`
            h-11
            w-70
            px-3
            rounded-lg
            border
            border-gray-300
            outline-none
            focus:border-blue-600
            ${themeStyles.placeholder}
          `}
					type="text"
					placeholder="G, A, D, F"
				/>
			</div>
			<div className="flex w-full justify-center">
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
			</div>
		</form>
	);
}

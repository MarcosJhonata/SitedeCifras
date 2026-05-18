import { useTheme } from "../context/theme-context";
export default function SongForm() {
	const { themeStyles } = useTheme();
	return (
		<form
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
				<label htmlFor="cifras">Nome da Musica</label>
				<input
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
					placeholder="Digite os acordes"
				/>
			</div>
			<div className="flex w-full justify-center">
				<button
					type="button"
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

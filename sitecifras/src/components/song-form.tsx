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
        gap-8
        justify-between
        ${themeStyles.card}`}
		>
			<div className="flex flex-col gap-2">
				<label>Nome da Musica</label>
				<input
					className="
            h-11
            w-70
            px-3
            rounded-lg
            border
            border-gray-300
            outline-none
            focus:border-blue-600
          "
					type="text"
					placeholder="Digite o nome da musica"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label>Nome da Musica</label>
				<input
					className="
            h-11
            w-70
            px-3
            rounded-lg
            border
            border-gray-300
            outline-none
            focus:border-blue-600
          "
					type="text"
					placeholder="Digite os acordes"
				/>
			</div>
		</form>
	);
}

import type { Song } from "../types/song";

const MUSICAS_STORAGE_KEY = "sitecifras:musicas";

function isSong(value: unknown): value is Song {
	if (typeof value !== "object" || value === null) {
		return false;
	}

	const song = value as Song;

	return (
		typeof song.id === "number" &&
		typeof song.musica === "string" &&
		Array.isArray(song.acordes) &&
		song.acordes.every((acorde) => typeof acorde === "string")
	);
}

export function carregarMusicasSalvas() {
	const musicasSalvas = localStorage.getItem(MUSICAS_STORAGE_KEY);

	if (musicasSalvas === null) {
		return [];
	}

	try {
		const musicas = JSON.parse(musicasSalvas);

		if (Array.isArray(musicas) && musicas.every(isSong)) {
			return musicas;
		}
	} catch {
		localStorage.removeItem(MUSICAS_STORAGE_KEY);
	}

	return [];
}

export function salvarMusicas(musicas: Song[]) {
	localStorage.setItem(MUSICAS_STORAGE_KEY, JSON.stringify(musicas));
}

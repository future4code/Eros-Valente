
export function indexOf(source: string, query: string): number {
	for (let s = 0; s < source.length; s++) {
		if (source[s] === query[0]) {
			let count = 1;
			for (let q = 1; q < query.length; q++) {
				if (source[s + q] === query[q]) count++;
			}
			if (count === query.length) return s;
		}
	}
	return -1;
}


function isOneEdit(strA: string, strB: string): boolean {
	if (Math.abs(strB.length - strA.length) > 1) return false;
    
	if (strB.length > strA.length) {
		let temp = strA;
		strA = strB;
		strB = temp;
	}
	
	if (strA.length > strB.length) return strA.includes(strB);
	
	const charsDiff = strA.split("").filter((char, idx) => char != strB[idx]);
	return !(charsDiff.length > 1);
}

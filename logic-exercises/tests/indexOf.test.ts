import { indexOf } from "../src/indexOf";

describe("Testing indexOf function", () => {
	test("must return 4 when searching for 'ni' in the string 'bananinha'", () => {
		const result = indexOf("bananinha", "ni");

		expect(result).toBe(4);
	});

	test("must return 0 when searching for 'b' in the string 'bananinha'", () => {
		const result = indexOf("bananinha", "b");

		expect(result).toBe(0);
	});

	test("must return -1 when searching for 'x' in the string 'bananinha'", () => {
		const result = indexOf("bananinha", "x");

		expect(result).toBe(-1);
    });
    
    test("must return 6 when searching for 'nha' in the string 'bananinha'", () => {
		const result = indexOf("bananinha", "nha");

		expect(result).toBe(6);
    });
    
    test("must return -1 when searching for 'nhas' in the string 'bananinha'", () => {
		const result = indexOf("bananinha", "nhas");

		expect(result).toBe(-1);
	});
});


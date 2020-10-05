
export const findMissingNumber = (arr: number[]): number => {
    const fullArray: number[] = Array.from({ length: arr.length + 1 }, (value, i) => i + 1);
    let expectedSum = 0 
    for(let number of fullArray) {
        expectedSum += number
    }
    
    const missingNumber: number = arr.reduce((acc, cur) => acc - cur, expectedSum)
    return missingNumber

};


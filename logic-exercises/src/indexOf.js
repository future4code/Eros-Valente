// export const indexOf = (source: string, query: string): number => {
//     for (let i = 0; source.length >= i; i++) {
//         if (query === source[i]) {
//             return i
//         }
//     }    
//     return -1
// }
function indexOf(source, query) {
    for (var s = 0; s < source.length; s++) {
        if (source[s] === query[0]) {
            var count = 1;
            for (var q = 1; q < query.length; q++) {
                if (source[s + q] === query[q])
                    count++;
            }
            if (count === query.length)
                return s;
        }
    }
    return -1;
}
console.log(indexOf("bananinha", "nhas"));

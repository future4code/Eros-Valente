"use strict";
exports.__esModule = true;
exports.findMissingNumber = void 0;
exports.findMissingNumber = function (arr) {
    var expectedSum = 5050;
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        sum += num;
    }
    console.log(expectedSum - sum);
    return expectedSum - sum;
};
exports.findMissingNumber([1, 2, 3, 4]);

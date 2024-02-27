// https://leetcode.com/problems/return-length-of-arguments-passed/description/


let argumentLength = (...args) {
    return args.length;
}

console.log(argumentLength(1,2,3));
function pyramidScheme(base) {
    return base.length <= 1 ? [base] : pyramidScheme(base.map((ele, idx, arr) => idx === arr.length - 1 ? null : ele + arr[idx + 1]).filter(ele => ele !== null)).concat([base])
}

array = [1,2,3,4,5,6]
console.log(pyramidScheme(array))


function pyramidScheme(base) {
    return base.length <= 1 ? [base] :pyramidScheme(
        base.map((ele, idx, arr) => {
            return idx === arr.length - 1 ? null : ele + arr[idx + 1]
        }).filter(ele => ele !== null))
    .concat([base])
}

array = [1,2,3,4,5,6]
console.log(pyramidScheme(array))
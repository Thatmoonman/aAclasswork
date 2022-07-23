function zipper(arr1, arr2) {
    let string = arr1.reduce((acc, ele) => acc + ele) + arr2.reduce((acc, ele) => acc + ele)
    // return (typeOf string === 'string')
}

console.log(zipper(['1','2','3'],['a','b','c']))
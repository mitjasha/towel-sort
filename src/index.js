module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) return [];
    let out = [];
    let n = 0;
    for (let i of matrix){
        if (n === 0){
            for (let j of i){
                out.push(j);
            }
        }else{
            for (let j = i.length - 1; j >= 0; j--){
                out.push(i[j]);
            }
        }
        n = -n + 1
    }
    return out
}

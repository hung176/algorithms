function findStringLength(arr){
    return arr
            .map(e => e.length)
            .map((val1, index, ar) => {
                let count = 0;
                ar.forEach(val2 => {
                    if (val1 === val2) count++;
                });
                return count;
            })
            .reduce((acc, val, index, ar) => {
                let maxCount = Math.max(...ar);
                if (maxCount === val) acc.push(index);
                return acc;
            }, [])
            .map(val => arr[val]);
}



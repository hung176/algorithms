function sumTopTwo(arr){
    let maxInterger = Math.max(...arr);
    let secondInterger = arr[0];
    arr.forEach(val => {
        if(val < maxInterger)
        secondInterger = secondInterger > val ? secondInterger : val;
    })
    let result = maxInterger + secondInterger;
    return result;
}

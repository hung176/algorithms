function sumTopTwo(arr){
    if(arr.length === 0) return 0;
    else if(arr.length === 1) return arr[0];
      let maxInterger = Math.max(...arr);
      let secondInterger = arr[0];
      arr.forEach(val => {
          if(val < maxInterger)
          secondInterger = secondInterger > val ? secondInterger : val;
      })
      let result = maxInterger + secondInterger;
      return result;
}

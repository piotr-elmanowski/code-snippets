const x = Array.from({ length: 20 }, (v, k) => k); //generates array by given length, like [0, 1, 2, 3, 4...]

const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomizeArray = (arr) => {
    let arrTemp = [...arr];// source array is not mutated!
    
    return arr.map((el) => {
        const rand = randomInt(0, arrTemp.length - 1);
        const val = arrTemp[rand];

        arrTemp.splice(rand, 1);
        
        return val;
    });
};

console.log(randomizeArray(x));
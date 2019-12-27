const arr = [1, 2, 3, 5, 5];
// const arr = [1, 2, 2, 1, 3];
// const arr = [1, 2, 3, 4, 5, 5, 6, 6];

console.log(highestOccuredValueInArray(arr));

const highestOccursValueInArray = (arr) => {
    const arrUnique = [...(new Set(arr)).values()];

    return arrUnique
        .map((v, i, a) => ({
            value: v,
            percent: ( arr.filter(el => el === v).length / arr.length )
        }))
        .sort( (a, b) => (b.percent - a.percent) )
        .filter((el, i, a) => el.percent === a[0].percent);
};
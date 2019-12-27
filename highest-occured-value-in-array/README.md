Comments step by step:

arrUnique - create new unique array from base array

map - create new array with its values and its percentages of occurs in base array

sort - array after map - place in first position values with highest occurs percentage

filter - check if there are equal values to first (highest) element in sorted array 

Examples
var arr = [4, 1, 2, 2, 1]; - [{"value":1,"percent":0.4},{"value":2,"percent":0.4}]
var arr = [1, 2, 3, 5, 5]; - [{"value":5,"percent":0.4}]
var arr = [1, 2, 3, 4, 5, 5, 6, 6]; - [{"value":5,"percent":0.25},{"value":6,"percent":0.25}]
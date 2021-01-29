const numbers = [54,87,92,25,10,5,88,198,9,16,4,8,67,28,26,9,100,27,20,527,299,1,0,19,16,3,4];
let length;

const swap = (array, first, second) => {
    let initialValue = array[first];
    array[first] = array[second];
    array[second] = initialValue;
};

const compareValues = (array, i) => {
    let max = i;
    let first = 2 * i + 1;
    let second = 2 * i + 2;
    if (first < length && array[first] > array[max]) max = first;
    if (second < length && array[second] > array[max]) max = second;
    if (max !== i) {
        swap(array, i, max);
        compareValues(array, max);
    }
};

const heapsort = array => {
    length = array.length;
    let  i = Math.floor(length / 2);
    while (i >= 0) {
        compareValues(array, i);
        i--
    }
    while (length > 0) {
        length--;
        swap(array, 0, length);
        compareValues(array, 0);
    }
    return array
};

console.log(numbers);
console.log(heapsort(numbers));



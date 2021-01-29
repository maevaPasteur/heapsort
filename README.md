# Devoir sur l'algorythme | Heap Sort
##### Par Maëva Pasteur
Master 2 Dev - Ecv Digital Paris<br>
maeva.pasteur.pro@gmail.com
<br><br><br>

***

### Rendus
- **JavaScrpit** : heapsort.js
- **Python** : heapsort.py
<br><br><br>

***

### Javascript
```javascript
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
```
<br><br><br>

### Python
```python
def swap(array, first, second):
    initialValue = array[first]
    array[first] = array[second]
    array[second] = initialValue

def compareValues(array, i, length):
    max = i
    first = 2 * i + 1
    second = 2 * i + 2

    if first < length and array[max] < array[first]:
        max = first

    if second < length and array[max] < array[second]:
        max = second

    if max != i:
        swap(array, i, max)
        compareValues(array, max, length)

def heapsort(array):
    length = len(array)

    for i in range(length//2 - 1, -1, -1):
        compareValues(array, i, length)

    for i in range(length-1, 0, -1):
        array[i], array[0] = array[0], array[i]
        compareValues(array, 0, i)

    return array

numbers = [54,87,92,25,10,5,88,198,9,16,4,8,67,28,26,9,100,27,20,527,299,1,0,19,16,3,4]
print(numbers)
print(heapsort(numbers))

```

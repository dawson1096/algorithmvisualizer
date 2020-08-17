export function quickSortAlg(array) {
    let arrayCopy = array.slice();
    let animations = [];
    console.log(arrayCopy)
    quickSort(animations, arrayCopy, 0, arrayCopy.length - 1);
    console.log(arrayCopy);
    return animations;
}

function partition(animations, array, low, high) {
    let pivot = array[high];
    let i = (low-1);
    for (let j=low; j<high; j++) {
        if (array[j] < pivot) {
            i++;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            animations.push([high, i, j, array[i], array[j]]);
        }
    }
    let temp = array[i+1];
    array[i+1] = array[high];
    array[high] = temp;
    animations.push([-1, i+1, high, array[i+1], temp]);
    return i+1;
}

function quickSort(animations, array, low, high) {
    if (low < high) {
        let pi = partition(animations, array, low, high);
        quickSort(animations, array, low, pi-1);
        quickSort(animations, array, pi+1, high);
    }
}

export function bubbleSortAlg(array) {
    let arrayCopy = array.slice();
    let animations = [];
    for (let i=0; i<arrayCopy.length; i++) {
        for (let j=0; j<arrayCopy.length-i-1; j++) {
            if (arrayCopy[j] > arrayCopy[j+1]) {
                let temp = arrayCopy[j];
                arrayCopy[j] = arrayCopy[j+1]; 
                arrayCopy[j+1] = temp;
                if (j === arrayCopy.length-i-2) {
                    animations.push([j, j+1, -1, arrayCopy[j], arrayCopy[j+1]]);
                }
                else {
                    animations.push([j, j+1, -2, arrayCopy[j], arrayCopy[j+1]]);
                }
            }
            else {
                if (j === arrayCopy.length-i-2) {
                    animations.push([j, j+1, -1]);
                }
                else {
                    animations.push([j, j+1, -2]);
                }
            }
        }
    }
    return animations
}

export function insertionSortAlg(array) {
    let arrayCopy = array.slice();
    let animations = [];
    for (let i = 1; i < arrayCopy.length; i++) {
        let j = i - 1;
        let tmp = arrayCopy[i];
        while (j >= 0 && arrayCopy[j] > tmp) {
          arrayCopy[j + 1] = arrayCopy[j];
          animations.push([i, j, arrayCopy[j], tmp]);
          j--;
        }
        arrayCopy[j+1] = tmp;
    }
    return animations;
}
export function quickSortAlg() {
    
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
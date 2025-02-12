const getArr = value => String(value).split('').map(item => Number(item));


const sort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    const pivot = arr[0];
    const less = [];
    const greater = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    return [...sort(less), pivot, ...sort(greater)];

}


const reverse = (arr) => {
    const reverseArr = [...arr];
    return reverseArr.reverse();
}

const getNewNumber = (minNumber, maxNumber) => Number(maxNumber.join('')) - Number(minNumber.join(''));


const print = (count, maxNumber, minNumber) => {
    const row = document.createElement('p');
    row.innerHTML = `${count}) ${maxNumber.join('')} - ${minNumber.join('')} = ${numberValue}`;
    document.querySelector('.result').append(row);
}


let value;

let numberValue;

let count;

let arr;

let minNumber;

let maxNumber;

document.querySelector('#start')
.addEventListener('click', () => {

    value = document.querySelector('#number').value;

    numberValue = Number(value);

    let check = [1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999].includes(numberValue);

    if (check) {
        document.querySelector('#number').value = '';
        return;
    }

    if (value < 1000 || value > 9999) {
        document.querySelector('#number').value = '';
        return;
    }

    count = 0;

    document.querySelectorAll('p')
    .forEach(row => row.remove());

    while (numberValue != 6174) {

        count += 1;
    
        arr = getArr(numberValue);
    
        minNumber = sort(arr);
    
        maxNumber = reverse(minNumber);
    
        numberValue = getNewNumber(minNumber, maxNumber);
    
        print(count, maxNumber, minNumber);
    
    }
})









// 1.

const title = document.querySelector('#title');
title.innerHTML = 'DOM 조작 성공!';

// 2.

function func2(){
    console.log('func2');
    const input = document.querySelector('#usernameInput');
    const text = input.value;
    const greeting = document.querySelector('#greeting');
    greeting.innerHTML = '안녕하세요, ' + text+ '님!';
}

// 3.

function func3(){
    console.log('func3');
    const box = document.querySelector('#colorBox');
    box.style = 'background-color : skyblue; color : white;'
}

// 4.

function func4(){
    console.log('func4');
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}

// 5.
function func5(){
    console.log('func5');
    const box = document.querySelector('#targetBox');
    box.remove();
}

// 6.
const itemAll = document.querySelectorAll('.item');
for(let i = 0 ; i < itemAll.length ; i++){
    itemAll[i].style = 'color : green; font-weight : bold;';
}

// 7.

function func7(){
    console.log('func7');
    const imageChange = document.querySelector('#mainImage');
    imageChange.src = 'https://placehold.co/600x400/red/white';
}

// 8.
function func8(){
    const foodSelect = document.querySelector('#foodSelect');
    const text = foodSelect.value;
    console.log(text);
}

//9.
let array1 = [];
function func9(){

    const input = document.querySelector('#itemInput');
    const array = document.querySelector('#arrayStatus');

    if(input.value == '') return ;
    
    array1.push(input.value);
    array.textContent = `[ ${array1} ] `;

    input.value = '';
}

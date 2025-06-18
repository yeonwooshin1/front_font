
/*
// 1.

function isAdult(age){
    if(age >= 20){
        console.log(true);
    }
    else{console.log(false);}
}

isAdult(11);
isAdult(23);


// 2.

function sumArray(name){
    let sum = 0;
    for(i = 0 ; i < name.length ; i++){
        sum += name[i];
    }
    console.log(sum);
} 

const numbers = [10, 20, 30, 40, 50];

sumArray(numbers);



// 3.
function findLongestWord(Array){
    let longestFruits = '';
    for(i = 0; i < Array.length ; i++){
        if(Array[i].length > longestFruits.length){
            longestFruits = Array[i];
        }
    }
    console.log(longestFruits);
}

const words = ['apple', 'banana', 'kiwi', 'strawberry'];
findLongestWord(words);



// 4.

let userScore = 0;

function gainScore(){
    return userScore += 10; 
} 

function loseScore(){
    return userScore -= 5; 
} 

gainScore();
gainScore();
gainScore();
loseScore();
console.log(userScore);



// 5.
function findTopStudent(Array){
    let topStudent = '';
    let topScore = 0;
    for(let i = 0; i < Array.length ; i++){

        if(topScore < Array[i].score){
            topScore = Array[i].score
            topStudent = Array[i].name
        }

    }
    return topStudent;
} 

const students = [
  { name: '김철수', score: 85 },
  { name: '이영희', score: 92 },
  { name: '박민준', score: 78 }
];

console.log(findTopStudent(students));



// 6.

const products = [
  { name: '노트북', price: 1200000, stock: 5 },
  { name: '모니터', price: 350000, stock: 12 },
  { name: '키보드', price: 80000, stock: 25 }
];

function renderProducts(Array){
    let html = '';
    for(let i = 0 ; i < Array.length ; i++){
        html += `<div>
                    <h4> 상품이름 : ${Array[i].name} </h4>
                    <p> 가격 : ${Array[i].price} 원 </p>
                    <p> 재고량 : ${Array[i].stock} 개 </p>
                </div>`
    }
    document.write(html);
} 

renderProducts(products);


// 7.



function calculator(num1 , num2 , operator){
    if(operator == '+'){
        console.log(num1 + num2);
    }
    else if(operator == '-'){
        console.log(num1 - num2);
    }
}

calculator(1 , 2, '-');
calculator(2 , 3 , '+');



// 8.

function renderList(Array){
    let html = '<ul>';
    for(let i = 0 ; i < Array.length ; i++){
        html += `<li>할 일 내용 : ${Array[i]} </li>`         
    }
    html += `</ul>`;
    document.write(html);
} 



let todoList = ['장보기', '운동하기']

renderList(todoList);



// 9.


function getTicketPrice(age){
    let fee = 0;
    if(age >= 20){
        fee = 10000;
    }
    else if(age >= 8){
        fee = 5000;
    }
    else{ fee = '무료'; }

    return fee;
}   

console.log(getTicketPrice(20)); // 임시 확인용

*/
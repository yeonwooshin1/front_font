


// 1.

function sayHello(){
    console.log('함수 호출 성공!')
}
sayHello();

// 2.

function printSum(x, y){
    let number = x+y;
    console.log(number);
}
printSum(5,10);


// 3.

function getWelcomeMessage(string){
    return "환영합니다 " + string +"님";
}
let result = getWelcomeMessage('신연우');
console.log(result);

//4.

let counter = 0;
function increaseCount(){
    counter += 1;
}

increaseCount();
increaseCount();
increaseCount();
console.log(counter);

//5.

function printNumber(n){
    for(let i = 1 ; i <=n; i++){
        console.log(i);
    }
}

printNumber(7);

// 6.
let userList = [];

function addUser(name){
    userList.push(name);
}

let add =prompt("이름 추가");
addUser(add);
console.log(userList);

// 7.

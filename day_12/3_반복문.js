
//1

for(i = 1 ; i <= 10 ; i++){
    console.log(i);
}
//2
let fruitList = []
for(i = 1 ; i <= 4 ; i++){
    let fruitPush = prompt("과일 입력");
    fruitList.push(fruitPush);
}
console.log(fruitList);


//3
let numbers = [1,2,3,4,5];
for( i= numbers.length-1 ; i >= 0 ; i--){
    console.log(numbers[i])
}



//4

let sum = 0;
for(i = 1 ; i <= 50 ; i++){
    sum += i;
}
console.log(sum);


//5
for(i = 0 ; i <= 20 ; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

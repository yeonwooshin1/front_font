
/*
    반복문 : 특정한 조건의 논리 결과에 true 일때 특정한 명령어 반복 처리한다.

*/


// [1] '안녕하세요' 문자열 5번 출력하시오.
console.log("안녕하세요");
console.log("안녕하세요");
console.log("안녕하세요");
console.log("안녕하세요");
console.log("안녕하세요"); // 복사/붙여넣기 를 하면 된다.

// 문제점 : 코드 숫자가 많아지면 개 빡세다. (관리)

// [2] 1 부터 5까지 출력하시오.
console.log( 1 );
console.log( 2 );
console.log( 3 );
console.log( 4 );
console.log( 5 );   // 복사/붙여넣기 하고 숫자만 바꾸면 된다.

// 문제점 : 코드 숫자가 많아지면 개 빡세다.22 (관리)

// [3] 반복(중복)되는 코드 와 반복되지 않은 코드
// 반복되는 코드는 console.log();
// 반복되지 않는 코드는 1 2 3 4 5 , 패턴/순서 찾기 : 1부터 5까지 1씩 증가.
// 1. 초기값                   : 1
// 2. 조건(반복끝)문            : <=5
// 3. 증감(증가/감소)식         : +1 또는 ++

//for( 반복변수의 초기값 ; 조건문 ; 증감식){반복되는 코드}

let hello = "안녕하세요"
for(let i = 1 ; i <=5 ; i++ ){
    console.log( hello );
}

// [4] 1부터 10까지 누적합계를 계산하세요.
let sum = 0;
for(let i = 1; i <=10 ; i++){
    sum += i ;
    
}
console.log(sum);

// [5] 구구단



for(let i = 1 ; i <= 9; i++){
    console.log(2*i);
}

for(let i =1 ; i <=9; i++){
    for(let j=1 ; j<= 9 ; j++){
        console.log(i*j);
    }
}

// [6] 3개의 각각 정수를 입력받아서 배열에 저장하시오.
let numList = []
for(let i = 1 ; i <=3 ; i++){
    let number = prompt("숫자를 넣으셈")*1;
    numList.push(number);
}
console.log(numList);


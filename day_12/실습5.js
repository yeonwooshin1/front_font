

// 1.

let fruitList= ["사과" , "바나나"];
let fruitPush = prompt(" 과일을 추가하세요. ");

if(fruitList.indexOf(fruitPush) !== -1){
    console.log( " 이미 존재하는 과일입니다.");
}else{
    fruitList.push(fruitPush);
    console.log(fruitList);
}

//2

let PersonId = prompt( " 주민등록번호 13자리를 입력하시오. (단 -는 제외, 띄어쓰기 금지) ");

if(PersonId[6] == 1 || PersonId[6] == 3){
    console.log("blue");
}
else if(PersonId[6] == 2 || PersonId[6] == 4){
    console.log("red");
}
else{}


//3
let buyMoney= prompt(" 구매 금액을 입력하세요.")*1;

if( buyMoney >= 50000){
    let sellMoney = buyMoney*0.9;
    console.log("5만원 이상 구매는 10% 할인됩니다. 최종 결제 금액은 " + sellMoney +" 원 입니다.");
}
else if( buyMoney >= 30000){
    let sellMoney = buyMoney*0.95;
    console.log("5만원 이하, 3만원 이상 구매는 5% 할인됩니다. 최종 결제 금액은 " + sellMoney +" 원 입니다.");
}
else if( buyMoney >= 10000){
    let sellMoney = buyMoney*0.99 ;
    console.log("3만원 이하, 1만원 이상 구매는 1% 할인됩니다. 최종 결제 금액은 " + sellMoney +" 원 입니다.");
}
else{
    console.log("최종 결제 금액은 " + buyMoney +" 원 입니다.");
}



//4

let = selectMonth =prompt("1~12월 중에서 숫자를 입력하시오.")*1;

if(selectMonth == 1 || selectMonth == 2 || selectMonth == 3){
    console.log("봄 : " + selectMonth+ "월")
}
else if(selectMonth == 4 ||selectMonth == 5 || selectMonth == 6){
    console.log("여름 : " + selectMonth+ "월")
}
else if(selectMonth == 7 ||selectMonth == 8 || selectMonth == 9){
    console.log("가을 : " + selectMonth+ "월")
}
else if(selectMonth == 10 || selectMonth == 11 || selectMonth == 12){
    console.log("겨울 : " + selectMonth+ "월")
}
else{ console.log("잘못된 월 입니다.");}



//5

let number1 = prompt("숫자 입력 1")*1;
let number2 = prompt("숫자 입력 2")*1;
let number3 = prompt("숫자 입력 3")*1;

if(number1 > number2){
    if(number1 > number3){ console.log(number1);}
    else{console.log(number3);}
}
else if(number2 > number3){
    console.log(number2);
}
else{console.log(number3);}





//6
let setYear = prompt("연도를 입력하시오. (단 숫자만)")*1;

if(setYear%4 == 0){
    if(setYear == 0){console.log(setYear +"년은 평년입니다.");}
    else if(setYear%100 == 0){
        if(setYear %400 == 0){console.log( setYear+ "년은 윤년입니다.");}
        else{console.log( setYear+ "년은 평년입니다.");}
    }else{console.log( setYear+ "년은 윤년입니다.");}
} 
else{console.log( setYear+ "년은 평년입니다.");}



/*문제 7: 세 수 오름차순 정렬
서로 다른 세 개의 정수를 입력받아, 오름차순(작은 수부터 큰 수 순서)으로 정렬하여 출력하는 프로그램을 작성하시오.
예시: 17, 4, 8 입력 시 4, 8, 17 출력 */
// (1) 3개의 정수를 입력받는다. 
// (2) 3개의 하나의 배열 자료로 표현하여 변수에 저장
// (3) 스왑(교체) : 두 자료들 간의 위치를 교체하는 방법 , 한 위치에 하나만 저장이 가능하다.
/*
    A = 10;  B = 20;        두 변수간의 자료를 교체하시오.
        A = B;     B의 자료를 A에 대입 * A의 기존 자료는 사라진다. (변수는 하나의 자료 저장한다.)
        A = 20;  B = 20;  문제 발생 !!!! 
    *해결방안 : 임시변수 만들어서 임시 보관용 
    A = 10;  B = 20;  TEMP;
        TEMP = A;       TEMP = *10 , A = 10 , B = 20
        A = B;          TEMP = 10 , A = *20 , B = 20
        B = TEMP;       TEMP = 10 , A = 20 , B = *10

// (4) 오름차순 : 두 수 간의 작은 값을 앞에 나열 , 두 수 비교하기.
//  A > B 비교하여 A가 더크면 A 와 B의 위치를 변경/스왑 
// (5) 조건 : num1 > num2 , num1 > num3 , num2 > mum3 
*/
let number4 = prompt("숫자 입력 1")*1;
let number5 = prompt("숫자 입력 2")*1;
let number6 = prompt("숫자 입력 3")*1;

let num= [number4 , number5 , number6];
let temp;

if(num[0] < num[1]){
    temp = num[0] ;
    num[0] = num[1];
    num[1] = temp;
}


if(num[0]< num[2]){
    temp = num[0] ;
    num[0] = num[2];
    num[0] = temp;
}

if(num[1]< num[2]){
    temp = num[2] ;
    num[1] = num[2];
    num[1] = temp;
}

console.log(num);








//8

let player1 = prompt(" 플레이어1 : 가위 바위 보 중에서 선택하세요 ");
let player2 = prompt(" 플레이어2 : 가위 바위 보 중에서 선택하세요 ");

if(player1 == "가위"){
    if(player2 == "보"){
        console.log("플레이어1 승리");
    }
    else if(player2 == "바위"){
        console.log("플레이어2 승리");
    }
    else if(player2 == "가위")
        { console.log("무승부");}
    else{console.log("가위, 바위, 보 이 3개 중 하나만 입력하세요.");}
}
else if(player1 == "보"){
    if(player2 == "보"){
        console.log("무승부");
    }

    else if(player2 == "바위"){
        console.log("플레이어1 승리");
    }

    else if(player2 == "가위"){ console.log("플레이어2 승리");}

    else{console.log("가위, 바위, 보 이 3개 중 하나만 입력하세요.");}
}
else if(player1 == "바위"){
    if(player2 == "보"){
        console.log("플레이어2 승리");
    }

    else if(player2 == "바위"){
        console.log("무승부");
    }

    else if(player2 == "가위"){ console.log("플레이어1 승리");}

    else{console.log("가위, 바위, 보 이 3개 중 하나만 입력하세요.");}
    
}
else{console.log("가위, 바위, 보 이 3개 중 하나만 입력하세요.");}




//9

let carSearch = prompt(" 차량 번호를 입력하세요.");

let carArray = [ '250어7142', '142가7415', '888호8888' ];
let locationArray = [ 'A1', 'B3', 'C2' ];
let carArraylocation = carArray.indexOf(carSearch);


if(carArraylocation != -1){
    {console.log(carSearch +" 차량은 "+ locationArray[carArraylocation] + "에 위치합니다.");}
}
else{console.log("차량이 존재하지 않습니다.");}



//10
let studyList= ['수학' , '영어' , '과학' , '국어'];
let studyEliminate = prompt(" 제외하고 싶은 과목을 선택하세요. ");
let studyEliminate1 = studyList.indexOf(studyEliminate)


if(studyEliminate1 !== -1){
    studyList.splice( studyEliminate1 , 1 );
    console.log(studyList);
}else{
    console.log("해당 과목은 신청 목록에 없습니다.");
}

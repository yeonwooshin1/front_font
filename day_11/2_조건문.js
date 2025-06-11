/*
//1.
let score1 =prompt("점수1")*1;
let score2 =prompt("점수2")*1;
let totalScore = score1 + score2 ;

if(totalScore >= 90){console.log("성공");}
else{console.log("실패");}


//2.

let score3 = prompt(" 점수 입력 ");
let score4 = prompt(" 점수 입력 ");
if( score3 > score4) {
    console.log(score3);
}
else{(console.log(score4));}


//3.

let id =prompt("아이디를 치세요.");
let password = prompt("비밀번호를 치세요");

if(id =="admin"){
    if(password == "1234"){console.log("로그인 성공");}
    else{console.log("로그인 실패");}
}
else{console.log("로그인 실패");}




//4

let inputPassword =prompt("비밀번호를 설정하세요.");

if(inputPassword.length >= 12){
    console.log("보안 등급 : 강함");
}else if(inputPassword.length>= 8){
    console.log("보안 등급 : 보통");
}else{console.log("보안 등급 : 약함 (8자 이상으로 설정해주세요.)");}



//5

let seatList = ['O', 'X', 'O'];
let seat = prompt("좌석번호를 결정하세요 (0 , 1 , 2 중에서)")
if(seatList[seat] == 'X')
{ console.log(" 예약 가능");
    seatList[seat] = 'O' ;
}else{ console.log("예약 불가능");}


//6

let scoreGame =prompt("점수를 입력하시오")*1;

if(scoreGame >= 900){console.log("A급 경품");}
else if(scoreGame >= 700){console.log("B급 경품");}
else if(scoreGame >= 500){console.log("C급 경품");}
else{console.log("참가상");}


//7


let role =prompt("role select");

if(role == "admin"){console.log("모든 기능에 접근하실 수 있습니다.");}
else if(role == "editor"){console.log("콘텐츠 수정 및 생성 기능에 접근할 수 있습니다.");}
else if(role == "viewer"){console.log("콘텐츠 조회만 가능합니다.");}
else{console.log("정의되지 않은 역할입니다.");}




//8

let age = prompt("나이를 입력하세요.")*1;

if(age >= 65){console.log("3,000원");}
else if(age >= 20){console.log("10,000원");}
else if(age >= 8){console.log("5,000원");}
else{console.log("무료");}



//9

let gradeScore = prompt(" 점수를 입력하시오.")*1;

if(gradeScore >= 90){console.log("A등급")}
else if(gradeScore >= 80){console.log("B등급")}
else if(gradeScore >= 70){console.log("C등급")}
else{console.log("재시험");}
*/



//10

let drinkNames = ["콜라", "사이다", "커피"];
let drinkPrices = [ 1000, 2000, 1500 ];
let select = prompt( " 항목을 선택하시오. ( 0 , 1 , 2 중에서 선택하시오. )")*1;

if(select == 0 || select == 1 || select == 2){console.log("선택하신 음료는 " + drinkNames[select] + "입니다. 가격은 " + drinkPrices[select] + "원 입니다.");}
else{console.log("없는 상품입니다. 다시 골라주세요.");}

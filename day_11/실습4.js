

//1
let 밑변 = prompt( "밑변")*1;
let 높이 = prompt( "높이" )*1;
console.log( "넓이는? : " + (밑변 * 높이/2));

//2
let 섭씨온도 = prompt( " 섭씨온도는? " )*1;
console.log("화씨 온도 변환 : " + ((섭씨온도*9/5)+32));
//3
let 태어난연도 =prompt( " 태어난 연도 ")*1;
console.log("나이는? : " + (2025-태어난연도));
//4
let 키 = prompt("몇 센치에용")*1;
let 몸무게 = prompt("몇 키로세용")*1;
console.log("BMI지수는? : " +(몸무게 / ((키/100) * (키/100))));
//5
let id =prompt("아이디를 치세요.");
let email = prompt("이메일을 치세요");

let 판독기 = id == "admin" || email == "admin@test.com" ? "관리자" : "일반사용자" ;
console.log( 판독기 );
//6
let 점수 = prompt("점수를 입력하세요.")*1;

let 결과1 = 점수 >=90 ? "A" : 점수<90 && 점수>= 80 ? "B" : 점수<70 ? "C" : "결과 없음"; 

document.write( "<h2> 결과는 ?      " +결과1+ " 입니다.</h2>");

//7
let 나이 =prompt("나이를 입력하세요.")*1;
let 결과2 = 나이>=20 && 나이<= 29 ? "이벤트 대상입니다." : "이벤트 대상이 아닙니다." ;
console.log(결과2);

//8
let likeCount = 3;
console.log("좋아요 [" + (likeCount++) + "]");
console.log("좋아요 [" + (likeCount++) + "]");
console.log("좋아요 [" + (likeCount++) + "]");
console.log("좋아요 [" + (likeCount++) + "]");
console.log("좋아요 [" + (likeCount++) + "]");
console.log("좋아요 [" + (likeCount++) + "]");
console.log("좋아요 [" + (likeCount++) + "]");
console.log("좋아요 [" + (likeCount++) + "]");


//9
let todoList = [ "장보기", "과제하기" ];
let plusList = prompt("할 일 추가");
todoList.push(plusList);
console.log(todoList);

//10
let waitingList =[ "김민준", "이서연" , "박도윤" , "최지우" ];
console.log("마지막 대기자는 "+ waitingList[waitingList.length-1] +" 입니다.") ;


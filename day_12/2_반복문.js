

/*

    [ for ]
        1. 형태
            for( 초기값 ; 조건문 ; 증감식 ){
                실행문;
            }
        2.  (1) 초기값 : 반복 할 때 반복의 카운터/횟수 체크하는 변수의 처음값
            (2) 조건문 : 반복 실행문이 실행되는 조건으로 true 이면 {} 실행 , 아니면 종료
            (3) 증감식 : 반복 변수의 증가 혹은 감소 변화 연산식 
            (4) 실행문 : 조건이 true일 때 반복실행되는 코드
        3. 순서
            1. 초기값 -> 2. 조건문(true) -> 3. 실행문 -> 4. 증감식 -> 5. 조건문(true) -> 6. 실행문
                                                     -> 4. 증감식 -> 5. 조건문(true) -> 6. 실행문
                                                     -> 4. 증감식 -> 5. 조건문(true) -> 6. 실행문
                                                     -> 4. 증감식 -> 5. 조건문(false) -> 종료 

        예 ] 유재석이 계단을 1칸부터 10칸까지 1칸씩 오른다
        for(유재석위치 = 1 ; 유재석위치 <= 10 ; 유재석위치++){
            오른다;
        }
        
        4. 배열과 반복문의 관계 :
            (1) 배열과 인덱스는 순차적인 순서 번호가 존재한다. 인덱스란? 0부터 자료가 저장된 순서번호
            (2) 배열의 길이(자료개수) : 변수명.length
            (3) 배열의 마지막인덱스( 0시작 ) : 변수명.length - 1
                회원이 총 3명이면 , 인덱스는 0 1 2 , 마지막인덱스 : 2    
            
*/
// [1] 배열의 데이터
let 과일상자 = [ '사과' , '포도' , '딸기' ]; // 총개수:3 , 인덱스 : 0 1 2
// [반복문 없이]
console.log( 과일상자[0] );
console.log( 과일상자[1] );
console.log( 과일상자[2] ); // 만약 과일이 1000개라면 ,,, ㅡㅡ

// [반복문사용1] : 0부터 2까지 1씩 증가 하는 인덱스!!

for(index = 0 ; index <= 2 ; index++){
    console.log(과일상자[index]);
}

// [반복문사용2] : 0부터 2까지( 마지막 인덱스 즉 length-1까지 ) 1씩 증가 하는 인덱스!!
for(index = 0 ; index <= 과일상자.length-1 ; index++){
    console.log(과일상자[index]);
}

// [2] 3개의 입력 받은 데이터들을 배열에 추가/저장하시오.
let dataList = [];
for( let i = 1 ; i <= 3 ; i++){
    data1= prompt("data1 : ");
    dataList.push(data1);
}

console.log(dataList);

// [생각해보기1] : dataList의 모든 자료들을 <ul> 마크업의 요소 하나씩 <li> 마크업에 출력하시오.

let html1 = "<ul>"+"<li>" + dataList[0] +"</li><li>" + dataList[1] +"</li><li>" + dataList[2] +"</li></ul>";
document.write(html1);

//반복문 활용
let html2 = "<ul>";
for(index = 0 ; index <= 2 ; index++){
    html2 += "<li>"+ dataList[index] + "</li>";
} // for end
html2 += "</ul>";

document.write( html2);

/* [ 실습13 : 미니 전화번호부 페이지 ] *제출

1. 목표
   - 사용자가 이름, 전화번호, 그리고 간단한 메모를 함께 저장하여 
   자신만의 상세한 연락처 목록을 만들고, 등록된 모든 연락처를 한눈에 
   볼 수 있는 전화번호부 웹 페이지를 만듭니다.
2. 화면 구성
   - 페이지는 사용자가 정보를 입력하는 **'연락처 등록 영역'**과 
   그 결과를 보여주는 **'연락처 목록 영역'**으로 명확히 구분되어야 합니다.
   - 연락처 등록 영역:
      - 이름 입력: 저장할 사람의 이름을 텍스트로 자유롭게 
      입력할 수 있어야 합니다. (예: "홍길동")

      - 전화번호 입력: 연락처의 전화번호를 숫자로 
      입력할 수 있어야 합니다 (예:010-1234-5678)

      - 메모 입력: 해당 연락처에 대한 추가 정보(소속, 관계 등)를 
      텍스트로 입력할 수 있는 칸이 있어야 합니다. (예: "OO회사 부장")

      - 등록 버튼: 이름과 전화번호를 입력한 후, 
      목록에 추가하기 위한 "등록" 버튼이 있어야 합니다.

   - 연락처 목록 영역:
      - 등록된 모든 연락처 정보를 보여주는 표가 있어야 합니다.
       - 표는 "이름", "전화번호", "메모" 순서의 열로 구성되어야 합니다.
3. 핵심 기능
   - 초기 데이터 표시:
      - 사용자가 페이지에 처음 방문했을 때, 전화번호부 
      사용법을 쉽게 이해할 수 있도록 두 개의 예시 연락처가 
      목록 표에 기본적으로 표시되어 있어야 합니다.

   - 연락처 등록 기능:
      - 사용자가 '등록 영역'에 이름과 전화번호를 모두 입력하고 
      "등록" 버튼을 클릭하면, 해당 연락처가 '목록 영역' 표의 가장 아래쪽에 
      새로운 행으로 즉시 추가되어야 합니다. */

/*
    [ 작업 순서 ]
    1. (프) 화면 구성 (HTML/CSS)
    2. (백) 데이터모델링
    (1) 저장할 자료들을 모두 찾기
        - 이름 , 번호 , 메모
    (2) 저장할 자료들의 분리( 중복 배제 ) 1:M (하나가 여러개를 참조/관계)
    (3)  분리된 자료들끼리 연관관계 X
        * 테이블(배열) , 테이블내 행 / 가로 단위 (객체)

    3. (백) 함수 (기능) 설계
        (1) '등록버튼' 클릭했을 때 입력받은 3가지 정보를 배열에 저장
            함수명      :      (아무거나) 'submitButton'
            매개변수    :      x    *document.querySelector 로 대체
            반환값      :      x
            로직        :   1. input으로부터 입력받은 값 가져오기
                            2. 입력값 3개로 객체를 구성
                            3. 구성된 객체를 연락처목록(배열)에 저장    
            실행조건 : '등록버튼'을 클릭 (onClick) 했을때
        
        (2) '전체조회' 함수
            함수명      :       'allSearchSector'
            매개변수    :       x
            반환값      :       x
            로직        :       1. 특정한 구역(table)에 배열내 모든 정보를 HTML 형식으로 출력한다
            실행조건    :       1.페이지가 열렸을 때 ( 최초 1번 )  2. 등록 성공 했을때 ( 새로고침 )
    4. (백) 로직

    5. (프/백) 화면 <---> 기능 연동
*/





const idArray = // 연락처 등록 부분 
        [{ code : 1 , name : '홍길동' , phoneNumber : '010-1234-5678' , memo : '아버지를 아버지라고 부르지 못하는 놈' }, 
         { code : 2 , name : '나바보' , phoneNumber : '010-0909-9884' , memo : '난 바보다' }
        ]

let lastArray = idArray.length-1; // idArray의 마지막 배열의 숫자
let codePlus = idArray[lastArray].code ; // idArray의 마지막 배열의 숫자에서 .code 객체

       
function submitButton(){         console.log(submitButton);                 // onClick 할 함수 submitButton
    const nameInput = document.querySelector('#nameInput');                 // nameInput의 DOM객체화
    const phoneNumberInput = document.querySelector('#phoneNumberInput');   // phoneNumberInput의 DOM객체화
    const memoInput = document.querySelector('#memoInput');                 // memoInput의 DOM객체화
    
    const name = nameInput.value;                                           // nameInput의 DOM객체화 간소화한 것
    const phoneNumber = phoneNumberInput.value;                             // phoneNumberInput의 DOM객체화 간소화한 것
    const memo = memoInput.value === '' ? 'none' : memoInput.value;         // memoInput의 DOM객체화 간소화한 것, 만약 memoInput이 없다면 none으로 보냄
    

    if(name == '' || phoneNumber == '') {                                   // 공백일 경우 추가되지 않도록하는 기능
        alert("이름과 전화번호 둘 다 기입해주세요.");                          // 다시 치라는 알림창 추가함
        nameInput.value = '';	                                            // 전체 리셋
        phoneNumberInput.value = '';   
        memoInput.value = '';   
        return
    }                        


    codePlus++;                         // code에 idArray에 마지막 인덱스의 코드에 증감식을 써서 다음 code는 마지막 code+임
    const pushMan = { code : codePlus , name : name , phoneNumber : phoneNumber , memo : memo }
        // pushMan = code랑 name이랑 phoneNumber이랑 memo랑 입력한 value값들 저장하여 객체화
    idArray.push(pushMan);              // pushMan을 idArray 배열에 push

    nameInput.value = '';	        // 입력 다 한 후 value값 공백~!
    phoneNumberInput.value = '';	    // 입력 다 한 후 value값 공백~!
    memoInput.value = '';	        // 입력 다 한 후 value값 공백~!


    allSearchSector();      // 다 넣은 후 allSearchSector 새로고침

}



allSearchSector();                          // allSearchSector 새로고침
function allSearchSector(){                 // 배열 넣어서 html에 올려줄 할 함수 allSearchSector                           
    
    const allSearch = document.querySelector('#allSearch');  //allSearch 얠 DOM객체화
    let html = '';                                           //추가할 html 변수 준비 
    
    for(let i = 0 ; i < idArray.length ; i++){ // idArray배열 순회하면서 배열 안 모든 객체들 html에 추가할 for문
        let pushArray = idArray[i];             // idArray 배열의 i번째 배열을 pushArray로 간소화
        html += `<tr>                                   
                    <td> ${pushArray.code} </td>
                    <td> ${pushArray.name} </td>
                    <td> ${pushArray.phoneNumber} </td>
                    <td> ${pushArray.memo} </td>
                </tr>`              ;                        // html에 추가할 요소들 적는중 
                                                            // pushArray (= idArray).요소들
    }

    allSearch.innerHTML = html;                             // 그대로 AllSearch에 html 붙여넣기
}

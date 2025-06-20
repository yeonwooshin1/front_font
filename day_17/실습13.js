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


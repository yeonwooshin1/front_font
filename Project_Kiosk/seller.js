productAddList();
productSelect();
stockInputList();


/*전체 제품 조회 (View All Products)
기능: 현재 등록된 모든 제품 목록을 표 형태로 조회.
표시 항목: 제품 ID, 제품명, 가격,간단설명,이미지URL, 삭제버튼

제품 삭제 (Delete Product)
기능: 특정 제품을 시스템에서 제거.
입력/선택: 제품 목록에서 삭제할 제품의 삭제버튼 클릭
동작: 삭제 성공/실패 메시지, 제품 목록 자동 업데이트. */
// 데이터모델링

/*const product = [ { pno : 1 , 제품명 -> pName : '아메리카노' , 가격 -> pPrice : 2000 , 설명 -> pDetails : '콜롬비아원두' , pImg : 'https://placehold.co/100' } ];
let lastPno = product.length -1;
let currentPno = product[lastPno].pno;*/

/*
const stockList = [{ sno : 1 , pno : 1 , 입출고 -> comingInOut : '입고' , amount : 30 , reason : '12312312312' , sdate : '2025-06-24' } ]
let lastSno = stockList.length -1;
let currentSno = stockList[lastSno].sno; */







function productAdd(){ console.log('productAdd');       // 1. 제품 등록함수
    
    // 마크업객체 가져오기
    const nameInput = document.querySelector('.nameInput');         console.log(nameInput);     // DOM 객체화
    const payInput = document.querySelector('.payInput');           console.log(payInput);      // DOM 객체화
    const areaInput = document.querySelector('.areaInput');          console.log(areaInput);    // DOM 객체화        
    const imgInput = document.querySelector('.imgInput');           console.log(imgInput);      // DOM 객체화
    
    // value값 가져오기
    const name = nameInput.value.trim();                                         console.log(name);    // value 값 가져오기
    const pay = payInput.value.trim();                                           console.log(pay);     // value 값 가져오기
    const area = areaInput.value.trim();                                         console.log(area);    // value 값 가져오기
    const imge = imgInput.files[0];                                       console.log(imge);    // value 값 가져오기
    const img = imge ? URL.createObjectURL(imge) :'https://placehold.co/100x100';  console.log(img);  // value 값 가져오기

    // localStorage에서 productList 배열 가져오기
    let productList = JSON.parse(localStorage.getItem('productList') || '[]');  // productList JSON.parse해서 호출하기 || 없다면 '[]' 배열추가 
                                         
    let lastPno = Number(localStorage.getItem('lastPno') || 0);                 // lastPno localStorage에서 호출하기 || 없다면 0으로 선언
    const pno = ++lastPno                                                       // pno 증감은 lastPno에서 가져옴

    // value값 가져온거 객체화 하기
    if( name == '' || pay == '' || area == '' ){                            // value값 가져온거 객체화 하기
        alert('항목을 모두 입력해주십시오');                                  // 유효성 검사 : name, pay, area가 공백이라면 제품 등록에 실패 알림창 띄우기
        return;                                                             // 함수 종료
    }
    
    let inputQuestion = false;                                              // inputQuestion 일단 false로 지정
    
    for(let i =0; i < productList.length; i++){                             // productList 배열 순회
        if(productList[i].pName == name ){                                  // 제품 안에 있는 pName과 value값이랑 일치하면
            if(!confirm('제품 목록에 있는 제품명과 일치합니다. 등록하시겠습니까?')){ alert(' 제품 등록을 취소하였습니다. ');   return; }        // 있다고 등록하냐고 물어보기
            inputQuestion = true;                                           // inputQuestion = true;
        }

    }
    if(inputQuestion === false){                                            // 질문이 없었다면? == 즉 일치하는 제품명을 입력하지 않았다면? 
        if(!confirm('해당 제품을 등록하시겠습니까?')){ alert(' 제품 등록을 취소하였습니다. ');   return; }  // 해당 제품 등록하냐고 물어보기
    }


    // 객체 obj생성
    const obj = { pno , pName : name , pPrice : Number(pay) , pDetails : area , pImg : img }    // obj 객체에 value값 넣기
    // 객체화한거 배열에 추가
    productList.push(obj);                                                                      // productList에 obj 객체 넣기

    // localStorage에 넣기
    localStorage.setItem( 'productList', JSON.stringify(productList) );                         // localStorage에 producList 넣어서 저장
    localStorage.setItem('lastPno', String(lastPno));                                           // lastPno 저장 
    
    alert('제품이 등록되었습니다.');                                                      // 성공 표시

    nameInput.value = '';                                                               // value값 초기화
    payInput.value = '';                                                                // value값 초기화
    areaInput.value = '';                                                              // value값 초기화
    imgInput.value = '';                                                                // value값 초기화

    
    productAddList();                                                                   // 제품 표시줄 렌더링
    productSelect ();                                                                   // 제품 드롭다운 렌더링
    
    return;                                                                             // 함수종료
}


productAddList();                                                                       // productAddList 새로고침때 가져오기
function productAddList(){ //제품 출력함수
    
    let productList = JSON.parse(localStorage.getItem('productList') || '[]');          // localStorage에서 producList 호출해서 productList 변수 만들기

    //const productList = document.querySelector('#productList');
    const productListTable = document.querySelector('#productList');                    // productListTable 선언 후 productList dom객체화

    let html ='';                                                                       // html 선언
    for(let i = 0; i <productList.length; i++){                                         // productList 배열 순회
        const proArray = productList[i];                                                // proArray로 간소화하기
        html += `<tr>   
                        <td> ${proArray.pName} </td> <td> ${proArray.pPrice}원 </td> <td> ${proArray.pDetails} </td> 
                        <td> <img src=${proArray.pImg} > </td> <td> <button type="button" onclick="productDelete(${proArray.pno})"> 제품삭제 </button> </td>
                </tr>`                                                                  // 추가하기 

    }

    productListTable.innerHTML = html;                                                  // productListTable html에 넣기
    productSelect ();                                                                   // productSelect 렌더링
    //showProductList();
}

function productDelete(pno){                                                            // 제품 제거 함수
    let productList = JSON.parse(localStorage.getItem('productList') || '[]');          // localStorage에서 productList 배열 가져오기

    for(let i = 0; i< productList.length; i++){                                         // productList 배열 순회
        if(productList[i].pno === pno){                                                 // 매개변수 pno랑 product[i].pno랑 값이 같다면?
            productList.splice( i , 1 );                                                // i 배열 삭제
            localStorage.setItem('productList' , JSON.stringify(productList));          // 그거 localStorage에 저장
            alert("삭제되었습니다.");                                                    // 삭제 알림
            productAddList();                                                           // productAddList 제품출력함수 렌더링                 
            return;                                                                     // 함수 종료하기
        }
    }
    alert("실패하였습니다.");                                                            // 실패 알림
    return;                                                                             // 함수 종료하기
}


//==================================================제품 등록 부분 끝==============================================================//

   
function productSelect (){                                                              // productSelect 제품 드롭다운 함수
    const productId = document.querySelector('#productId');                             // dom객체화                   

    let productList = JSON.parse(localStorage.getItem('productList') || '[]');          // productList JSON.parse해서 호출하기 || 없다면 '[]' 배열추가 

    
    let html = `<option value="" disabled selected > 제품을 선택하세요. </option>`;      // 드롭다운 innerHTML 할 html 변수 선언        
    for(let i = 0 ; i < productList.length ; i++){                                       
        const proList = productList[i];                                                       
        html += `<option value="${proList.pno}"> ${proList.pName} </option>`;           // 벨류값 선언과 제품 pName 선언
    } // for end
    
    productId.innerHTML = html;                                                         // innerHTML                       
}

/*
const y = now.getFullYear();              // 2025
const m = String(now.getMonth()+1).padStart(2,'0');  // 06
const d = String(now.getDate()).padStart(2,'0');     // 26
const hh = String(now.getHours()).padStart(2,'0');   // 15
const mm = String(now.getMinutes()).padStart(2,'0'); // 14
const ss = String(now.getSeconds()).padStart(2,'0'); // 07

const stamp = `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
console.log(stamp);   // "2025-06-26 15:14:07" */

const now = new Date();
const y  = now.getFullYear();
const m  = String(now.getMonth() + 1).padStart(2, '0');
const d  = String(now.getDate()).padStart(2, '0');
const hh = String(now.getHours()).padStart(2, '0');
const mm = String(now.getMinutes()).padStart(2, '0');
const ss = String(now.getSeconds()).padStart(2, '0');
const stamp = `${y}-${m}-${d} ${hh}:${mm}:${ss}`;



function stockIn(){

    // 마크업객체 가져오기
    const productId = document.querySelector('#productId');         console.log(productId);     // dom 객체화
    const categoryId = document.querySelector('#categoryId');       console.log(categoryId);    // dom 객체화
    const amountInput = document.querySelector('.amountInput');     console.log(amountInput);   // dom 객체화
    const reasonInput = document.querySelector('.reasonInput');     console.log(reasonInput);   // dom 객체화
    // value값 가져오기
    let pid = productId.value;                                          console.log(pid);       // productId.value
    let cid = categoryId.value;                                         console.log(cid);       // categoryId.value
    if(cid == 1 ){ cid = '입고' ;}                                                              // cid가 1이라면 입고
    if(cid == 2 ){ cid = '출고' ;}                                                              // cid가 2이라면 출고
    let amount = amountInput.value;                                     console.log(amount);    // amountInput.value
    let reason = reasonInput.value;                                     console.log(reason);    // reasonInput.value
    

    let stockList = JSON.parse(localStorage.getItem('stockList') || '[]');                      // stocList JSON.parse해서 호출하기 || 없다면 '[]' 배열추가 
    const sno = stockList.length === 0 ? 1  : stockList[stockList.length - 1].sno + 1;          // sno는 배열이 없다면 없다면 sno : 1 선언 있다면 sno +1





    // value값 가져온거 객체화하기

    const obj1 = { sno : sno, pno : pid , comingInOut : cid ,amount : Number(amount) , reason : reason , sdate : stamp };  // obj1 객체에 value값 넣기
    stockList.push(obj1);                                                                                                // 그거 stockList에 푸시

    localStorage.setItem( 'stockList', JSON.stringify(stockList) );                 // localStorage에 stockList 최신화 JSON.stringify

    stockInputList ();                                                              // stockInputList 재고 표시 리스트 렌더링
}



       
function stockInputList (){                                                         // stockInputList 재고 표시 리스트
    const stocktable = document.querySelector('#stList');                           // stocktable은 stList dom객체화한것 재품로그목록

    let productList = JSON.parse(localStorage.getItem('productList') || '[]');      // productList localStorage에서 가져오기, 없다면 배열생성

    let stockList = JSON.parse(localStorage.getItem('stockList') || '[]');          // stockList localStorage에서 가져오기, 없다면 배열생성
    const sno = stockList.length === 0 ? 1  : stockList[stockList.length - 1].sno + 1;  // sno는 배열이 없다면 없다면 sno : 1 선언 있다면 sno +1

    let html = '';                                                                      // innerHTML 할 html 변수 선언
    for(let i = 0; i <stockList.length; i++){                                           // stockList 배열 순회
        const Stock = stockList[i];                                                     // stockList][i] 간소화하기
        let proName = '';                                                               // proName 선언
        for(let j = 0 ; j< productList.length; j++){                                    // productList 배열 순회
            if(Stock.pno == productList[j].pno){                                        // stockList 제품번호와 productList 제품번호가 같다면
                proName = productList[j].pName;                                         // productList의 상품 이름을 proName 에 넣기
                break;                                                                  // 다 찾았으면 반복문 종료
            }
        }
        html += `<tr>
                        <td> ${proName} </td> <td> ${Stock.comingInOut} </td> <td> ${Stock.amount} </td>  <td> ${Stock.reason} </td>  <td> <button class="stockReasonBtn" onclick="pCorrection(${Stock.sno})"> 입출사유변경 </button></td>
                </tr>`                                                                  // stockList을 html으로 표현

    }
    stocktable.innerHTML = html;                                                        // innerHTML 

}


function pCorrection(sno){                                                              // 입고 이유 수정 함수

    let stockList = JSON.parse(localStorage.getItem('stockList') || '[]');              // stockList 배열 호출 없다면 빈 배열 대입

    for( let i = 0; i <= stockList.length-1; i++){                                      // stockList 배열 순회
        let stock = stockList[i];                                                       // stock은 stockList[i]임
        if(stock.sno == sno ){
            const stockReasonEdit = prompt('입출고사유 : ');                            // 입출고 사유 물어보는 prompt 함수 실행
            if (stockReasonEdit === null) return;                                      // 아무 것도 입력 안하면 함수 종료
            stock.reason = stockReasonEdit;                                            // 함수의 입출사유 prompt 받은 값 넣기
            localStorage.setItem( 'stockList' , JSON.stringify(stockList) );           // localStorage에 저장
            alert('[성공] 수정 되었습니다.');                                           // 수정 성공 알림
            stockInputList ();                                                         // 재고 리스트 렌더링
            return;                                                                    // 함수종료
        }// if end
    }// for end
    alert('[실패]다시 입력해주세요');                                                   // 실패 알림창
    stockInputList ();                                                                 // 재고 리스트 렌더링
    return;                                                                            // 함수종료
}// func end

function orderSellerList (){
    
}
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






// [1] 제품등록함수
function productAdd(){ console.log('productAdd');       // 제품 등록함수
    
    // 마크업객체 가져오기
    const nameInput = document.querySelector('.nameInput');         console.log(nameInput);     //싹다 가져오기
    const payInput = document.querySelector('.payInput');           console.log(payInput);
    const areaInput = document.querySelector('.areaInput');          console.log(areaInput);
    const imgInput = document.querySelector('.imgInput');           console.log(imgInput);
    
    // value값 가져오기
    const name = nameInput.value;                                         console.log(name);
    const pay = payInput.value;                                           console.log(pay);
    const area = areaInput.value;                                     console.log(area);
    const imge = imgInput.files[0];                                        console.log(imge);
    const img = imge ? URL.createObjectURL(imge) :'https://placehold.co/100x100';  console.log(img);    // 싹다 가져오기


    let productList = JSON.parse(localStorage.getItem('productList') || '[]'); 
                                         
    const pno = productList.length === 0 ? 1  : productList[productList.length - 1].pno + 1;



    // value값 가져온거 객체화 하기
    if( name == '' || pay == '' || area == '' ){                            // 유효성 검사
        alert('[실패] 제품 등록에 실패하였습니다.');
        return;
    }
    const obj = { pno : pno , pName : name , pPrice : Number(pay) , pDetails : area , pImg : img } // obj 객체에 value값 넣기
    // 객체화한거 배열에 추가
    productList.push(obj);                                                            // productList에 obj 객체 넣기
    
    localStorage.setItem( 'productList', JSON.stringify(productList) );                 // localStorage에 producList 최신화

    alert('[성공] 제품이 등록되었습니다.');                                               // 성공 표시
    productAddList();                                                                   // 제품 표시줄 렌더링
    productSelect ();                                                                   // 제품 드롭다운 렌더링
    return;                                                                             // 함수종료

}


productAddList();                                                                       // productAddList 새로고침때 가져오기
function productAddList(){ //제품 출력함수
    
    let productList = JSON.parse(localStorage.getItem('productList') || '[]');                              // localStorage에서 producList 호출해서 productList 변수 만들기

    //const productList = document.querySelector('#productList');
    const productListTable = document.querySelector('#productList');                    // productListTable 선언 후 productList dom객체화

    let html ='';                                                                       // html 선언
    for(let i = 0; i <productList.length; i++){                                         // productList 배열 순회
        const proArray = productList[i];                                                // proArray로 간소화하기
        html += `<tr>   
                        <td> ${proArray.pName} </td> <td> ${proArray.pPrice} </td> <td> ${proArray.pDetails} </td> 
                        <td> <img src=${proArray.pImg} > </td> <td> <button type="button" onclick="productDelete(${proArray.pno})"> 제품삭제 </button> </td>
                </tr>`                                                                  // 추가하기 

    }

    productListTable.innerHTML = html;                                                  // productListTable html에 넣기
    productSelect ();                                                                   // productSelect 렌더링
    //showProductList();
}

function productDelete(pno){                                                            // 제품 제거 함수
    let productList = JSON.parse(localStorage.getItem('productList') || '[]'); 

    for(let i = 0; i< productList.length; i++){
        if(productList[i].pno === pno){
            productList.splice( i , 1 );
            localStorage.setItem('productList' , JSON.stringify(productList));
            alert("삭제되었습니다.");
            productAddList();
            //showProductList();
            return;
        }
    }
    alert("실패하였습니다.");
    return;
}


//=====================================================================


productSelect ();
function productSelect (){
    const productId = document.querySelector('#productId');

    let productList = JSON.parse(localStorage.getItem('productList') || '[]'); 

    
    let html = `<option value="" disabled selected > 제품을 선택하세요. </option>`;         
    for(let i = 0 ; i < productList.length ; i++){                                       
        const proList = productList[i];                                                       
        html += `<option value="${proList.pno}"> ${proList.pName} </option>`; 
    } // for end
    
    productId.innerHTML = html;                             
}



// 등록 함수 만들어야 함

// 1. 등록함수
// 2. 출력함수
// 3. 수정함수
// 4. 제품ID함수
let nowdate = new Date();
let year = nowdate.getFullYear();
let month = nowdate.getMonth() + 1;
let date = nowdate.getDate();
let now = `${year}-${month}-${date}`;


function stockIn(){

    // 마크업객체 가져오기
    const productId = document.querySelector('#productId');         console.log(productId);
    const categoryId = document.querySelector('#categoryId');       console.log(categoryId);
    const amountInput = document.querySelector('.amountInput');     console.log(amountInput);
    const reasonInput = document.querySelector('.reasonInput');     console.log(reasonInput);
    // value값 가져오기
    let pid = productId.value;                                          console.log(pid);
    let cid = categoryId.value;                                         console.log(cid);
    if(cid == 1 ){ cid = '입고' ;}
    if(cid == 2 ){ cid = '출고' ;}
    let amount = amountInput.value;                                     console.log(amount);
    let reason = reasonInput.value;                                     console.log(reason);
    

    let stockList = JSON.parse(localStorage.getItem('stockList') || '[]');
    const sno = stockList.length === 0 ? 1  : stockList[stockList.length - 1].sno + 1;





    // value값 가져온거 객체화하기

    const obj1 = { sno : sno, pno : pid , comingInOut : cid ,amount : Number(amount) , reason : reason , sdate : now };
    stockList.push(obj1);

    localStorage.setItem( 'stockList', JSON.stringify(stockList) );                 // localStorage에 producList 최신화

    stockInputList ();
}


/*전체 재고 로그 조회 (View All Inventory Logs)
기능: 시스템에 기록된 모든 재고 변동 내역을 표 형태로 조회.
표시 항목: 로그 ID, 제품 ID, 제품명, 변동 유형 ('입고/출고'), 변동 수량, 변동 날짜/시간, 비고.
동작: 로그 없을 시 메시지 표시.*/
stockInputList ();
function stockInputList (){
    const stocktable = document.querySelector('#stList');

    let productList = JSON.parse(localStorage.getItem('productList') || '[]');

    let stockList = JSON.parse(localStorage.getItem('stockList') || '[]'); 
    const sno = stockList.length === 0 ? 1  : stockList[stockList.length - 1].sno + 1;

    let html = '';
    for(let i = 0; i <stockList.length; i++){
        const Stock = stockList[i];
        let proName = '';
        for(let j = 0 ; j< productList.length; j++){
            if(Stock.pno == productList[j].pno){
                proName = productList[j].pName;
                break;
            }
        }
        html += `<tr>
                        <td> ${proName} </td> <td> ${Stock.comingInOut} </td> <td> ${Stock.amount} </td>  <td> ${Stock.reason} </td>  <td> <button class="stockReasonBtn" onclick="pCorrection(${Stock.sno})"> 입출사유변경 </button></td>
                </tr>`

    }
    stocktable.innerHTML = html;

}


function pCorrection(sno){

    let stockList = JSON.parse(localStorage.getItem('stockList') || '[]'); 

    for( let i = 0; i <= stockList.length-1; i++){
        let stock = stockList[i];
        if(stock.sno == sno ){
            const stockReasonEdit = prompt('입출고사유 : ');
            if (stockReasonEdit === null) return;
            stock.reason = stockReasonEdit;
            localStorage.setItem( 'stockList' , JSON.stringify(stockList) );
            alert('[성공] 수정 되었습니다.');
            stockInputList ();
            return;
        }// if end
    }// for end
    alert('[실패]다시 입력해주세요');
    stockInputList ();
    return;
}// func end

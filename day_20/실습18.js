/*전체 제품 조회 (View All Products)
기능: 현재 등록된 모든 제품 목록을 표 형태로 조회.
표시 항목: 제품 ID, 제품명, 가격,간단설명,이미지URL, 삭제버튼

제품 삭제 (Delete Product)
기능: 특정 제품을 시스템에서 제거.
입력/선택: 제품 목록에서 삭제할 제품의 삭제버튼 클릭
동작: 삭제 성공/실패 메시지, 제품 목록 자동 업데이트. */
// 데이터모델링
/*const product = [ { pno : 1 , 제품명 : '아메리카노' , 가격 : 2000 , 설명 : '콜롬비아원두' , 이미지 : 'https://placehold.co/100' } ];
let lastPno = product.length -1;
let currentPno = product[lastPno].pno;*/

/*
const stockList = [{ sno : 1 , pno : 1 , 입출고 : '입고' , amount : 30 , reason : '12312312312' , sdate : '2025-06-24' } ]
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

    let productList = localStorage.getItem('productList');                  // localStorage에서 product 배열 가져오기
    let pno = 1;                                                            // pno는 1로 지정   
    if( productList == null ){                                              // pno가 없다면 
        productList = []                                                    // 배열 추가
    }else{
        productList = JSON.parse(productList)                               // 있다면 product 배열 가져오기
        pno = productList[productList.length-1].pno + 1;                    // pno는 마지막 배열 pno에서 1더해주기
    }



    // value값 가져온거 객체화 하기
    if( name == '' || pay == '' || area == '' ){                            // 유효성 검사
        alert('[실패] 제품 등록에 실패하였습니다.');
        return;
    }
    const obj = { pno : pno , 제품명 : name , 가격 : pay , 설명 : area , 이미지 : img } // obj 객체에 value값 넣기
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
    
    let productList = localStorage.getItem('productList');                              // localStorage에서 producList 호출해서 productList 변수 만들기
    if(productList == null){                                                            // productlist가 없다면
        productList = [];                                                               // 그냥 아무것도 없는 배열 만들기
    }
    else{
        productList = JSON.parse(productList);                                          // 있다면 그 productList JSON으로 배열화하기
    }

    //const productList = document.querySelector('#productList');
    const productListTable = document.querySelector('#productList');                    // productListTable 선언 후 productList dom객체화

    let html ='';                                                                       // html 선언
    for(let i = 0; i <productList.length; i++){                                         // productList 배열 순회
        const proArray = productList[i];                                                // proArray로 간소화하기
        html += `<tr>   
                        <td> ${proArray.제품명} </td> <td> ${proArray.가격} </td> <td> ${proArray.설명} </td> 
                        <td> <img src=${proArray.이미지} > </td> <td> <button type="button" onclick="productDelete(${proArray.pno})"> 제품삭제 </button> </td>
                </tr>`                                                                  // 추가하기 

    }

    productListTable.innerHTML = html;                                                  // productListTable html에 넣기
    productSelect ();                                                                   // productSelect 렌더링
    showProductList();
}

function productDelete(pno){                                                            // 제품 제거 함수
    let productList = localStorage.getItem('productList');

    productList = JSON.parse(productList);

    for(let i = 0; i< productList.length; i++){
        if(productList[i].pno === pno){
            productList.splice( i , 1 );
            localStorage.setItem('productList' , JSON.stringify(productList));
            alert("삭제되었습니다.");
            productAddList();
            showProductList();
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

    let productList = localStorage.getItem('productList');

    if (productList === null) {
        productList = [];
    } else {
        productList = JSON.parse(productList);
    }
    let html = `<option value="" disabled selected > 제품을 선택하세요. </option>`;         
    for(let i = 0 ; i < productList.length ; i++){                                       
        const proList = productList[i];                                                       
        html += `<option value="${proList.pno}"> ${proList.제품명} </option>`; 
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
    

    let stockList = localStorage.getItem('stockList');
    let sno = 1;                                                            // sno는 1로 지정   
    if( stockList == null ){                                              // sno가 없다면 
        stockList = []                                                    // 배열 추가
    }else{
        stockList = JSON.parse(stockList)                               // 있다면 stockList 배열 가져오기
        sno = stockList[stockList.length-1].sno + 1;                    // sno는 마지막 배열 sno에서 1더해주기
    }




    // value값 가져온거 객체화하기

    const obj1 = { sno : sno, pno : pid , 입출고 : cid ,amount : amount , reason : reason , sdate : now };
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

    let productList = localStorage.getItem('productList');
    productList = JSON.parse(productList);

    let stockList = localStorage.getItem('stockList');
    let sno = 1;                                                            // sno는 1로 지정   
    if( stockList == null ){                                              // sno가 없다면 
        stockList = []                                                    // 배열 추가
    }else{
        stockList = JSON.parse(stockList)                               // 있다면 stockList 배열 가져오기
    }

    let html = '';
    for(let i = 0; i <stockList.length; i++){
        const Stock = stockList[i];
        proName = '';
        for(let j = 0 ; j< productList.length; j++){
            if(Stock.pno == productList[j].pno){
                proName = productList[j].제품명;
                break;
            }
        }
        html += `<tr>
                        <td> ${proName} </td> <td> ${Stock.입출고} </td> <td> ${Stock.amount} </td>  <td> ${Stock.reason} </td>  <td> <button class="stockReasonBtn" onclick="pCorrection(${Stock.sno})"> 입출사유변경 </button></td>
                </tr>`

    }
    stocktable.innerHTML = html;

}


function pCorrection(sno){

    let stockList = localStorage.getItem('stockList');

    stockList = JSON.parse(stockList);

    for( let i = 0; i <= stockList.length-1; i++){
        let stock = stockList[i]
        if(stock.sno == sno ){
            const stockReasonEdit = prompt('입출고사유 : ');
            stock.reason = stockReasonEdit;
            localStorage.setItem( 'stockList' , JSON.stringify(stockList) );
            alert('[성공] 수정 되었습니다.');
            stockInputList ();
            return;
        }// if end
    }// for end
    alert('[실패]다시 입력해주세요')
    stockInputList ();
    return;
}// func end


showProductList();
function showProductList(){
    let productList = localStorage.getItem('productList');                              // localStorage에서 producList 호출해서 productList 변수 만들기
    if(productList == null){                                                            // productlist가 없다면
        productList = [];                                                               // 그냥 아무것도 없는 배열 만들기
    }
    else{
        productList = JSON.parse(productList);                                          // 있다면 그 productList JSON으로 배열화하기
    }
    const showProduct = document.querySelector('#showProduct');
    html = '';
    for(let i =0; i < productList.length; i++){
        const proArray = productList[i];
        html += `<tr>
                    <td> <img onclick = "shoppingCart(${proArray.pno}) "src=${proArray.이미지} > </td> <td> ${proArray.제품명} </td> <td> ${proArray.가격} </td>
                </tr>`;
    }

    showProduct.innerHTML = html;                                                  // productListTable html에 넣기   
}



function shoppingCart(pno){                                                            // 제품 제거 함수
    let productList = localStorage.getItem('productList');

    if(productList == null){                                                            // productlist가 없다면
        productList = [];                                                               // 그냥 아무것도 없는 배열 만들기
    }
    else{
        productList = JSON.parse(productList);                                          // 있다면 그 productList JSON으로 배열화하기
    }
    
    
    
    let shoppingList = localStorage.getItem('shoppingList');
    let shno = 1
    if(shoppingList == null){                                                            // productlist가 없다면
        shoppingList = [];                                                               // 그냥 아무것도 없는 배열 만들기
    }
    else{
        shoppingList = JSON.parse(shoppingList);                                          // 있다면 그 productList JSON으로 배열화하기
        shno = shoppingList[shoppingList.length-1].shno + 1;
    }
    
    for(let i = 0; i< productList.length; i++){
        if(productList[i].pno === pno){
            const proArray = productList[i];
            const objShop = { shno : shno , img : proArray.이미지, 제품명 : proArray.제품명 ,  가격 : proArray.가격 };
            shoppingList.push(objShop);
            localStorage.setItem( 'shoppingList', JSON.stringify(shoppingList) ); 
            alert('성공');
            break;
        }
    }
    
    renderCart();
    return;
}
renderCart();
function renderCart() {
    const shoppingCartList = document.querySelector('#shoppingCartList');
    let shoppingList = localStorage.getItem('shoppingList');
    
    if(shoppingList == null){                                                            // productlist가 없다면
        shoppingList = [];                                                               // 그냥 아무것도 없는 배열 만들기
    }
    else{
        shoppingList = JSON.parse(shoppingList);                                          // 있다면 그 productList JSON으로 배열화하기
        shno = shoppingList[shoppingList.length-1].shno + 1;
    }

    let html = '';
    for (let i = 0; i < shoppingList.length; i++) {
        const item = shoppingList[i];
        html += `<tr>
            <td><img src="${item.img}" width="80"></td>
            <td>${item.제품명}</td>
            <td>${item.가격.toLocaleString()}원</td>
            <td><button onclick="deleteShoppingcart(${item.shno})">삭제</button></td>
         </tr>`;
    }

    shoppingCartList.innerHTML = html;
    totalPrice()
}

function deleteShoppingcart(shno){
    let shoppingList = localStorage.getItem('shoppingList');

    shoppingList = JSON.parse(shoppingList);

    for(let i = 0; i< shoppingList.length; i++){
        if(shoppingList[i].shno == shno){
            shoppingList.splice( i , 1 );
            localStorage.setItem('shoppingList' , JSON.stringify(shoppingList));
            alert("삭제되었습니다.");
            renderCart();
            return;
        }
    }
    alert("실패하였습니다.");
    return;

}

function totalPrice(){
    let shoppingList = localStorage.getItem('shoppingList');

    if (shoppingList === null) {
        shoppingList = [];  // ✅ null이면 빈 배열로 초기화
    } else {
        shoppingList = JSON.parse(shoppingList);
    }
    
    const totalPrice = document.querySelector("#totalPrice");
    let totalBuy = 0;

    for(let i = 0; i< shoppingList.length; i++){
        totalBuy += Number(shoppingList[i].가격);
    }
    if(shoppingList === null){totalMean = '총금액 : 0원'};
    let totalMean = `총금액 :${totalBuy}원`

    totalPrice.innerHTML = totalMean;
}
/*사용자가 제품을 보고, 장바구니에 담고, 장바구니 내용을 관리할 수 있는 기능을 정의합니다.
요구사항에 맞게 데이터모델링 과 샘플 데이터를 구성합니다.  ( localStorage 사용 )

모든 제품 전체 조회 (View All Products)
기능: 사용자 페이지 로드 시 등록된 모든 제품을 시각적으로 표시.
표시 항목: 제품 이미지, 제품명, 가격

제품 이미지 클릭 시 장바구니에 등록 (Add to Cart on Product Image Click)
기능: 제품 이미지 클릭 시 해당 제품을 장바구니에 1개 추가.
동작: 추가 성공/실패 피드백, 장바구니 실시간 업데이트.

장바구니 전체 조회 (View All Cart Items)
기능: 현재 장바구니에 담긴 제품 목록과 총 주문 금액 확인.
표시 항목: 제품명, 개별 제품 가격, 장바구니 전체 총 금액.
동작: 장바구니 추가/삭제 실시간 업데이트, 항목 옆 '삭제' 버튼 제공

장바구니 내 특정 제품 삭제 (Delete Cart Item)
기능: 특정 제품을 장바구니에서 제거.
입력/선택: 제품 목록에서 삭제할 제품의 삭제버튼 클릭
동작: 삭제 성공/실패 메시지, 제품 목록 자동 업데이트.*/
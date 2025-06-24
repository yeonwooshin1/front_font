function shoppingCart(pno){                                                           
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
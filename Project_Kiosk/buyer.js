showProductList();
renderCart();


function showProductList(){
    let productList = JSON.parse(localStorage.getItem('productList') || '[]');

    const showProduct = document.querySelector('#showProduct');
    let html = '';
    for(let i =0; i < productList.length; i++){
        const proArray = productList[i];
        html += `<tr>
                    <td> <img onclick = "shoppingCart(${proArray.pno}) "src=${proArray.pImg} > </td> <td> ${proArray.pName} </td> <td> ${proArray.pPrice} </td>
                </tr>`;
    }

    showProduct.innerHTML = html;                                                  // productListTable html에 넣기   
}



function shoppingCart(pno){                                                           
    let productList = JSON.parse(localStorage.getItem('productList') || '[]');


    let shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');
    const stno = shoppingList.length === 0 ? 1  : shoppingList[shoppingList.length - 1].stno + 1;
    
    for(let i = 0; i< productList.length; i++){
        if(productList[i].pno === Number(pno)){
            const proArray = productList[i];
            const objShop = { stno : stno , img : proArray.pImg, pName : proArray.pName ,  pPrice : proArray.pPrice };
            shoppingList.push(objShop);
            localStorage.setItem( 'shoppingList', JSON.stringify(shoppingList) ); 
            alert('성공');
            break;
        }
    }
    
    renderCart();
    return;
}




function renderCart() {
    const shoppingCartList = document.querySelector('#shoppingCartList');

    let shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');
    

    let html = '';
    for (let i = 0; i < shoppingList.length; i++) {
        const item = shoppingList[i];
        html += `<tr>
            <td><img src="${item.img}" width="80"></td>
            <td>${item.pName}</td>
            <td>${item.pPrice.toLocaleString()}원</td>
            <td><button onclick="deleteShoppingcart(${item.stno})">삭제</button></td>
         </tr>`;
    }

    shoppingCartList.innerHTML = html;
    totalPrice()
}

function deleteShoppingcart(stno){
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');

    for(let i = 0; i< shoppingList.length; i++){
        if(shoppingList[i].stno == stno){
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
    
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');
    
    const totalPrice = document.querySelector("#totalPrice");
    let totalBuy = 0;

    for(let i = 0; i< shoppingList.length; i++){
        totalBuy += Number(shoppingList[i].pPrice);
    }
    if(shoppingList === null){ let totalMean = '총금액 : 0원'};
    totalMean = `총금액 :${totalBuy.toLocaleString()}원` // 콤마

    totalPrice.innerHTML = totalMean;
}

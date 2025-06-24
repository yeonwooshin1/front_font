showProductList();
renderCart();





function showProductList(){                                                                         // 구매자 재품 영역 표시 함수
    let productList = JSON.parse(localStorage.getItem('productList') || '[]');                      // productList 배열 호출 없다면, 빈배열 대입

    const showProduct = document.querySelector('#showProduct');                                     // showProduct 제품표시 영역 dom객체화
    let html = '';                                                                                  // innerHTML할 html 변수 생성
    for(let i =0; i < productList.length; i++){                                                     // productList 배열 순회
        const proArray = productList[i];                                                            // proArray = productList[i]
        html += `<tr>               
                    <td> <img onclick = "shoppingCart(${proArray.pno}) "src=${proArray.pImg} > </td> <td> ${proArray.pName} </td> <td> ${proArray.pPrice} </td>
                </tr>`;                                                                             // html에 추가할 거 넣음
    }

    showProduct.innerHTML = html;                                                                   // productListTable html에 넣기 innerHTML  
}



function shoppingCart(pno){                                                                         // shoppingCart 장바구니 생성 함수                                                   
    
    let productList = JSON.parse(localStorage.getItem('productList') || '[]');                      // productList 배열 호출, 없다면 빈배열 대입


    let shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');                    // shoppingList 배열 생성 없다면 빈배열 ,,, 당연히 처음에는 없으니 빈배열임
    const stno = shoppingList.length === 0 ? 1  : shoppingList[shoppingList.length - 1].stno + 1;   // stno 상품 번호를 의미함 , 배열이 없다면 번호를 1을 부여하고 있다면 + 해줌 
    
    for(let i = 0; i< productList.length; i++){                                                     // productList 배열 순회
          
        if(productList[i].pno === Number(pno)){                                                     // productList[i]의 제품코드와 onclick 한 제품코드랑 비교
            const proArray = productList[i];                                                       // proArray는 productList[i]
            for(let j = 0; j < shoppingList.length; j++){                                           // shoppingList 배열 순회
                const shopArray = shoppingList[j];                                                  // shopArray = shoppingList[i]
                if(proArray.pno == shopArray.pno){                                                  // 상품번호 일치시
                    alert(' 장바구니에 있는 상품입니다. ');                                           // 해당상품은 있다고 알림
                    return;                                                                         // 함수 종료
                }
            }
            
            let buyAmount = prompt(" 수량을 숫자로만 입력하세요. ");                                 // 수량 선택 prompt
            if(buyAmount == null){ return; }                                                       // prompt 값이 없다면 함수 종료
            if (!/^\d+$/.test(buyAmount)){                                                         // 숫자가 아니라면
                alert('숫자만 입력하세요.');                                                        // 숫자 입력하라고 alert 해줌 
                return shoppingCart(pno);                                                          // 같은 상품 다시 재호출 = 반환값 함수
            }                                                         

            buyAmount = Number(buyAmount);                                                         // 받은 prompt 값 숫자 변환 해주고 대입해줌
           
            const objShop = { stno : stno , pno : proArray.pno ,  img : proArray.pImg, pName : proArray.pName ,  pPrice : proArray.pPrice , amount : buyAmount }; // objshop 객체
            shoppingList.push(objShop);                                                                                                     // 배열에 추가
            localStorage.setItem( 'shoppingList', JSON.stringify(shoppingList) );                                                           // localStrorage에 shoppingList 최신화  
            alert(`장바구니에 '${proArray.pName}' (을)를 '${buyAmount}'개 담았습니다.`);                                                      // 장바구니에 담았다고 알림추가
            break;                                                                                                                          // 반복문 종료
        }
    }
    renderCart();                                                                                                                           // 장바구니 출력함수 렌더링
    return;                                                                                                                                 // 함수 종료
}




function renderCart() {                                                                                 // 장바구니 출력함수 renderCart()
    const shoppingCartList = document.querySelector('#shoppingCartList');

    let shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');                        // localStorage에서 shoppingList 배열 호출
    

    let html = '';                                                                                      // innerHTML할 html 변수 선언
    for (let i = 0; i < shoppingList.length; i++) {                                                     // shoppingList 배열 순회
        const item = shoppingList[i];                                                                   // shoppingList[i] 간편하게 간소화 변수 선언 => item
        html += `<tr>
            <td><img src="${item.img}" width="80"></td>             
            <td>${item.pName}</td>
            <td>${item.pPrice.toLocaleString()}원</td>
            <td>${item.amount}개</td>
            <td><button onclick="EditShoppingCart(${item.stno})"> 수량 변경 </button>
            <button onclick="deleteShoppingcart(${item.stno})"> 물품 삭제 </button></td>
         </tr>`;                                                                                        // html 작성 : 강사님이 주신 것들이 조금 키오스크랑 안 맞는 거 같아서 임의로 좀 더 추가함                                                                                       
    }

    shoppingCartList.innerHTML = html;                                                                  // innerHTML 
    totalPrice()                                                                                        // 총합계 함수 렌더링
}

function deleteShoppingcart(stno){                                                                      // 장바구니 삭제 함수 deleteShoppingcart(매개변수)
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');                        // shoppingList 배열 호출

    for(let i = 0; i< shoppingList.length; i++){                                                        // shoppingList 배열 순회
        if(shoppingList[i].stno == stno){                                                               // shoppingList[i].stno 와 매개변수stno가 일치한다면
            shoppingList.splice( i , 1 );                                                               // i배열 삭제
            localStorage.setItem('shoppingList' , JSON.stringify(shoppingList));                        // localStorage의 shoppingList 최신화
            alert("물품이 삭제되었습니다.");                                                             // 알림창                                                   
            renderCart();                                                                               // 장바구니 출력함수 렌더링
            return;                                                                                     // 함수 종료
        }
    }
    alert("실패하였습니다.");                                                                            // 알림창
    return;                                                                                             // 함수 종료

}

function EditShoppingCart(stno){                                                                        // 시키진 않았지만 수량 변경 함수 추가 EditShoppingCart( 매개변수 )
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');                        // shoppingList 배열 호출 없다면 빈배열 대입
    
    for(let i = 0; i< shoppingList.length; i++){                                                        // shoppingList 배열 순회
        if(shoppingList[i].stno == stno){                                                               // 장바구니 stno와 매개변수 stno가 일치한다면
            const proArray = shoppingList[i];                                                           // proArray = shoppingList[i]
            let Question = prompt(`변경할 수량을 입력하세요. 현재수량 : ${proArray.amount}개`);           // 변경할 값 물어봄 
            if(Question == null){ return; }                                                             // prompt 값이 없다면 함수 종료
            if (!/^\d+$/.test(Question)){                                                               // 숫자가 아니라면
                alert('숫자만 입력하세요.');                                                             // 숫자 입력하라고 alert 해줌 
                return EditShoppingCart(stno);                                                          // 같은 상품 다시 재호출 = 반환값 함수;
            }                                                         
            if(Question == proArray.amount){ alert('수량이 동일합니다');                                 // 동일 수량을 입력했다면?
                return EditShoppingCart(stno);                                                          // 같은 상품 다시 재호출 = 반환값 함수;
            }
            
            Question = Number(Question);                                                                // 받은 prompt 값 숫자 변환 해주고 대입해줌
            proArray.amount = Question;                                                                 // 값 변경

            localStorage.setItem('shoppingList' , JSON.stringify(shoppingList));                        // localStorage에 바뀐 배열 저장
            alert(`수량이 ${Question}개로 변경 되었습니다.`);                                             // 잘 변경 됐다고 알림창 추가
            renderCart();                                                                               // 장바구니 출력 렌더링
            return;                                                                                     // 함수 종료
        }
    }
    alert("실패하였습니다.");                                                                           // 만약 오류일 경우 알림창
    return;                                                                                            // 함수 종료

}

function totalPrice(){                                                                                 // 장바구니 총 금액 계산 함수
    
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');                        // shoppingList 배열 호출 없다면 빈배열 대입
    
    const totalPrice = document.querySelector("#totalPrice");                                           // totalPrice dom객체화
    let totalBuy = 0;                                                                                   // totalBuy 변수 0으로 선언

    for(let i = 0; i< shoppingList.length; i++){                                                        // shoppingList 배열 순회
        let shopping = shoppingList[i];                                                                 // shopping 변수 선언 == shoppingList[i]
        totalBuy += Number((shopping.pPrice)*(shopping.amount));                                        // totalBuy 더하고 대입 가격 x 수량
    }
    if(shoppingList === null){ let totalMean = '총금액 : 0 원'};                                         // 만약 장바구니 배열 없으면 총금액은 0원입니다.
    let totalMean = `총금액 : ${totalBuy.toLocaleString()} 원` // 콤마                                   // totalMean 변수 선언 총 금액 나타내는거

    totalPrice.innerHTML = totalMean;                                                                    // 그걸 innerHTML
}

function buyCartList(){                                                                               // 구매 버튼 onclick 함수
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');                        // shoppingList 배열 호출 없다면 빈배열 대입
    
    if (shoppingList.length == 0){
    alert('장바구니가 비어 있습니다.');
    return;
    }

    const orderList = JSON.parse(localStorage.getItem('orderList') || '[]');
    const orderno = orderList.length === 0 ? 1  : orderList[orderList.length - 1].orderno + 1;

    const now = new Date();
    const y  = now.getFullYear();
    const m  = String(now.getMonth() + 1).padStart(2, '0');
    const d  = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const stamp = `${y}-${m}-${d} ${hh}:${mm}:${ss}`;

  
    const obj2 = { orderno , orderedAt: stamp, items: shoppingList};
    
    orderList.push(obj2);

    localStorage.setItem('orderList', JSON.stringify(orderList));
    localStorage.removeItem('shoppingList'); 

    alert(`주문이 완료되었습니다! (주문번호 ${orderno})`);
    renderCart();                                                                           // 장바구니 테이블 초기화
    totalPrice();                                                                           // 총금액 0원 표시
}


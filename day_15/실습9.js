


const 회원테이블 = [
    { 회원코드: 1, 아이디: 'id1', 회원이름: '김개발' },
    { 회원코드: 2, 아이디: 'id2', 회원이름: '최코딩' },
    { 회원코드: 3, 아이디: 'id3', 회원이름: '박서버' }
];

const 구독상품테이블 = [
    { 상품코드: 2, 상품명: '베이직', 가격: '월 9900원' },
    { 상품코드: 3, 상품명: '광고형 베이직', 가격: '월 4900원' },
    { 상품코드: 1, 상품명: '프리미엄', 가격: '월 15000원' },
];

const 구독로그테이블 = [
    { 구독번호: 2, 회원코드: 1, 상품코드: 1, 구독종료일: '2025-06-20' },
    { 구독번호: 1, 회원코드: 2, 상품코드: 2, 구독종료일: '2025-06-15' }
];

const today = new Date("2025-06-17");

let 구독말 = '<h1> 회원 구독 상태 대시보드 </h1><hr/>';

for (let i = 0; i < 회원테이블.length; i++) { //i for start
    let 회원 = 회원테이블[i];
    let 구독중 = false;

    for (let j = 0; j < 구독로그테이블.length; j++) { //j for start
        let 구독로그 = 구독로그테이블[j];

        if (구독로그.회원코드 === 회원.회원코드) {
            for(let index =0 ; index < 구독상품테이블.length ; index++){ // index for start
                if(구독상품테이블[index].상품코드 == 구독로그.상품코드){
                    let 종료일 = new Date(구독로그.구독종료일);
                    if(종료일 > today){
                        구독말 += `<h3>${회원.회원이름} </h3> 
                            <ul> 
                                <li> 구독 상품 : ${구독상품테이블[index].상품명} (${구독상품테이블[index].가격})</li>
                                <li> 상태 : <span> <strong style="color: green;">활성</strong></span> </li>
                            </ul> <hr/>`;
                        

                    }
                    else if(종료일 < today){
                        구독말 += `<h3>${회원.회원이름} </h3> 
                            <ul> 
                                <li> 구독 상품 : ${구독상품테이블[index].상품명} (${구독상품테이블[index].가격})</li>
                                <li> 상태 : <span> <strong style="color: gray;">만료</strong></span> </li>
                            </ul> <hr/>`;
                        
                    }
                    구독중 = true;
                    break;    
                }
            } // index for end
        } //
    } //j for end
    if (구독중 == false) {
        구독말 += `<h3> ${회원.회원이름}</h3> 
                <div>
                    구독 내역이 없습니다.        
                </div>`;
    }
} // i for end

document.write(구독말);
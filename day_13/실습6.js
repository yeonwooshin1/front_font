
//1
// 나의 풀이
let numbers = [23, 5, 67, 12, 88, 34];
for(i =1 ; i <= numbers.length-1 ; i++){
    if(numbers[0] > numbers[1]){
        numbers.splice(1,1);
    }
    else{numbers.splice(0,1);}
}
console.log(numbers[0]);



//2

let output = ""; // 빈 문자열 선언                                 
for( let line = 5 ; line >= 1 ; line-- ){ // --- 행(line), 5번          
    // line는 1부터 5이하까지 1씩증가
    for( let star = 1 ; star <= line ; star++ ){ // --- 열(star) 
        output += "*"; // 별 찍기                                   
    } // 행 for end 
    output += "\n"; // \n : 이스케이프문자( 줄바꿈처리 )            
} // 열 for end 
console.log( output ); 



//3
let userNames = ['김하준', '이서아', '박솔민', '최도윤'];
for(i =0 ; i <= userNames.length -1 ; i++){
    if(userNames[i].indexOf('솔') != -1){
        console.log(userNames[i]);
        break;
    }
}


//4

let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']];
for(i =0 ; i <= seatLayout.length -1 ; i++){
    for(j = 0; j<= seatLayout[i].length -1 ; j++){
        console.log(seatLayout[i][j]);
    }
}

//5

let numbers1 = [1, 5, 2, 3, 5, 1, 4, 2];
let numbers2 = [];

for(i = 0 ; i <= numbers1.length -1 ; i++){
    if(numbers2.indexOf(numbers1[i]) == -1 ){
        numbers2.push(numbers1[i]);
        continue;   
    }
}
console.log(numbers2);


//6

let numbers3 = [5, 3, 4, 1, 2];
for(i = 0 ; i <= numbers3.length -1 ; i++){
    for(j = 0 ; j <= numbers3.length -1 ; j++){
        let temp = "";
        if(numbers3[j] > numbers3[j+1]){
            temp = numbers3[j];
            numbers3[j] = numbers3[j+1];
            numbers3[j+1] = temp;
        }
    }    
}
console.log(numbers3);












//7

let products = ['볼펜', '노트', '지우개'];
let stock = [10, 5, 20];

for (i = 1; i <= 4; i++) {
    let productsInput = prompt( '['+ i+ '/ 4 ]' + "볼펜 , 노트 , 지우개 3개 중 상품을 선택하세요. 나가실 경우에는 '나가기'를 쳐주세요");
    if (productsInput == '나가기') {
        break;
    }
    else if( products.indexOf(productsInput) == -1){
        { console.log("없는 상품입니다."); }
        continue;
    }
    else{
        let index = products.indexOf(productsInput);

        let stockInput = prompt(" 수량을 선택하세요, 단 숫자만 입력하세요. 남은수량 : " + stock[index] + "개") * 1;

        if (stock[index] >= stockInput) {
            stock[index] -= stockInput;
            console.log("구매 완료! 남은 재고는 " + stock[index] + "개 입니다!");
        }
        else { console.log("재고가 부족합니다. 남은 재고 : " + stock[index] + "개") }
    }
}








//8

let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRatings = [8, 4, 7, 6];
output2 = '';
for(i = 0 ; i<= movieNames.length-1; i++){
    movieName = movieNames[i]
    output2 += '<div>' + movieName ;
    for (j = 1; j <= 10; j++) {
        if(j <= movieRatings[i]){
            output2 += ' ★'
        }
        else{output2 += ' ☆'}
    }
    output2 += '</div>';
}
document.write( output2 );







//9

let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
let output1 = '';
for(i = 0 ; i<= seatStatus.length-1; i+= 2){
    output1 += '<div>';
    for(j = i ; j <= i+1 ; j++){
    
        if(seatStatus[j] == '빈좌석'){
            output1 += '<span style="color: blue;">빈좌석</span> ';
        }
        else if(seatStatus[j] == '예약석'){
            output1 += '<span style="color: red;">예약석</span> ';
        }
        
    }
    output1 += '</div>';
}

document.write( output1 );





//10
let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
let usageMinutes = [65, 30, 140, 420];

let output10 = "" // 빈 문자열 선언 
for( let index = 0 ; index <= carNumbers.length -1 ; index++  ){
    // 이름 출력 
    let name = carNumbers[index] 
    let name2 = usageMinutes[index];
    output10 += '<div>'+  name + ' : ' + name2 +'분 주차,'; //  HTML 문자열 ( 이름 ) 추가 
    if(usageMinutes[index] <= 30){
        resultPay = 1000;
        output10 += ' 최종 요금: '+ resultPay+'원';
    }
    else if((1000+ parseInt((usageMinutes[index]-30) /10)*500) > 20000){
        resultPay = 20000;
        output10 += ' 최종 요금: '+ resultPay+'원';
    }
    else if(usageMinutes[index] > 30 ){
        resultPay =1000+ parseInt((usageMinutes[index]-30) /10)*500;
        output10 += ' 최종 요금: '+ resultPay+'원';
    }
    else{}
        
    
    output10 += '</div>'
} 
document.write( output10 );


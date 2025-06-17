




// 1.

const Product = {};
let q1 = prompt(" 제품명 :");
Product.제품명 = q1 ;
let q2 = prompt(" 가격 :");
Product.가격 = q2;
let q3 = prompt(" 제조사 :");
Product.제조사 = q3;
console.log(Product);


// 2.

const members = [
  { id: 'user1', password: 'pass1', name: '사용자1' },
  { id: 'user2', password: 'pass2', name: '사용자2' },
];


for( let i = 0 ; i<= 1 ; i++){
  let question2_1 = prompt("id 입력");
  const member = {};

  let idDuplicate = false;
  for (let j = 0; j < members.length; j++) {
    if (members[j].id == question2_1) {
        idDuplicate = true;
        break;
    }
  }

  if (idDuplicate) {
  console.log("존재하는 아이디입니다.");
  continue;
  }
  
  member.id = question2_1;
  let question2_2 = prompt("password 입력");
  member.password = question2_2;

  let question2_3 = prompt("이름 입력");
  member.name = question2_3;
  members.push(member);
}
console.log(members);



// 3.

const scores = [
  { name: 'A', math: 80, science: 92 },
  { name: 'B', math: 95, science: 88 },
  { name: 'C', math: 76, science: 78 }
];

let scoresSum = 0;

for(i = 0 ; i <= scores.length-1 ; i++){
  scoresSum += scores[i].math;
}

console.log(scoresSum/scores.length);



// 4. 

const products = [
  { id: 1, name: '사과' },
  { id: 2, name: '바나나' },
  { id: 3, name: '포도' },
  { id: 4, name: '딸기' }
];

let found = false;

for(i = 0 ; i < products.length; i++ ){
  if(products[i].id == 3){
    console.log(products[i]);
    found = true;
    break;
  }
}

if(found == false){
  console.log("상품을 찾을 수 없습니다.");
}

// 5.

const users = [
  { id: 1, name: '유저1', isActive: true },
  { id: 2, name: '유저2', isActive: false },
  { id: 3, name: '유저3', isActive: true },
  { id: 4, name: '유저4', isActive: false }
];

const activeUsers = [];
 
for(i = 0 ; i < users.length; i++ ){
  if(users[i].isActive == true){
    activeUsers.push(users[i]);
  }
}
console.log(activeUsers);


// 6.

const movies = [
  { title: '인셉션', director: '크리스토퍼 놀란' },
  { title: '기생충', director: '봉준호' },
  { title: '매트릭스', director: '워쇼스키 자매' }
];

const movieTitles = [];
for(i = 0 ; i < movies.length; i++ ){
  movieTitles.push(movies[i].title)
}
console.log(movieTitles);


// 7-1. 내 코드

const team = [
  { name: '철수', department: '개발팀' },
  { name: '영희', department: '기획팀' },
  { name: '민수', department: '개발팀' },
  { name: '지혜', department: '기획팀' }
];

const result = {'개발팀' : [] , '기획팀' : []};

for(i = 0 ; i < team.length; i++ ){
  const department = (team[i].department);
  const name = (team[i].name); 

  
  if(team[i].department == '개발팀'){
    result[department].push(name); 
  }
  
  if(team[i].department == '기획팀'){
    result[department].push(name);
  }

}
console.log(result);

// 7-2. 강사센세님이 알려준 미리 result에 부서명을 정의하지 않고 반복문과 조건문으로 만들어주는 더 좋은 코드.
let result2 = { }; // 미리 부서명 배열 정의하지 않고.
for( let index = 0 ; index <= team.length - 1 ; index++ ){
  let t = team[index];
  if( result2[ t.department ] ){ // result2에 index번째의 부서명이 존재하면 true / 존재하지 않으면 false  
      result2[ t.department ].push( t.name ); // 부서명 배열에 index번째 이름 넣어준다.
  }else{ // 존재하지 않으면 새로운 배열 생성하고 초기값으로 index번재 이름 넣어준다.
      result2[ t.department ] = [  t.name  ]; // 배열 생성
  }
}
// * if( 객체변수.속성명 ){} // 지정한 객체내 속성명이 존재하면 true , 존재하지 않으면 false 





// 8.

const cart = [{ id: 1, quantity: 2 },{ id: 3, quantity: 1 }];
const productsInfo = [
  { id: 1, price: 1000 },
  { id: 2, price: 5000 }, // 장바구니에 없는 상품
  { id: 3, price: 2500 }
];

let sum = 0;

for(i = 0 ; i < productsInfo.length; i++ ){
  for(j = 0 ; j < cart.length ; j++){
    if(cart[j].id == productsInfo[i].id){
      sum += productsInfo[i].price * cart[j].quantity;
    }
  }
}
console.log(sum);


// 9.

// 9-1. 처음 풀이 - 단점 : A B C 보다 더 많으면 더 많은 코드가 들어가야함

const votes = ['A', 'B', 'B', 'C', 'A', 'B', 'A'];
const resultVotes = {};
let sumA = 0;
let sumB = 0;
let sumC = 0;
for(i = 0 ; i < votes.length; i++ ){
  if(votes[i] == 'A'){
    sumA += 1;
  }
  else if(votes[i] == 'B'){
    sumB += 1;
  }
  else if(votes[i] == 'C'){
    sumC += 1;
  }
}
resultVotes['A'] = sumA;
resultVotes['B'] = sumB;
resultVotes['C'] = sumC;
console.log(resultVotes);


// 9-2. undifined 알고 다시 한 풀이

const votes1 = ['A', 'B', 'B', 'C', 'A', 'B', 'A'];
const resultVotes1 = {};

for(i = 0 ; i < votes1.length; i++ ){
  let vote1 = votes1[i];
  if(resultVotes1[vote1] === undefined ){
    resultVotes1[vote1] = 1;
  }
  else{
    resultVotes1[vote1] += 1;
  }
    
}
console.log(resultVotes1);


// 10.

const webtoons = [
  { title: '나 혼자만 레벨업', rating: 9.8 },
  { title: '유미의 세포들', rating: 9.9 },
  { title: '전지적 독자 시점', rating: 9.7 }
];

let output = "";

for(i = 0 ; i < webtoons.length ; i++){
  output += '<div>'+ webtoons[i].title + ' ';
  let black = parseInt(webtoons[i].rating);
  for(j = 0 ; j < 10 ; j++){
    if(black > j){
      output += '★';
    }
    else{ output += '☆'; }
  }
  output += '</div>';
}
document.write( output );





// 11.

let resonse ={
  "currentCount": 10,
  "data": [
    {
      "소재지": "인천광역시 부평구 동암산로 10 (십정동)",
      "업 소 명": "(주)온누리푸드온누리장작구이",
      "업태": "한식",
      "연번": 1,
      "전화번호": "032-526-9292",
      "지정메뉴": "오리훈제"
    },
    {
      "소재지": "인천광역시 부평구 안남로417번길 20, 2층 (청천동)",
      "업 소 명": "1982삼계정",
      "업태": "한식",
      "연번": 2,
      "전화번호": "032-512-1982",
      "지정메뉴": "녹두삼계탕"
    },
    {
      "소재지": "인천광역시 부평구 부평대로 301 (청천동,남광센트렉스 111호)",
      "업 소 명": "갈비가",
      "업태": "한식",
      "연번": 3,
      "전화번호": "032-363-3787",
      "지정메뉴": "속초코다리냉면"
    },
    {
      "소재지": "인천광역시 부평구 평천로 553(삼산동)",
      "업 소 명": "경복궁삼계탕",
      "업태": "한식",
      "연번": 4,
      "전화번호": "032-511-1494",
      "지정메뉴": "들깨삼계탕"
    },
    {
      "소재지": "인천광역시 부평구 길주남로 109,1층 (부개동,송현주택)",
      "업 소 명": "곱창마당",
      "업태": "한식",
      "연번": 5,
      "전화번호": "032-271-2292",
      "지정메뉴": "한우곱창모듬구이"
    },
    {
      "소재지": "인천광역시 부평구 부평대로63번길 10-11 (부평동)",
      "업 소 명": "금강산추어탕",
      "업태": "한식",
      "연번": 6,
      "전화번호": "032-527-8118",
      "지정메뉴": "추어탕"
    },
    {
      "소재지": "인천광역시 부평구부평대로87번길 4(부평동)",
      "업 소 명": "뉴욕반점",
      "업태": "중식",
      "연번": 7,
      "전화번호": "032-516-4488",
      "지정메뉴": "삼선짬뽕,찹쌀탕수육"
    },
    {
      "소재지": "인천광역시 부평구 신트리로22번길 15-14 (부평동, 1층 일부)",
      "업 소 명": "더히든키친",
      "업태": "양식",
      "연번": 8,
      "전화번호": "032-272-7276",
      "지정메뉴": "바질페스토파스타"
    },
    {
      "소재지": "인천광역시 부평구 마장로 402(청천동)",
      "업 소 명": "덕수갈비",
      "업태": "한식",
      "연번": 9,
      "전화번호": "032-517-4070",
      "지정메뉴": "왕갈비탕"
    },
    {
      "소재지": "인천광역시 부평구 대정로 93, 웰링턴 1층 103호 (부평동)",
      "업 소 명": "동강해물탕",
      "업태": "한식",
      "연번": 10,
      "전화번호": "032-524-9166",
      "지정메뉴": "해물탕"
    }
  ],
  "matchCount": 70,
  "page": 1,
  "perPage": 10,
  "totalCount": 70
};

const data = resonse.data;

let html = `<table>
                <tr> 
                    <th> 소재지 </th> <th> 업 소 명 </th> 
                    <th> 업태 </th> <th> 연번 </th> 
                    <th> 전화번호 </th><th> 지정메뉴 </th> 
                </tr>`;

for(i = 0; i < data.length ; i++){
    html += `<tr>
                <td>${ data[i]['소재지'] } </td> <td>${ data[i]['업 소 명'] } </td>
                <td>${ data[i]['업태'] } </td> <td>${ data[i]['연번'] } </td>
                <td>${ data[i]['전화번호'] } </td> <td>${ data[i]['지정메뉴'] } </td>
            </tr>`;
}
html += `</table>`;

document.write(html);



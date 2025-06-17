

/*
// 1.

const Product = {};
let q1 = prompt(" 제품명 :");
Product.제품명 = q1 ;
let q2 = prompt(" 가격 :");
Product.가격 = q2;
let q3 = prompt(" 제조사 :");
Product.제조사 = q3;
console.log(Product);
*/

// 2.

const members = [
  { id: 'user1', password: 'pass1', name: '사용자1' },
  { id: 'user2', password: 'pass2', name: '사용자2' },
];

const member = {};
for(i = 0 ; i<= 1 ; i++){
    let question2_1 = prompt("id 입력");


    if(members[0].id == question2_1 || members[1].id == question2_1 || members[i+1].id == question2_1){
        console.log("존재하는 아이디입니다.");
        continue;
    }
    else{
        member.id = question2_1;
    }
    let question2_2 = prompt("password 입력");
    member.password = question2_2;

    let question2_3 = prompt("이름 입력");
    member.name = question2_3;
    members.push(member);
}
console.log(members);


/*
for(i = 0 ; i<= 1 ; i++){
    let question2_1 = prompt("id 입력");
    if(members.id == member[i].id){
        console.log("존재하는 아이디입니다.");
    }
    else{
        member.id = question2_1;
    }
    let question2_2 = prompt("password 입력");
    member.password = question2_2;

    let question2_3 = prompt("이름 입력");
    member.name = question2_3;
    members.push(member[i]);
}
console.log(members);
*/
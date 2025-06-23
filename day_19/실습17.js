function addWaiting(){ 
    const nameP = document.querySelector('.nameP');
    const phoneNumberA = document.querySelector('.phoneNumberA');
    const numberP = document.querySelector('.numberP');


    let no = 1;
    let waitingList = localStorage.getItem('waitingList');
    if(waitingList == null){
        waitingList = [];
    }
    else{
        waitingList = JSON.parse(waitingList);
        no = waitingList[waitingList.length-1].no + 1;
    }
    
    if(nameP.value == '' || phoneNumberA.value == '' || numberP.value == ''){
        alert("내용을 모두 입력하십시오.");
        return;
    }

    let PeoplePush = { no: no , name: nameP.value , phone: phoneNumberA.value , count: Number(numberP.value) };

    waitingList.push(PeoplePush);

    localStorage.setItem( 'waitingList', JSON.stringify(waitingList) );
    alert(`대기번호가 등록되었습니다. 대기번호는 ${no}번입니다.` );

    nameP.value = '';
    phoneNumberA.value = '';
    numberP.value = '';
}

function checkStatus(){
    const phoneNumberB = document.querySelector('.phoneNumberB');
    if( phoneNumberB.value == ''){ alert('내용을 입력하십시오.'); return;}
    let waitingList = localStorage.getItem('waitingList');
    if(waitingList == null){
        waitingList = [];
    }
    else{
        waitingList = JSON.parse(waitingList);
    }

    for(let i = 0 ; i < waitingList.length ; i++){
        if(waitingList[i].phone == phoneNumberB.value){
            alert(`고객님의 대기번호는 ${waitingList[i].no}번 입니다.`);
            phoneNumberB.value = '';
            return;
        }
    }
    
    alert( "대기 정보가 없습니다.");
    phoneNumberB = '';
    return;
}






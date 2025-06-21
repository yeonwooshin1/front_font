

document.addEventListener('DOMContentLoaded', () => {
  const deptInput = document.querySelector('#departmentSearch');
  deptInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();      // 폼 제출 같은 기본 동작 막기
      departmentOnclick();     // 엔터키 일 때 실행할 함수
    }
  });
});


//============================================= [1] 부서목록 데이터 모델링 샘플 ====================================================//

const departmentArray = [{numberD : 1 , name : '개발팀'} , {numberD : 2 , name : '기획팀'} ]        //기획부서 배열
let lastNumberD = departmentArray.length-1;
let currentNumberD = departmentArray[lastNumberD].numberD; // 코드를 자동대입 하기 위한 현재 코드번호 , 샘플의 마지막 코드의번호 로 초기화


//============================================= [2] 사원이름 데이터 모델링 샘플 ====================================================//

const employeeArray = [{numberE : 1 , name : '신연우'} , {numberE : 2 , name : '박소정'}]             // 사원들 배열
let lastNumberE = employeeArray.length-1;
let currentNumberE = employeeArray[lastNumberE].numberE; // 코드를 자동대입 하기 위한 현재 코드번호 , 샘플의 마지막 코드의번호 로 초기화

//============================================= [3] 직급 데이터 모델링 샘플 ====================================================//

const rankArray = [ {numberR : 1 , name: '사원'} , { numberR : 2 , name : '부장' } ]                 // 직급 배열 
let lastNumberR = rankArray.length-1;
let currentNumberR = rankArray[lastNumberR].numberR; // 코드를 자동대입 하기 위한 현재 코드번호 , 샘플의 마지막 코드의번호 로 초기화

//============================================= [4] 리스트 데이터 모델링 샘플 ====================================================//

const listArray = [ { numberL: 1 , numberR : 1 , numberE : 1 , numberD : 1 , img : '"https://placehold.co/100x100"' },
                    { numberL: 2 , numberR : 2 , numberE : 2 , numberD : 2 , img : '"https://placehold.co/100x100"' } ]     // 사원 전체 목록 
let lastNumberL = listArray.length-1;
let currentNumberL = listArray[lastNumberL].numberL; // 코드를 자동대입 하기 위한 현재 코드번호 , 샘플의 마지막 코드의번호 로 초기화

//============================================= [5] 휴가 데이터 모델링 샘플 ========================================================//

const vacationArray = [ { numberV : 1 , numberE : 1 , date1 : '2025-09-10' , date2 : '2025-10-02', reason : '몰디브 여행'}]
let lastNumberV = vacationArray.length-1;
let currentNumberV = vacationArray[lastNumberV].numberV; // 코드를 자동대입 하기 위한 현재 코드번호 , 샘플의 마지막 코드의번호 로 초기화












function departmentOnclick(){          console.log('--- departmentOnclick exe ---');  // 부서명단 추가 함수 departmentOnclick()
    if(departmentArray.length == 0){currentNumberD = 1 ;}
    // (1) 입력 마크업객체 가져오기

    const departmentSearch = document.querySelector('#departmentSearch');   // 부서 입력칸 dom객체화

    // (2) 입력 마크업객체 에서 입력값 가져오기 

    const department = departmentSearch.value;                              // 부서 value 간소화
    // * 유효성 검사하기
    if(department === ''){                                                 // 부서명이 없을 때 함수 return
        alert('부서명을 입력해주세요.');                                      
        return;
    }
    // (3) 여러 데이터 객체로 구성 하기.

    console.log(departmentArray);

    const departmentPush = {numberD : currentNumberD++ , name : department };   // 배열에 푸시할 놈 value값 받아서 넣어주기 
    

    // (4) 구성한 객체를 배열에 저장
    
    departmentArray.push(departmentPush);  // departmentArray 배열에 value받은 놈 푸시 후 console확인
    
    departmentList();                                                          // Push 했을 때 부서 리스트 출력함수 렌더링
    employeeSelect();                                                          // Push 했을 때 부서 선택select 출력함수 렌더링 
    
    alert('부서 등록 완료');                                                    // 성공했으면 축하해줘야지?
    departmentSearch.value = '';                                               // 입력 후 value값 초기화
}
departmentList();   // 새로고침 했을 때 출력함수 렌더링




function departmentList(){console.log('--- departmentList exe ---') // department 출력함수 실행조건 : 1. JS가 열렸을 때 2. onClick 했을 때 , 등록 , 수정 , 삭제 했을 때
    const departmentListSee = document.querySelector('#department-main > table > tbody')        // 부서 리스트 tbody 쪽은 이제부터 내가 지배한다.
    
    let html = '';                                         // html 새로 만들 준비중~
    for(let i = 0; i < departmentArray.length; i++){        // departmentArray 배열 순회함
        const deArray = departmentArray[i];
        html += `<tr>                                       
                    <td> ${deArray.name} </td>                                                           
                    <td> <button class="" onclick="editDepartment(${deArray.numberD})"> 수정 </button> <button class="" onclick="deleteDepartment(${deArray.numberD})"> 삭제 </button> </td>
                </tr>`                                      // html 다 넣는중 배열 순회하면서
    }

    departmentListSee.innerHTML = html;                     // 그 html을 deparmentListSee에 innerHTML 하기
}





function deleteDepartment(numberD){                         // Department 부서 삭제 버튼 함수
    for(let i = 0; i < departmentArray.length ; i++){       // departmentArray 배열을 순회함
        if(departmentArray[i].numberD === numberD){         // departmentArray 배열에서 [i]배열의 numberD랑 매개변수 numberD랑 동일확인
            for(let j = 0; j< listArray.length ; j++){      // listArray 배열 순회
                if(listArray[j].numberD == departmentArray[i].numberD){     // listArray[j]에서 numberD가 순회한 depertmentArray[i]와 동일하다면
                    alert('해당 부서에 존재하는 사원이 있습니다.');           // 존재하는 사원이 있다고 알림       
                    return;                                                 // 삭제 하면 안되니 함수 종료
                } // if end
            } // for j end
            
            let question = confirm(`' ${departmentArray[i].name} ' 해당 부서명을 삭제하시겠습니까?`);   // 동일 사원이 없고 동일하다면 삭제여부 한 번 더 물어봄
            if(question == true){                           // 대답이 true 라면 
                departmentArray.splice(i, 1);               // departmentArray의 i배열 하나를 없앰
                alert('삭제 완료!');                        // 그리고 명쾌한 삭제 완료 해답
                departmentList();                          // 리스트 출력함수 렌더링
                employeeSelect();                          // 선택select 출력함수 렌더링 
                return;                                    // 리턴              
            }
            else{
                return;                                    // 동일한 사원이 없다면 그냥 리턴
            } //if end
        } // if end
    } // for end
} // func end





function editDepartment(numberD){                           // department 부서 변경 버튼 함수
    
    for(let i =0; i< departmentArray.length; i++ ){         // departmentArray 배열을 순회함
        if(departmentArray[i].numberD === numberD){         // departmentArray [i]배열의 numberD랑 매개변수 numberD랑 동일확인
            const deparmentEdit = prompt(`변경할 부서명을 입력해주십시오 (현재 부서명 : ${departmentArray[i].name})`) // 동일하다면 변경할 입력칸 제공
            if(deparmentEdit == null){ return;}                                                    // 입력이 null이거나 취소한다면 return;
            alert(`' ${departmentArray[i].name} '이 ' ${deparmentEdit} '(으)로 변경 되었습니다.`)   // 명쾌한 변경 된 내용 알려줌
            
            departmentArray[i].name = deparmentEdit;                                              // 그리고 바꿈^^
            
            break;                                                                                // 나가~ 
        } // if end
    } // for end
    departmentList();                                       // Push 했을 때 부서 리스트 출력함수 렌더링
    employeeSelect();                                       // Push 했을 때 부서 선택select 출력함수 렌더링 
    employeeList ();                                       // PUSH 했을 때 부서 리스트 최신화
} // func end



//======================================================= 부서 (왼) 파트 끝 =================================================================================



function employeeSelect(){    console.log('===== employeeSelect exe=====')      // depertment 부서 select 박스 함수
    const categoryInput = document.querySelector('#categoryInput');             // categoryInput select 박스 dom객체화
    let html = '<option value="" disabled selected > 부서를 선택하세요. </option>';         // 새로 만들어줄 html 생성
    for(let i = 0; i < departmentArray.length ; i++){                                       // departmentArray 순회하면서 리스트 출력
        deList = departmentArray[i];                                                        // 그냥 간소화  
        html += `<option value="${deList.numberD}"> ${deList.name} </option></select>`      // select option 만드는중
    } // for end
    categoryInput.innerHTML = html;                                                         // categoryInput 부분을 순회한 html로 대체
} // func end



function employeeOnclick(){          console.log('--- employeeOnclick exe ---');  // 부서명단 추가 함수 employeeOnclick()
    
    const employeeName = document.querySelector('#employeeName');                       // 이름 입력칸 dom객체화
    const employeeRank  = document.querySelector('#employeeRank');                      // 직급 입력칸 dom객체화
    const categoryInput  = document.querySelector('#categoryInput');                    // 부서 입력칸 dom객체화
    const employeeImg  = document.querySelector('#employeeImg');                        // 사진 입력칸 dom객체화

    const name = employeeName.value;                                                    // 이름 value 간소화
    const rank = employeeRank.value;                                                    // 직급 value 간소화
    const Img = employeeImg.files[0];                                                   // 사진 선택 첫번째 선택한 것을 고르는 것
    const imageUrl = Img ? URL.createObjectURL(Img) : 'https://placehold.co/100x100'; // imageUrl이 있다면 고르고 없다면 기본 placehold 사진 사용
    const category = Number(categoryInput.value);                                     // category value랑 departmentArray.NumberD랑 같은 거임 Number()사용

    if(name === '' || rank ==='' || category === '' ){                                // * 유효성 검사하기 name , rank , category 가 없다면 알람 뜨게 한 후 return;                
        alert(' 비어있는 항목이 있습니다.');                                      
        return;
    } 

    const ePush = { numberE : ++currentNumberE , name : name};                          // ePush는 employeeArray 배열에 추가하겠단 소리임
    employeeArray.push(ePush);                                                          // 푸시

    const rPush = { numberR : ++currentNumberR , name : rank};                          // rPush는 rankArray 배열에 추가하겠단 소리임
    rankArray.push(rPush);                                                              // 푸시
    // ListArray에 rPush에서 numberR만 넣고 ePush에서 numberE만 넣고 numberD에 category.value 넣고 img엔 imageUrl 삼항연산자 넣겠단 거임

    const lishPush = {numberL:listArray.length+1 , numberR : rPush.numberR , numberE : ePush.numberE , numberD : category , img : imageUrl };
    
    listArray.push(lishPush);       // lidhPush 를 listArray에 잘 푸시해주자
    console.log(listArray);         // 콘솔에 출력하여 잘 실행하는지 확인해보장
    
    alert('등록 완료');                                                    // 등록을 축하한다. 넌 이제 회사의 노예
    
    employeeName.value = '';                                               // 입력 후 value값 초기화
    employeeRank.value = '';                                               // 입력 후 value값 초기화
    categoryInput.value = '';                                              // 입력 후 value값 초기화
    
    employeeList ();                                                        // 푸시한 후 사원목록 렌더링
    employeeSelector();                                                      // 휴가 명단 사원option도 최신화 employeeSelector()

} // func end



employeeList ();                                                                    // 사원목록 렌더링
function employeeList (){ console.log('===== employeeList exe =====');              // employeeList 출력함수 실행조건 : 1. JS가 열렸을 때 2. onClick 했을 때 , 등록 , 수정 , 삭제 했을 때
    const employee = document.querySelector('#employee-list-div > table > tbody');  // employee-list-div 안에 있는 tbody dom객체화
    let html = '';                                                                  // html은 선언만 해줌
    for(let i =0; i < listArray.length ; i++){                                      // listArray에서 순회하면서 배열 전부를 html에 넣어줌
        const list = listArray[i];                                                  // listArray[i] 를 쉽게 간소화
        let eL = '';                                                                // eL rL dL 선언함  간편하게 간소화한거임.
        let rL = '';                                                                // 이유 : listArray에는 이름과 부서 직급 모두 코드로 들어가있어 그대로 넣으면 코드숫자만 뜸
        let dL = '';                                                                // 그래서 코드말고 이름 넣어야함 , listArray의 각 배열 코드들과 맞다면 그것의 .name을 넣으면 된다.
        for(let j = 0 ; j < rankArray.length ; j++){
            if(rankArray[j].numberR === list.numberR){                              // 먼저 직급부터 돌려보자
                rL = rankArray[j];                                                  // rankkArray의 j번째 배열.numberR 과 list.numberR이 같다면
                break;                                                              // 그만 찾고 rL의 배열의 .name을 html에 넣으면 된다.
            }
            
        }
        for(let k = 0; k < employeeArray.length ; k++){                             // employee 즉 사원 배열도 위와 동일
            if(employeeArray[k].numberE === list.numberE){                          // employeeArray[k].numberE와 list.namberE가 같다면
                eL = employeeArray[k];                                              // employeeList에 넣어야 할 객체를 찾았고 그것을 .name을 하면 이름이 들어가~
                break;                                                              // break; 하고 나가~
            }
        }
        for(let l = 0; l < departmentArray.length ; l++){                           // 얘도 동일하다
            if(departmentArray[l].numberD === list.numberD){                        // 얜 부서파트다. 
                dL = departmentArray[l];                                            // 주석 좀 그만 넣고 싶다. depertment[k].numberD와 같은 지 보고 같다면 dL에 그 k번째 배열에 넣는것
                break;                                                              // 이젠 마스터한 거 같다 브릭하고 나가자 심지어 numberD 같은 거 복붙도 귀찮아서 쓰는중
            }                                                                       // 타자연습 개이득~ 이제 장난 안침.
        }
        html += `<tr>    
                    <td> <img src=${list.img} ></td>   <th> ${eL.name} </td>   <td> ${dL.name} </td> <td> ${rL.name} </td>     
                    <td> <button onclick="editEmployeeList(${list.numberL})">수정</button> <button class="" onclick="deleteEmployeeList(${list.numberL})"> 삭제 </td>
                </tr>`                 // html 추가중, 객체들을 넣어줌  , 변경, 삭제 onclick 이벤트들은 여기다가 추가해줘야 실행이 됨. html에 넣어봤자 소용없음.
                
                
    } // for end

    employee.innerHTML = html;                     // 그 html을 employee에 innerHTML 하기

} // func end



function deleteEmployeeList(numberL) {  console.log('=== deleteEmployeeList exe ===' )  ;      // Employee-list 부서 삭제 버튼 함수
    let removedNumberE = null;                                                                 // 없어질 사람 넘버를 정의

    for(let i = 0; i<listArray.length; i++){                                                   // listArray 배열 순회
        if(listArray[i].numberL === numberL){                                                  // 만약 listArray i번째의 리스트넘버랑 매개변수 리스트넘버가 같다면?
            if(!confirm(`해당 사원의 정보를 삭제하시겠습니까?`)){return;}                       // 동일하다면 삭제여부 한 번 더 물어봄                                     
            removedNumberE = listArray[i].numberE;                                            // 지우기 전 employee 넘버를 넣어줌
            for(let k =0; k < vacationArray.length ; k++){                                    // vacationArray 배열 순회
                if(removedNumberE == vacationArray[k].numberE){                               // 만약 지워질 employee랑 vacation k번째 emplyee 넘버가 같다면?
                    if(!confirm("휴가 신청 목록에 해당 사원이 있습니다. 정말 삭제하시겠습니까?")){  // 휴가계획에 사람이 있으니 정말 삭제하냐고 다시 한 번 물어보고 취소한다면?
                        return;                                                                 // 안 지우겠다고 했으니 함수 종료                                                        
                    } // if end
                    vacationArray.splice(k , 1);                                                // vacationArray의 k번째 배열 하나 삭제 왜냐면 listArray가 삭제되면 사람도 삭제 되어야함 그리고 휴가에 그 인원도 삭제 되어야함   
                    break;                                                                      // break;해서 해당 k 반복문 나감
                } // if end
            } // for k end

            listArray.splice(i, 1);                                                             //  listArray i번째 배열 하나 삭제
            alert('삭제가 완료 되었습니다.');                                                   // 삭제되었다는 알림창 추가
            break;                                                                            // break;
        } // if end
    } // for end

    if (removedNumberE !== null ){                                                              // 만약 removedNumberE가 정의 되었다면? = listArray가 삭제 됬다면? 
        for (let j = 0; j < employeeArray.length; j++) {                                        // employeeArray 배열 순회 why? 리스트가 삭제 되었다면 사람정보도 삭제해야함
            if (employeeArray[j].numberE === removedNumberE) {                                  // 만약 removedNumberE.numberE = listArray.numberE가 순회한 j 번째 배열의 numberE와 동일하다면?
                employeeArray.splice(j, 1);                                                     // 너도 나가라~
                break;                                                                          // break;
            } // if end
        } // for j end
    } // if end
    vacationList();                                             // 휴가 계획에 있는 사람도 최신화로 없애줘야함 렌더링
    employeeList ();                                            // 사원 목록도 렌더링
    employeeSelector();                                         // 휴가 명단 사원option도 최신화 employeeSelector()
} // func end




function editEmployeeList(numberL){  console.log('=== editEmployeeList exe ===' )        // Employee-list 부서 변경 버튼 함수
    for(let i = 0; i<listArray.length; i++){                                            // listArray 순회
        const list = listArray[i];                                                  // 한 번 더 해,, 복붙해,, ctrl + c
        let eL = '';                                                               
        let rL = '';                                                               
        for(let j = 0 ; j < rankArray.length ; j++){
            if(rankArray[j].numberR === list.numberR){                            
                rL = rankArray[j];                                                
                break;                                                             
            } // if end
        }// for j end
        for(let k = 0; k < employeeArray.length ; k++){                            
            if(employeeArray[k].numberE === list.numberE){                          
                eL = employeeArray[k];                                              
                break;                                                              
            } // if end
        }// k end                                                        // 여기까지 ctrl + v
        
        
        if(listArray[i].numberL === numberL){                       // numberL 매개변수와 listArray[i].numberL이랑 같다면
            const employeeE =prompt("변경할 이름을 입력하세요.");   // prompt 실행
            if (employeeE === null) return;                         // 취소했으면 종료     

            
            const rankE = prompt("변경할 직급을 입력하세요.");      // prompt 실행  
            if (rankE === null) return;                             // 취소했으면 종료
            eL.name = employeeE;                                   // prompt 받은 거 eL.name에 넣어주기
            rL.name = rankE;                                       // prompt 받은 거 rL.name에 넣어주기
            alert("사원 정보가 변경되었습니다.");                   // 알림주기
            employeeList ();                                       // 부서 리스트 최신화
            employeeSelector();                                     // 사원 목록도 렌더링
            vacationList();                                         // 휴가 목록 사람 이름도 바꿔줘야지 렌더링
            return;  // 변경 후엔 함수 종료
        } // if end
    } // for end
} // func end


//======================================================= 사원목록 (중간) 파트 끝 =================================================================================


employeeSelector();                                                                  // 휴가 명단 사원 option 함수 렌더링
function employeeSelector(){          console.log('--- employeeSelector exe ---');  // 휴가 명단 사원 option 함수 employeeSelector()
    
    const categoryInput = document.querySelector('#categoryInputE');   // 사원 입력칸 dom객체화

    let html = '<option value="" disabled selected > 휴가 신청 사원을 선택하세요. </option> ';  // html 양식 그대로 가져오기
    for(let i= 0; i < employeeArray.length; i++){                                             // employeeArray 배열 순회
        const employee = employeeArray[i];                                                      // employee 상수 간소화
        html += `<option value="${employee.numberE}"> ${employee.name} </option>` ;             // 여기 employee배열에 있는 놈들 넣어줌 
    } // for end
    
    categoryInput.innerHTML = html;                                                                 //innerHTML 해줘서 넣어주기
}

function vacationListInput(){                                           // 방학이다! input 함수 추가
    const categoryInput = document.querySelector('#categoryInputE');   // 사원 입력칸 dom객체화
    const dateInput1 = document.querySelector('#dateInput1');   // 날짜 시작 dom객체화
    const dateInput2 = document.querySelector('#dateInput2');   // 날짜 종료 dom객체화
    const vacationInput = document.querySelector('#vacationInput'); // 이유 dom객체화

    const category = categoryInput.value;                           // 간소화
    const dateS = dateInput1.value;                                 // 간소화
    const dateF = dateInput2.value;                                 // 간소화
    const reason = vacationInput.value;                             // 간소화

    if (!category || !dateS || !dateF || !reason){ alert("모든 항목을 입력해주세요."); return; }        // 유효성 검사 만약 입력 안됐다면 입력하라하기
    
    if(dateS > dateF ){ alert("시작일이 종료일보다 클 수 없습니다.");  return; }                        // 시작 날짜보다 종료 날짜가 일찍이면 당연히 이상하죠?

    const vacationListPush = { numberV : currentNumberV++ , numberE : category , date1 : dateS , date2 : dateF , reason : reason };     // push할 객체 생성 그 안에 넣어줌

    vacationArray.push(vacationListPush);                       // 그거 vacationArray에 푸시함
    alert(" 휴가 신청이 완료 되었습니다.");                       // 신청했다는 알림창 추가
    categoryInput.value = '';                                       // value값 초기화
    dateInput1.value = '';                                          // value값 초기화
    dateInput2.value = '';                                          // value값 초기화
    vacationInput.value = '';                                       // value값 초기화
    console.log(vacationArray);                                     // 확인용 콘솔

    vacationList();                                                 // vacationList 즉 휴가 목록 렌더링
} // func end

vacationList();                                                     // 휴가 목록 렌더링
function vacationList() {                                           // 휴가 목록 html에 표현하는 함수 vacationList 함수
  const container = document.querySelector('#vacation-list > div > .vacationListContainer');    // html dom객체화
  let html = '';                                                                                // html 변수 생성
  for(let i = 0; i < vacationArray.length; i++){                                                // vacationArray 배열순회
    const vacation = vacationArray[i]                                                           // 간소화
    let eL = '';                                                                                // eL 변수 만들어줌
    for(let k = 0; k < employeeArray.length ; k++){                             // employeeArray 배열에 순회 이유는 위와 동일하지만 vacationArray는 numberE가 들어가 있으니 그걸 이름으로 나타내주기 위한 작업
        if(employeeArray[k].numberE == vacation.numberE){                       // employeeArray[k].numberE와 vacationArray[i].namberE가 같다면
            eL = employeeArray[k];                                              // eL 변수에 employee k번째 배열 넣어주기
            break;                                                              // break; 하고 나가~
        } // if end;
    }// for j end
    html += `<div class="vacationList">                                              
                <div>
                    <div>${eL.name}</div>          
                    <button class="" onclick = "vacationListDelete(${vacation.numberV})"> 신청취소 </button>    
                </div>
                <div> ${vacation.date1} ~ ${vacation.date2}</div>            
                <div> 사유 : ${vacation.reason}</div>                          
            </div>`                                                                         // html에 다 넣어줘 eL.name은 뭐냐면 vacation엔 사원코드만 들어가 있으니 위에서 순회해서 이름으로 넣어준것
  } // for i end

  container.innerHTML = html;                                                               // 표현해주시면 됩니다. innerHTML로


} // func end

function vacationListDelete(numberV){                                                       // 휴가 취소onclick 함수
    for(let i =0; i < vacationArray.length; i++){                                           // vacationArray 배열 순회
        if(vacationArray[i].numberV == numberV){                                            // vacationArray 의 i번째 배열이 매개변수 numberV와 같다면
            if(!confirm("휴가 내용을 삭제하시겠습니까?")){                                      // 삭제할 건지 물어봄 만약 취소를 누른다면? 
                return;                                                                         // 함수 종료
            }
            vacationArray.splice( i , 1);                                                       // vacationArray의 i번째 배열 하나 삭제
            alert("휴가 삭제 완료!");                                                           // 넌 휴가 짤린거야 ㅅㄱ
            break;                                                                              // 찾아서 짤랐다면 반복문 종료
        } // if end
    } // for end
    vacationList();                                                                             // 휴가 목록 렌더링
    return;                                                                                     // 함수 종료
} //func end

//======================================================= 휴가목록 (오른쪽) 파트 끝 =================================================================================
/*
CSS 선택임
    [ 작업 순서 ]
    1. (프) 화면 구성 (HTML/CSS)
    2. (백) 데이터모델링
    (1) 저장할 자료들을 모두 찾기
        - 부서명 
    (2) 저장할 자료들의 분리( 중복 배제 ) 1:M (하나가 여러개를 참조/관계)
    (3)  분리된 자료들끼리 연관관계 X
        * 테이블(배열) , 테이블내 행 / 가로 단위 (객체)
    3. (백) 함수 (기능) 설계
    
    4. (백) 로직

    5. (프/백) 화면 <---> 기능 연동
*/
//============================================= [1] 데이터 모델링 샘플 ====================================================//

const departmentArray = [{numberD : 1 , name : '개발팀'} , {numberD : 2 , name : '기획팀'} ]        //기획부서 배열
let currentNumberD = 3 // 코드를 자동대입 하기 위한 현재 코드번호 , 샘플의 마지막 코드의번호 로 초기화

//============================================= [2] 데이터 모델링 샘플 ====================================================//

const employeeArray = [{numberE : 1 , name : '신연우' , numberE : 2 , name : '박소정'}]             // 사원들 배열

//============================================= [3] 데이터 모델링 샘플 ====================================================//

const rankArray = [ {numberR : 1 , name: '사원' }]                                                    // 직급 배열 

//============================================= [4] 데이터 모델링 샘플 ====================================================//

const listArray = [ {numberR : 1 , numberE : 1 , numberD : 1 , img : '"https://placehold.co/100x100"' }]     // 사원 전체 목록 


function departmentOnclick(){          console.log('--- departmentOnclick exe ---');  // 부서명단 추가 함수 departmentOnclick()
    
    // (1) 입력 마크업객체 가져오기
    
    const departmentSearch = document.querySelector('#departmentSearch');   // 부서 입력칸 dom객체화

    // (2) 입력 마크업객체 에서 입력값 가져오기 

    const department = departmentSearch.value;                              // 부서 value 간소화
    
    // (3) 여러 데이터 객체로 구성 하기.

    const departmentPush = {numberD : currentNumberD++ , name : department };   // 배열에 푸시할 놈 value값 받아서 넣어주기 
    
    // (4) 구성한 객체를 배열에 저장
    
    departmentArray.push(departmentPush);       console.log(departmentArray);  // departmentArray 배열에 value받은 놈 푸시 후 console확인
    departmentList();                                                          // Push 했을 때 출력함수 렌더링
}
departmentList();   // 새로고침 했을 때 출력함수 렌더링

function departmentList(){console.log('--- departmentList exe ---') // department 출력함수 실행조건 : 1. JS가 열렸을 때 2. onClick 했을 때 , 등록 , 수정 , 삭제 했을 때
    const departmentListSee = document.querySelector('#department-main > table > tbody')        // 부서 리스트 tbody 쪽은 이제부터 내가 지배한다.
    
    let html = '';                                         // html 새로 만들 준비중~
    for(let i = 0; i < departmentArray.length; i++){        // departmentArray 배열 순회함
        const deArray = departmentArray[i];
        html += `<tr>                                       
                    <td> ${deArray.name} </td>                                                           
                    <td> <button class="" onclick="EditDepartment(${deArray.numberD})"> 수정 </button> <button class="" onclick="DeleteDepartment(${deArray.numberD})"> 삭제 </button> </td>
                </tr>`                                      // html 다 넣는중 배열 순회하면서
    }

    departmentListSee.innerHTML = html;                     // 그 html을 deparmentListSee에 innerHTML 하기
}

function DeleteDepartment(numberD){                         // Department 부서 삭제 버튼 함수
    for(let i = 0; i < departmentArray.length ; i++){       // departmentArray 배열을 순회함
        if(departmentArray[i].numberD === numberD){         // departmentArray 배열에서 [i]배열의 numberD랑 매개변수 numberD랑 동일확인
            let question = confirm(`' ${departmentArray[i].name} ' 해당 부서명을 삭제하시겠습니까?`);   // 동일하다면 삭제여부 한 번 더 물어봄
            if(question == true){                           // 대답이 true 라면 
                departmentArray.splice(i, 1);               // departmentArray의 i배열 하나를 없앰
                alert('삭제 완료!');                        // 그리고 명쾌한 삭제 완료 해답
                break;                                      // break;
            } // if end
            
        } // if end
    } // for end
    departmentList();                                       // 렌더링 새로고침
    return;                                                 // 유유히 어그로 끌고 나감
} // func end

function EditDepartment(numberD){                           // department 부서 변경 버튼 함수
    
    for(let i =0; i< departmentArray.length; i++ ){         // departmentArray 배열을 순회함
        if(departmentArray[i].numberD === numberD){         // departmentArray [i]배열의 numberD랑 매개변수 numberD랑 동일확인
            const deparmentEdit = prompt(`변경할 부서명을 입력해주십시오 (현재 부서명 : ${departmentArray[i].name})`) // 동일하다면 변경할 입력칸 제공
            alert(`' ${departmentArray[i].name} '이 ' ${deparmentEdit} '(으)로 변경 되었습니다.`)   // 명쾌한 변경 된 내용 알려줌
            departmentArray[i].name = deparmentEdit;                                              // 그리고 바꿈^^
            break;                                                                                // 나가~ 
        } // if end
    } // for end
    departmentList();                                       // 렌더링 새로고침
    return;                                                 // 유유히 어그로 끌고 나감
} // func end

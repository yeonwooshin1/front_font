
// 수정페이지 접속했을 때 기존 데이터 조회
getBoard();
function getBoard(){
    // 1. URL(웹주소) 상의 웹주소 가져오기
    const url = new URLSearchParams(location.search);
     //2. 웹주소에서 선택된 게시물 번호 (쿼리스트링값) 가져오기
    const selectNo = url.get('no');

    let boradList = JSON.parse(localStorage.getItem('boardList') || '[]' );

    for(let i = 0; i < boradList.length; i++){
        const board = boradList[i];

        if(board.no == selectNo){
            document.querySelector('#titleInput').value = board.title;
            document.querySelector('#contentInput').value = board.content;
        }
    }
}

function boardWrite(){
    // 1. URL(웹주소) 상의 웹주소 가져오기
    const url = new URLSearchParams(location.search);
     //2. 웹주소에서 선택된 게시물 번호 (쿼리스트링값) 가져오기
    const selectNo = url.get('no');

    let boardList = JSON.parse(localStorage.getItem('boardList') || '[]' );

    for(let i =0; i< boardList.length; i++){
        const board = boardList[i];

        if(board.no == selectNo){
            board.title = document.querySelector('#titleInput').value;
            board.content = document.querySelector('#contentInput').value;
            board.pwd = document.querySelector('#pwdInput').value;

            localStorage.setItem('boardList' , JSON.stringify(boardList));

            alert ('수정이 완료되었습니다.');

            location.href=`view.html?no=${board.no}`;
        }
    }
}
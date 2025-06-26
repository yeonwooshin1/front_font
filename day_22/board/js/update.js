
// 수정페이지 접속했을 때 기존 데이터 조회
getBoard();
function getBoard(){
    const url = new URLSearchParams(location.search);
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
setBoard ();
function setBoard (){
    // 1. URL(웹주소) 상의 웹주소 가져오기
    const url = new URLSearchParams(location.search); // 쿼리스트링만 가져오는거 no=3
    //2. 웹주소에서 선택된 게시물 번호 (쿼리스트링값) 가져오기
    const selectNo = url.get('no'); // 여러개의 값중 no만 꺼내옴

    let boardList = JSON.parse(localStorage.getItem('boardList') || '[]' );

    for(let i = 0; i < boardList.length ; i++ ){
        const board = boardList[i];
        if(board.no == selectNo){
            document.querySelector('#title').innerHTML = board.title;
            document.querySelector('#content').innerHTML = board.content;
        }
    }
}

// 삭제함수
function boardDelete(){
    // 1. URL(웹주소) 상의 웹주소 가져오기
    const url = new URLSearchParams(location.search); // 쿼리스트링만 가져오는거 no=3
    //2. 웹주소에서 선택된 게시물 번호 (쿼리스트링값) 가져오기
    const selectNo = url.get('no'); // 여러개의 값중 no만 꺼내옴

    let boardList = JSON.parse(localStorage.getItem('boardList') || '[]' );

    for(let i =0; i< boardList.length ; i++){
        const board = boardList[i];

        if(board.no == selectNo){
            let confirm = prompt("비밀번호를 입력하세요.");

            if( confirm == '' || confirm == null ){ return;}

            if(confirm == board.pwd){
                boardList.splice(i , 1);
                localStorage.setItem('boardList', JSON.stringify(boardList));
                alert("게시물이 삭제되었습니다.");
                location.href = "list.html"; // 글목록 페이지로 이동 
            }
            else{   
                alert("비밀번호가 일치하지 않습니다.");
                return boardDelete();
            }
        }

    }

}

//수정 함수
function boardEdit(){
    // 1. URL(웹주소) 상의 웹주소 가져오기
    const url = new URLSearchParams(location.search); // 쿼리스트링만 가져오는거 no=3
    //2. 웹주소에서 선택된 게시물 번호 (쿼리스트링값) 가져오기
    const selectNo = url.get('no'); // 여러개의 값중 no만 꺼내옴

    let boardList = JSON.parse(localStorage.getItem('boardList') || '[]' );

    for(let i =0; i< boardList.length; i++){
        const board = boardList[i];

        if(board.no == selectNo){
            let confirm = prompt("비밀번호를 입력하세요.");
            
            if(confirm == null || confirm == ''){ return; }
        
            if(confirm == board.pwd){
                location.href = `update.html?no=${board.no}` ; // 수정 경로로 이동 no는 그 게시물 no = 값
            }
            else{
                alert("비밀번호가 일치하지 않습니다.");
                return boardDelete();
            }

        }
    }
}
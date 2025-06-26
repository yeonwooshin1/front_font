
function boardWrite(){
    const titleInput = document.querySelector('#titleInput');
    const contentInput = document.querySelector('#contentInput');
    const pwdInput = document.querySelector('#pwdInput');

    const title = titleInput.value ;
    const content = contentInput.value ;
    const pwd = pwdInput.value ;

    const obj = { title , content , pwd};

    let boardList = JSON.parse(localStorage.getItem('boardList') || '[]' );

    obj.no = boardList.length == 0 ? 1 : boardList[boardList.length - 1].no +1 ;

    boardList.push(obj);

    localStorage.setItem('boardList' , JSON.stringify(boardList));

    alert('게시물 작성 성공');

    location.href = 'list.html' //글쓰기 성공시 게시물목록(list) 페이지로 이동

} //func end
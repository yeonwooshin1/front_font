boardPrint();
function boardPrint(){
    const boardTbody = document.querySelector('#boardTbody');

    let boardList = JSON.parse(localStorage.getItem('boardList') || '[]' );
    
    let html = '';
    for(let i = 0; i < boardList.length ; i++ ){
        const board = boardList[i];
        
        html += `<tr>
                    <td> ${board.no}</td>
                    <td> <a href ="view.html?no=${board.no}">${board.title}</a></td>
                </tr>` ;
    }

    boardTbody.innerHTML = html;
}
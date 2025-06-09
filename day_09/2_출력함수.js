
// 2_출력함수.js 
// - HTML과 CSS 와 달리 JS는 프로그래밍 언어다.
// - 명령어나 연산을 기계와 소통하는 언어 뜻


// -- 자료 작성 --
10          // 10이라는 리터럴 값 이면서 숫자 자료형 이다.
3.14        // 3.14 이라는 리터럴 값 이면서 숫자 자료형 이다.
"안녕하세요" // 안녕하세요 이라는 리터럴 값 이면서 문자열 자료형이다.
true        // true라는 리터럴 값 이면서 불리언 자료형이다.
[ 10 , 3.14 , "안녕하세요" , true ] // [] 안에 여러 개 리터럴 값을 포함하는 배열 자료형이다.

// --- 출력해!!! 명령어 ---( 미리 만들어둔 코드 )
// [출력함수] : 
// 1. console.log( 출력할자료 )     : 개발자도구[f12] 에서 console[탭] 에 출력된다.
console.log( 10 )
console.log( "안녕하세요" )

// 2. alert( 출력할자료 )           : 브라우저(크롬) 알림창으로 변환된다.
alert( 3.14 )
alert( true )

// 3.document.write( HTML문법 )     : document(HTML 파일).write (쓰다) : html 문서에 출력한다.
document.write( "<h3> JS에서 작성한 HTML 입니다.</h3>")

// 4. document.querySelector(선택자).innerHTML = HTML : 특정한 선택자 (마크업, class. id) 을 출력한다.
// -> innerHTML : <마크업> (여기가 inner) </마크업> 마크업 사이 
document.querySelector( "h3" ).innerHTML ="<h3> 특정한 선택자에 HTML 작성 합니다. </h3>"
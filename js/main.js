$(document).ready(function() {
  $("#container").addClass("start");
  $("nav li").click(function() {
    // click 메서드로 클릭 이벤트를 만들어 메뉴를 클릭
    $("#container").css("max-width", "100%");
    var id=($(this).attr("data-rol"));
    // data-rol 속성값을 가져오도록 .attr 메서드를 사용
    // data-rol 속성은 HTML 요소에 추가 정보를 저장할 수 있는 속성
    $("nav li").removeClass("on");
    // 클릭하지 않은 태그에는 removeClass 메서드르 사용하여 지우고
    $(this).addClass("on");
    // 사용자가 선택한 메뉴만 .on 클래스가 적용되도록 addClass 메서드를 사용
    $(".content").removeClass("prev this next");
    // 클릭 시 가지고 있던 클래스를 모두 지운다
    $("#" + id).addClass("this").prevAll().addClass("prev");
    // 클릭한 메뉴와 매칭되는 id에 this 클래스를 지정하고 그 앞의 모든
    //  <section> 태그는 .prev 클래스를 지정한다
    $("#" + id).nextAll().addClass("next");
    // 클릭한 메뉴와 매칭되는 id의 뒤에 오는 <section> 태그는 .next 클래스를 지정한다
  });
  // 로고 클릭 시
  $(".logo_box").click(function() {
    // logo_box라는 클래스명을 선택자로 지정하여 클릭이벤트를 만듭니다.
    $("nav li").removeClass("on");
    // 원래 화면으로 돌아올 때는 메뉴 역시 초기화 상태가 되어야 하므로 removeClass 메서드를 사용
    $(".content").removeClass("prev this next");
    $("#container").css("max-width", "1200px");
    // 원래 4분할된 화면으로 돌아와야 하므로 removeClass 메서드를 사용하여
    // prev/next/this 클래스를 삭제하고 #container 태그 역시 max-width를 1200px로 변경
  });
  $(".roll_left").click(function() {
    // 왼쪽버튼의 클릭 이벤트
    $(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
    // 이동할 요소로 첫 번째 <li> 태그를 선택
    // 첫 번째 li 태그가 .book_roll 클래스의 li 태그 중 가장 마지막 li 태그 뒤로 이동
  });
  $(".roll_right").click(function() {
    // 오른족버튼의 클릭 이벤트
    $(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
    // 가장 마지막 태그가 이동되도록 eq 메서드의 값을 -1로 지정
    // .book_roll 클래스 li 태그의 가장 마지막 요소가 첫 번째 요소 앞에 삽입되도록 조정
  })
  // Ajax를 사용해 스크립트 작성하기
  $(".book_roll li").click(function() {
    // .book_roll 클래스에 li에 클릭 이벤트 
    var _this =$(this);
    // 클릭 이벤트가 발생되어 선택된 태그($(tihs))를 변수로 만듭니다.
    var liurl = _this.data("url");
    // _this의 data 속성에는 해당 도서의 소서소개 페이지의 url이 있습니다.
    // 클릭할 때마다 해당 url을 가져와 변수에 담습니다.
    $(".notebook").html();
    // 새로운 내용을 갱신하기 위해 해당영역(.notebook)의 html을 지워줍니다.
    $.ajax({
      type: 'post',   // HTTP 요청방식
      url: liurl,     // 해당 url
      dataType: 'html', // data 타입
      success: function(data) { //  HTTP 요청 성공 후 데이터 전송
        $(".notebook").html(data)
      }
    });
  });
  // 아코디언 형태 스크립트 적용하기
  $(".accordio_box ol li").click(function() {
    // 목록을 클릭할 수 있게 선택자를 만들고 클릭 이벤트
    $(".accordio_box ol li").removeClass("on")
    // 현재 선택된 li태그만 on클래스를 갖고 나머지 태그는 on 클래스가 지워져야 열리고 닫히는 형태
    $(this).addClass("on")
    // 클릭한 li태그가 현재 클릭한 요소가 되므로 $(this)로 변경하고 li태그에 on
  })
});

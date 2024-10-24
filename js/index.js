$(document).ready(function () {
  $(document).mousemove(function (e) {
    $("#status").html(e.pageX + ", " + e.pageY);
    $(".box").css("width", e.pageX);
    $(".box").css("height", e.pageY);
  });
});

// .box의 가로와 세로의 px이 마우스의 x, y 위치만큼 바뀌었으면 좋겠다
// 마우스를 움직일 때의 이벤트를 어떻게 만들지?
// mouseX, mouseY의 좌표값이 필요
// .box의 가로와 세로의 길이를 바꿀 방법을 찾아라.

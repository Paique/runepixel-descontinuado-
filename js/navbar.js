var i = setInterval(function () {
  clearInterval(i);

  // O código desejado é apenas isto:
  document.getElementById("loading").style.display = "none";
  document.getElementById("content").style.display = "block";

}, 5000);

$('#mytext').click(function(){
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#mytext').text()).select();
  document.execCommand("copy")
  $("#mytext").html("<span class='extrapad'>IP copiado!</span>");
  $temp.remove();
});




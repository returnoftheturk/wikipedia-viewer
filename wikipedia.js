$(document).ready(function(){
  $("#searchbutton").click(function(){
    console.log($("#search").val());
    $.ajax({
      url:"https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&meta=&rawcontinue=1&titles=",
      data:"srsearch="+ $("#search").val(),
      dataType:"json",
      header:{
        contentType:"application/javascript",
        Accept:"application/JSON"
      },
      success: function(data){
        $()
        console.log($("#search").val());
        console.log(data);
        console.log("Hello");
        console.log(this.url);
      },
      cache:true
    });
  });


});

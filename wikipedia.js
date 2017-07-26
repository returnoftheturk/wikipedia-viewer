$(document).ready(function(){
  $("#searchbutton").click(function(){

    $.ajax({
      url:"https://en.wikipedia.org/w/api.php?action=query&format=json&prop=links%7Cextracts%7Cinfo&rawcontinue=1&generator=search&exsentences=2&exintro=1&explaintext=1&inprop=url",
      data:"gsrsearch="+ $("#search").val(),
      dataType:"json",
      header:{
        contentType:"application/javascript",
        Accept:"application/JSON"
      },
      success: function(data){
        var titles = [];
        for (var pageId in data.query.pages){
          if (data.query.pages.hasOwnProperty(pageId)){
            titles.splice(data.query.pages[pageId].index, 0, data.query.pages[pageId].title);
            console.log(data.query.pages[pageId].title);
            console.log(titles.join());
          }
        }
        // $("#media1 h4").html(data.query.pages[0].title);
        // console.log(data.query.pages[0].title);

        console.log(data);

        console.log(this.url);
      },
      cache:true
    });
  });


});

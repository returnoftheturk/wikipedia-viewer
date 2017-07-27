$(document).ready(function(){
  $("#searchbutton").click(function(){

    $.ajax({
      url:"https://en.wikipedia.org/w/api.php?action=query&format=json&prop=links%7Cextracts%7Cinfo&rawcontinue=1&generator=search&exsentences=2&exintro=1&explaintext=1&inprop=url&origin=*",
      data:"gsrsearch="+ $("#search").val(),
      dataType:"json",
      header:{
        contentType:"application/javascript",
        Accept:"application/JSON"
      },
      success: function(data){
        var titles = [];
        var bodyContent = [];
        var links = [];
        console.log(this.url);


        for (var pageId in data.query.pages){
          if (data.query.pages.hasOwnProperty(pageId)){
            titles.splice(data.query.pages[pageId].index, 0, data.query.pages[pageId].title);
            bodyContent.splice(data.query.pages[pageId].index, 0, data.query.pages[pageId].extract);
            links.splice(data.query.pages[pageId].index, 0, data.query.pages[pageId].fullurl);
            // console.log(data.query.pages[pageId].title);
          }
        }
        var i=0;
        $('.media').remove();
        for(;i<titles.length;i++){
          var div = document.createElement('div');
          div.setAttribute('class','media');

          var aalink = document.createElement('a');
          aalink.setAttribute('class', 'media-body');
          aalink.setAttribute('href', links[i]);
          aalink.setAttribute('target','_blank');

          var h4 = document.createElement('h4');
          h4.setAttribute('class','media-heading');
          h4.innerHTML = titles[i];

          var p = document.createElement('p');
          p.innerHTML = bodyContent[i];

          aalink.appendChild(h4);
          aalink.appendChild(p);
          div.appendChild(aalink);

          document.getElementById('container').appendChild(div);

        }

        console.log(titles.join());
        console.log(bodyContent.join());
        console.log(links.join());
        // $("#media1 h4").html(data.query.pages[0].title);
        // console.log(data.query.pages[0].title);

        console.log(data);

      },
      cache:true
    });
  });


});

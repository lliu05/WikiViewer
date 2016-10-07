$(document).ready(function(){  
  $("#searchBox").keyup(function(event){
    if(event.keyCode === 13 && document.getElementById("searchBox").value !== ""){
      $("ul").empty();
      
      var searchContent = document.getElementById("searchBox").value;
      console.log(searchContent);

      $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        data: { action: 'opensearch', format: 'json', search: searchContent},
        dataType: 'jsonp',
        success: function (data) {
          console.log(data);
          if (data[1] !== "") {
            for (var i = 0; i < data[1].length; i++) {
              var ul = document.getElementById("list");
              var li = document.createElement("li");         
              var h = document.createElement("h3");
              var p = document.createElement("p");
              var a = document.createElement("a");
              a.setAttribute("id", "readMore");

              //console.log(data);
  
              h.appendChild(document.createTextNode(data[1][i]));
              p.appendChild(document.createTextNode(data[2][i]));
              a.textContent = "Read more...";
              a.setAttribute('href', data[3][i]);
              a.setAttribute('target', "_blank");

              li.appendChild(h);
              li.appendChild(p);
              li.appendChild(a);
              ul.appendChild(li);
            }
          }
          else {
            var ul = document.getElementById("list");
            var li = document.createElement("li");         
            var h = document.createElement("h3");
 
            h.textContent = "No match. Try something else!";
            li.appendChild(h);
            ul.appendChild(li);
          }
        }
      }); 
    }
  });
});




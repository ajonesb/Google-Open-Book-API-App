

function bookSearch(){

    var search = document.getElementById("search").value;
    document.getElementById("results").innerHTML = "";


    $.ajax({

      url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
      dataType: "json",
      type: 'GET',

      success: function(data) {
        console.log(data);

        for (var i = 0; i < data.items.length; i++){
          var jdata = data.items[i].volumeInfo;

          // Create the book elements
          var newColSm4 = document.createElement('div');
          var newRow    = document.createElement('div');
          var newImg    = document.createElement('img');
          var newH2     = document.createElement('h2');
          var newH3     = document.createElement('h3');
          var newH4     = document.createElement('h4');
          var newAnchor = document.createElement('a');

          // add the classes to the book elements
          newRow.className = 'row';
          newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
          newAnchor.className = 'btn btn-primary';

          // add text to the tags
          newH2.innerText = jdata.title;
          newAnchor.innerText = 'View Book Info!';

          // add attributes
          newAnchor.href = jdata.infoLink;
          newAnchor.setAttribute('target', '_blank');

          // create image if one exists
          if(jdata.imageLinks) {
            newImg.src = jdata.imageLinks.thumbnail;
          } else {
            newImg.src = 'img/nobook.jpg';
          };

          // create publish date if one exists
          if(jdata.publishedDate) {
            newH4.innerText = jdata.publishedDate;
          } else {
            newH4.innerText = 'no publish date found';
          };

          // create author if one exists
          if(jdata.authors) {
            newH3.innerText = jdata.authors[0];
          } else {
            newH3.innerText = 'no author found';
          };

          // add tags to document
          newColSm4.appendChild(newImg);
          newColSm4.appendChild(newH2);
          newColSm4.appendChild(newH3);
          newColSm4.appendChild(newH4);
          newColSm4.appendChild(newAnchor);

            // add results to the screen
          var results = document.getElementById("results");
          results.appendChild(newColSm4);
        };
      }
    });
  };

  window.onload=function() {

  // add event to element with id="button"
  var searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', bookSearch, false);


  }


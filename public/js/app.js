

$('document').ready(function(){
  execute();
});
// var bookSearch;


function execute() {

$("body").append("<div id='bookContainer'><div id='books-list'></div></div");
$("#new-book").submit(function(event) {
  event.preventDefault();
var  bookSearch =  $('#book-name').val();
    for(var i=0; i < bookSearch.length; i++) {
      bookSearch = bookSearch.replace(" ", "+");
    }

console.log(bookSearch);

  // SHOULD WORK GETTING + IN BEWTWEEN search string
  // function addBookSearch() {
  
  //   bookSearch.forEach(function(element, index) {
  //   bookSearch += element;
  //   if (index < bookSearch.length -1)
  //       bookSearch += '+';
  //   });
  // }
 


  console.log(bookSearch);
  var userId = $('#userId').text();

  var searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + bookSearch;
  console.log(searchUrl);
  $.ajax({
      method: "get",
      url: searchUrl,
      datatype: 'json',
      success: function(data){
        console.log(data.items[0].volumeInfo);
        //console.log(data.dataset_data.data[0]);
        var bookTitle1 = data.items[0].volumeInfo.title;
        var bookTitle2 = data.items[1].volumeInfo.title;
        var bookTitle3 = data.items[2].volumeInfo.title;
        
        var bookAuthor1 = data.items[0].volumeInfo.authors;
        var bookAuthor2 = data.items[1].volumeInfo.authors;
        var bookAuthor3 = data.items[2].volumeInfo.authors;
        
        var bookDescription1 = data.items[0].volumeInfo.description;
        var bookDescription2 = data.items[1].volumeInfo.description;
        var bookDescription3 = data.items[2].volumeInfo.description;

        var bookImage1 = data.items[0].volumeInfo.imageLinks.smallThumbnail;
        var bookImage2 = data.items[1].volumeInfo.imageLinks.smallThumbnail;
        var bookImage3 = data.items[2].volumeInfo.imageLinks.smallThumbnail;



        
        
        
       
       bookTitle1 =  JSON.stringify(bookTitle1);
       bookTitle2 =  JSON.stringify(bookTitle2);
       bookTitle3 =  JSON.stringify(bookTitle3);
       
       bookAuthor1 =  JSON.stringify(bookAuthor1);
       bookAuthor2 =  JSON.stringify(bookAuthor2);
       bookAuthor3 =  JSON.stringify(bookAuthor3);



        const bookData = 

                          "<div id='bookData'>" + 
                          "<div class='book1'>" +
                          
                          "<img src=" + bookImage1 +
                          "<br>" + "<br>" + "<br>" +
                          "<h4>" + "Title 1:" + "</h4>" +
                            "<p>" + bookTitle1  + "</p>" +
                          "<h4>" + "Author 1:" + "</h4>" +
                            "<p>" + bookAuthor1  + "</p>" +
                          "<h4>" + "Description 1" + "</h4>" +
                                     bookDescription1 + 
                          "<br>" + "<br>" +
                           
                          "</div>" +
                          "<br>" + 
                          "<hr>" +
                          "<br>" +

                            

                            
                            "<div class='book2'>" +
                            "<img src=" + bookImage2 +
                          "<br>" + "<br>" + "<br>" + 
                            "<h4>" + "Title 2:" + "</h4>" +
                              "<p>" + bookTitle2  + "</p>" +
                            "<h4>" + "Author 2:" + "</h4>" +
                              "<p>" + bookAuthor2  + "</p>" +
                            "<h4>" + "Description 2" + "</h4>" +
                                     bookDescription2 +
                            "<br>" + "<br>" +
                          
                          "</div>" +
                          "<br>" + 
                          "<hr>" +
                          "<br>" +
                           
                            "<div class='book3'>" +
                            "<img src=" + bookImage3 +
                          "<br>" + "<br>" + "<br>" + 
                            "<h4>" + "Title 3:" + "</h4>" +
                              "<p>" + bookTitle3  + "</p>" +
                            "<h4>" + "Author 3:" + "</h4>" +
                              "<p>" + bookAuthor3 + "</p>" +
                            "<h4>" + "Description 3" + "</h4>" +
                                     bookDescription3 +
                            "<br>" + "<br>" +
                          
                          "</div>" +
                          "<br>" + "<br>" +
                            "</div>" +
                          "</div>" +
                          "<div class='reSearch'></div>";
        $('#books-list').append(bookData);

          // for(i=0; i < data.dataset_data.column_names.length; i++){
          //   var bookInfo = 
          //     "<ul class = 'list-group'>" +
          //       "<li class='list-group-item'>" +
          //         "<h4 class='bookAttribute'>" + data.dataset_data.column_names[i] + "</h4>" +
          //           "</li>" + "</ul>";

          //   $("#books-list").append(bookInfo);
          // }
          var button1 = document.createElement('button');
          button1.setAttribute('class', 'btn btn-primary add-book');
          button1.innerText="SAVE";
          $('.book1').append(button1);

          var button2 = document.createElement('button');
          button2.setAttribute('class', 'btn btn-primary add-book');
          button2.innerText="SAVE";
          $('.book2').append(button2);

          var button3 = document.createElement('button');
          button3.setAttribute('class', 'btn btn-primary add-book');
          button3.innerText="SAVE";
          $('.book3').append(button3);

          var reSearch = document.createElement('button');
          reSearch.setAttribute('class', 'btn btn-primary');
          reSearch.setAttribute('id', 'searchAgain');
          reSearch.innerText="SEARCH AGAIN";
          $('.reSearch').append(reSearch);

        $('#searchAgain').click(function(event) {
          console.log("#books-list");
          $('#books-list').remove("#books-list");
          
    
  });

        $("#new-book").submit(function(event) {
          console.log(bookData);
          $('#bookContainer').append(bookData);

        });

      }

  });

   
 });





   
}


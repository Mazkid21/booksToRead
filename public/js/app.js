// Front end javascript file
// Loads all function when page is loaded 
$('document').ready(function(){
  execute();
});
// var bookSearch;

// fuinction that is called on ready
function execute() {
// Search book button function
$("body").append("<div id='bookContainer'><div id='books-list'></div></div");
$("#searchBook").click(function(event) {
  event.preventDefault();
var  bookSearch =  $('#book-name').val();
    // runs through the string that user enetes ans addeds + between spaces so it can be 
    // used with API request 
    for(var i=0; i < bookSearch.length; i++) {
      bookSearch = bookSearch.replace(" ", "+");
      this.setAttribute("disabled", "disabled");
    }

console.log(bookSearch);
 


  console.log(bookSearch);
  var userId = $('#userId').text();
// Ajax request to get all the data that user searched for and append to page for user to see 
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



        let bookData = 

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

  
          // adds save buttons to each search result
          var button1 = document.createElement('button');
          button1.setAttribute('class', 'btn btn-primary add-book');
          button1.setAttribute('id', 'save1');
          button1.innerText="SAVE";
          $('.book1').append(button1);

          var button2 = document.createElement('button');
          button2.setAttribute('class', 'btn btn-primary add-book');
          button2.setAttribute('id', 'save2');
          button2.innerText="SAVE";
          $('.book2').append(button2);

          var button3 = document.createElement('button');
          button3.setAttribute('class', 'btn btn-primary add-book');
          button3.setAttribute('id', 'save3');
          button3.innerText="SAVE";
          $('.book3').append(button3);

          var reSearch = document.createElement('button');
          reSearch.setAttribute('class', 'btn btn-primary');
          reSearch.setAttribute('id', 'searchAgain');
          reSearch.innerText="SEARCH AGAIN";
          $('.reSearch').append(reSearch);

          console.log($('#save1'));
          // sends the data to back end for save button that is clicked
        $('#save1').on('click', function(event){
            console.log("save1 working");
            console.log(bookImage1);
            var id = $('#userId').text();
            console.log(id);
            console.log(bookAuthor1);
            console.log(bookTitle1);
            var saveBook = "secret/" + id + "/books";

            $.ajax({
              method:"post",
              url: saveBook,
              data: {authors: bookAuthor1,
                     title: bookTitle1,
                     description: bookDescription1,
                     smallThumbnail: bookImage1
                      },
              success: function(){
                console.log("yay we are addinggg");
              

                
              }
            });

  });

        // sends the data to back end for save button that is clicked
        $('#save2').on('click', function(event){
            console.log("save2 working");
            
            var id = $('#userId').text();
            console.log(id);
            console.log(bookAuthor2);
            console.log(bookTitle2);
            var saveBook = "secret/" + id + "/books";

            $.ajax({
              method:"post",
              url: saveBook,
              data: {authors: bookAuthor2,
                     title: bookTitle2,
                     description: bookDescription2,
                     smallThumbnail: bookImage2
                      },
              success: function(){
                console.log("yay we are addinggg 2");

                
              }
            });

  });
        // sends the data to back end for save button that is clicked
        $('#save3').on('click', function(event){
            console.log("save3 working");
            
            var id = $('#userId').text();
            console.log(id);
            console.log(bookAuthor3);
            console.log(bookTitle3);
            var saveBook = "secret/" + id + "/books";

            $.ajax({
              method:"post",
              url: saveBook,
              data: {authors: bookAuthor3,
                     title: bookTitle3,
                     description: bookDescription3,
                     smallThumbnail: bookImage3
                      },
              success: function(){
                console.log("yay we are addinggg 3");

                
              }
            });

  });
        // Search again button so user can use the same form to search for more books! 
        $('#searchAgain').click(function(event) {
          console.log("#books-list");
          $('#books-list').remove("#books-list");
           location.reload();
          
    
  });

        $("#searchBook").click(function(event) {
          

       bookData = bookData;

       console.log(bookData);


          $('#bookContainer').append(bookData);


        });

      }

  });






   
 });






   
}


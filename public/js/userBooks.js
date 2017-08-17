$('document').ready(function(){
	execute();
});

function execute(){
$('#delete1').click(function(){
  location.reload();
  console.log("button working!");
  var id = $('#userId').text();
  var deleteBook = 'userBooks/' + id + "/books";

  $.ajax({
    type: 'DELETE',
    url: deleteBook,
    success: function() {
      location.reload();

      
    }
  });
 
 
});

// $('#delete2').click(function(){
//   location.reload();
//   console.log("button working!");
//   var id = $('#userId').text();
//   var deleteBook = 'userBooks/' + id + "/books";

//   $.ajax({
//     type: 'DELETE',
//     url: deleteBook,
//     sucess: function onDeleteSuccess() {
//       userBooks.splice(i,1);

      
//     }
//   });
 
 
// });




// $('#delete2').click(function(){
//   console.log("button working!");
//   $(".user-books2").remove();
 
// });

// $('#delete3').click(function(){
//   console.log("button working!");
//   $(".user-books3").remove();
 
// });

// $('#delete4').click(function(){
//   console.log("button working!");
//   $(".user-books4").remove();
 
// });

// $('#delete5').click(function(){
//   console.log("button working!");
//   $(".user-books5").remove();
 
// });
}


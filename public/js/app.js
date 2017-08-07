$('document').ready(function(){
  execute();
});

function execute() {

$("body").append("<ul></ul>");


$("#new-book").submit(function(event) {
  event.preventDefault();
  
  var newBookToAdd =  { 
      name: $('#book-name').val(),
      // note: $('#book-author').val(),

  };


  console.log(newBookToAdd);
  
  $.ajax ( {
    url: "/books", 
    dataType: 'json', 
    method: 'POST',
    data: JSON.stringify(newBookToAdd),
    success: function(element) {
      
      
        $("ul").append("<li>" + element.name + "</li>");
        alert ("your form has been submitted!!!!!");
      }
    });
      
    
    
  });
  



   
}


array = ['Tomas','Jitka','Mata','Filda',];



  


  array.forEach(element => {
    $('ul').append('<li>' + element + '</li>');
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $('body').append(
    '<h2>' + additionalBlock.title + '</h2>'
  );
  $('body').append(
    '<p>' + additionalBlock.text + '</p>'
  );
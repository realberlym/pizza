// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$( "#escolha" ).click(function() {
  	var escolha = $("#exampleFormControlSelect2").val();

    if(escolha == 1){
      $("#2").fadeOut();
      modal.style.display = "none";
      $("#1").fadeIn();
    }

  	if(escolha == 2){
      $("#1").fadeOut();
      modal.style.display = "none";
      $("#2").fadeIn();
  		
  	}

});

$("#pizza-inteira").click(function(){
    
    alert('Abriu');

});
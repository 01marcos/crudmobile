// This is a JavaScript file


$(document).on('click','#cadastro', function(){
  var parametros = {
    "nome": $("#nome").val(),
    "email": $("#email").val()
  }

  $.ajax({
    type:"post",
    url:"https://crud2019-marcosvini001.c9users.io/cadastro.php",
    data:parametros,
    sucess:function(data){
      $("#nome").val(""); 
      $("#email").val("");
      navigator.notification.alert(data);
      },
      error:function(data){
        navigator.notification.alert(data);
      }
  });
});
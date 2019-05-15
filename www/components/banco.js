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
    success:function(data){
      $("#nome").val(""), 
      $("#email").val(""),
      navigator.notification.alert(data);
      },
      error:function(data){
        navigator.notification.alert(data);
      }
  });
});

//$(document).on("click","#listar",function(){
  //($location).attr("href","listar.html");
//});


function preencher(){
    $.ajax({
      type:"post",
      url:"https://crud2019-marcosvini001.c9users.io/listar.php",
      dataType:"json",
      success:function(data){
        var item = "";
        $.each(data.pessoas, function(i, dados){
          item += "<option value='"+ dados.codigo +"'>"+dados.nome+"</option>";
      });
      $("lstPessoas").html(item);
      },
      error:function(data){
        navigator.notification.alert(data);    
        }
    });
}







}
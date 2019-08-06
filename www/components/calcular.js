$( function(){

var v1, v2, op;

  $("input[name=btn]").click( function(){
    $("#result").val($("#result").val()+$(this).val());
  });
  $("input[name=ce]").click(function(){
    $("#result").val("");
  });
  $("input[name=soma]").click(function(){
 if($("#result").val()!=''){
   v1=parseFloat($("#result").val());
   $("#result").val('');
   op="soma";
   $("#op").text($(this).val());
 }else{
   alert("Nehum numero inserido");
 }
  });
  $("input[name=igual").click(function(){
    if($("#result").val()!=''){
   v2=parseFloat($("#result").val());
   if(op=="soma"){
     $("#result").val(v1+v2);
   }
 }else{
   alert("Nehum numero inserido para efetutuar o calculo");
 }
  });
});
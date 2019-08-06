$( function(){

var v1, v2, op;

  $("input[name=btn]").click( function(){
    $("#result").val($("#result").val()+$(this).val());
  });
  $("input[name=ce]").click(function(){
    $("#result").val("");
    $("#op").text("");
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
  $("input[name=sub]").click(function(){
 if($("#result").val()!=''){
   v1=parseFloat($("#result").val());
   $("#result").val('');
   op="sub";
   $("#op").text($(this).val());
 }else{
   alert("Nehum numero inserido");
 }
  });
    $("input[name=mult]").click(function(){
 if($("#result").val()!=''){
   v1=parseFloat($("#result").val());
   $("#result").val('');
   op="mult";
   $("#op").text($(this).val());
 }else{
   alert("Nehum numero inserido");
 }
  });
   $("input[name=div]").click(function(){
 if($("#result").val()!=''){
   v1=parseFloat($("#result").val());
   $("#result").val('');
   op="div";
   $("#op").text($(this).val());
 }else{
   alert("Nehum numero inserido");
 }
  });
  $("input[name=por]").click(function(){
 if($("#result").val()!=''){
   v1=parseFloat($("#result").val());
   $("#result").val('');
   op="por";
   $("#op").text($(this).val());
 }else{
   alert("Nehum numero inserido");
 }
  });
  $("input[name=pot]").click(function(){
 if($("#result").val()!=''){
   v1=parseFloat($("#result").val());
   $("#result").val('');
   op="pot";
   $("#op").text($(this).val());
 }else{
   alert("Nehum numero inserido");
 }
  });
  $("input[name=raiz]").click(function(){
 if($("#result").val()!=''){
   v1=parseFloat($("#result").val());
   $("#result").val('');
   op="raiz";
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
   else if(op=="sub"){
     $("#result").val(v1-v2);
   }
   else if(op=="mult"){
     $("#result").val(v1*v2);
   }
   else if(op=="div"){
     $("#result").val(v1/v2);
   }
   else if(op=="por"){
     $("#result").val(v1*v2/100);
   }
  
 }else{
   alert("Nehum numero inserido para efetutuar o calculo");
 }
  });
});

$( function(){
  $("input[name=btn]").click( function(){
    $("#result").val($("#result").val()+$(this).val());
  });
})
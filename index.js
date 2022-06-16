import "./import-jquery";
let  count =0;
$('#incrementByOne').on('click',function(e) {
    //the element has been clicked... do stuff here
    count+=1;
    if(count ==1000){
        alert("Hurray! You have reached the target!");
        return;
    }
    $('#incrementText').text(count.toString());
  });
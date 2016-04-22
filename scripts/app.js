var CurrentMsg = 'hello ';                    
function update(msg) {                           
var pad_str="";                           
n = msg.length;                           
if(n<72) {                                   
pad = (73-n)/2;                                   
for(var i=0; i<pad; i++) {                                           
pad_str+=" ";                        
   }                        
}                          
CurrentMsg = pad_str + msg;                           
document.messages.field.value = CurrentMsg;
clearTimeout(timer);                           
timer = setTimeout("idleMsg()",4000);        
}                           
function MakeArray(n) {                           
this.length=n;                           
for(var i = 1; i<= n; i++) {                                   
this[i] = "";                
}                           
return(this);        
}               
var index = 1;           
var notice_num = 8;                   
var notices = new MakeArray(notice_num);        
notices[1] = "Welcome to MY Website";        
notices[2] = "This my JavaScript Assignment";
notices[3] = "You can Click Here to see my projects";        
notices[4] = "PHP, Javascript ";
                  
var timer = setTimeout('idleMsg()',1000);                   
function nochange() {                           
document.messages.field.value = CurrentMsg;        
}                   
function idleMsg() {                           
update(notices[index++]);                           
if(index>notice_num) { 
index=1; 
   }  
}

$(function () {
  $('.image-slider img:gt(0)').hide();
  setInterval(function () {
        $('.image-slider :first-child').fadeOut(500)
            .next('img').fadeIn()
            .end().appendTo('.image-slider');
      },
      3000);
});
// End -->     
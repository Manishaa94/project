function appendTodisplay(val) {
    const display=document.getElementById("inputbox");
    display.value= display.value + val;
    
 }
function cleardisplay(){
    const display=document.getElementById("inputbox");
    display.value="";}

function calculateresult(){
    const display=document.getElementById("inputbox");
    display.value=eval(display.value);

} 
function deleteLastChar() {
    const display = document.getElementById("inputbox");
    display.value.slice(0, -1);
}  
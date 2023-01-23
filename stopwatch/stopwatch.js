var hr = 0;
var min = 0;
var sec =0;
var ms = 0;

var timer = false;
function o(){
    timer = true;
    stopwatch();

}
function op(){
    timer = false;

}

function og(){
    ms = 0;
    sec = 0;
    min = 0;
    hr = 0;
    timer = false;
    document.getElementById('ms').innerHTML = ms
    document.getElementById('sec').innerHTML = sec
    document.getElementById('min').innerHTML = min
    document.getElementById('min').innerHTML = hr

}
function stopwatch(){
    if(timer == true){
        ms = ms + 1;
        
        if(ms == 10){
            sec = sec + 1; 
            ms = 0;
            
        }
        else if(sec == 60){
            min = min +1;
            sec = 0;
        }
        else if(min == 60){
            mhr = hr +1;
            min = 0;
        }
        

        document.getElementById('ms').innerHTML = ms
        document.getElementById('sec').innerHTML = sec
        document.getElementById('min').innerHTML = min
        setTimeout("stopwatch()",100)
    }
}
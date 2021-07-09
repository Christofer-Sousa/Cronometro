var hh = 0;
var mm = 0;
var ss = 0;

var cron;


function start(){
    document.getElementById("btnStart").setAttribute("disabled", "disabled");
    document.getElementById("btnStart").innerHTML = "Iniciar"
    cron =  setInterval(() => {
        timer();
    }, 1000);
}

function pausar(){
    if(cron !== "00:00:00"){
        document.getElementById("btnStart").innerHTML = "Retomar"
        document.getElementById("btnStart").removeAttribute("disabled", "disabled")
    }
    
    clearInterval(cron);
    
}

function zerar(){   
    clearInterval(cron);

    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById("cron").innerHTML = "00:00:00";
    document.getElementById("btnStart").removeAttribute("disabled", "disabled")
    document.getElementById("btnStart").innerHTML = "Iniciar"
}

function timer(){
    ss++;
    if(ss == 60){
        ss = 0;
        mm++;
    }

    if(mm == 60){
        mm = 0;
        hh++;
    }

    let format = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);

    document.getElementById("cron").innerHTML = format;

}
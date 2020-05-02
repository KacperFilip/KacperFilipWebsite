let x = 1;

function menu(){
    if(x%2){
        document.getElementById('navbar').style.width = "60%";
        document.getElementById('navbar').style.borderBottomLeftRadius = "0";
        document.getElementById('navbar').style.borderBottomRightRadius = "0";
        document.getElementById('menutxt').style.top = "-50%";
        document.getElementById('navlist').style.top = "0%";
        document.getElementById('hidemenu').style.top = "100%";
        x++;
    }else{
        document.getElementById('navbar').style.width = "15%";
        document.getElementById('navbar').style.borderBottomLeftRadius = "35%";
        document.getElementById('navbar').style.borderBottomRightRadius = "35%";
        document.getElementById('menutxt').style.top = "50%";
        document.getElementById('navlist').style.top = "-100%";
        document.getElementById('hidemenu').style.top = "-100%";
        x++;
    }
}
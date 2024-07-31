function updateTime()
{
    let now = new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let ampm;
    if(hours >= 12){
        ampm="PM";
        hours = hours%12;
        if(!hours){
            hours=12;
        }
    }
    else{
        ampm="AM";
    }
    hours=String(hours).padStart(2,'0');
    minutes=String(minutes).padStart(2,'0');
    seconds=String(seconds).padStart(2,'0');
    let time= `${hours}:${minutes}:${seconds} ${ampm}`;
    document.querySelector('.clock').innerHTML=time;
    setTimeout(updateTime,1000);

}

updateTime();
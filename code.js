// we need a timer to count down from 50 to zero by 5
//he said in class any way would be acceptable for full points so we will be trying a while loop.

var currTime = 50;
var doomsDay = 5000;
var i = 5;



function blastOffTimer(){
    console.log("blastOffTimer() started");
 
    var currTime = 50;
    var doomsDay = 5000;
    var i = 5;
    
    document.getElementById("blastOffText").innerHTML = currTime;
    console.log(currTime);
    currTime = currTime-i;
    
setTimeout(function(){
console.log(currTime);
document.getElementById("blastOffText").innerHTML = currTime;
currTime = currTime-i;
}, doomsDay);
doomsDay = doomsDay + 5000;


setTimeout(function(){
    console.log(currTime);
    document.getElementById("blastOffText").innerHTML = currTime;
    currTime = currTime-i;
    }, doomsDay);
    doomsDay = doomsDay + 5000;

    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime-i;
        }, doomsDay);
        doomsDay = doomsDay + 5000;

        setTimeout(function(){
            console.log(currTime);
            document.getElementById("blastOffText").innerHTML = currTime;
            currTime = currTime-i;
            }, doomsDay);
            doomsDay = doomsDay + 5000;

            setTimeout(function(){
                console.log(currTime);
                document.getElementById("blastOffText").innerHTML = currTime;
                currTime = currTime-i;
                }, doomsDay);
                doomsDay = doomsDay + 5000;

                setTimeout(function(){
                    console.log(currTime);
                    document.getElementById("blastOffText").innerHTML = currTime;
                    currTime = currTime-i;
                    }, doomsDay);
                    doomsDay = doomsDay + 5000;

                    setTimeout(function(){
                        console.log(currTime);
                        document.getElementById("blastOffText").innerHTML = currTime;
                        currTime = currTime-i;
                        }, doomsDay);
                        doomsDay = doomsDay + 5000;

                        setTimeout(function(){
                            console.log(currTime);
                            document.getElementById("blastOffText").innerHTML = currTime;
                            currTime = currTime-i;
                            }, doomsDay);
                            doomsDay = doomsDay + 5000;

                            setTimeout(function(){
                                console.log(currTime);
                                document.getElementById("blastOffText").innerHTML = currTime;
                                currTime = currTime-i;
                                }, doomsDay);
                                doomsDay = doomsDay + 5000;

                                setTimeout(function(){
                                    console.log(currTime);
                                    document.getElementById("blastOffText").innerHTML = "Blastoff!!!";
                                    currTime = currTime-i;
                                    }, doomsDay);
                                    doomsDay = doomsDay + 5000;

                        
    
}



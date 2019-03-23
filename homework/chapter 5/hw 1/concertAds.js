/*var concertads = new Array(5);
    concertads[0] = new Image();
    concertads[1] = new Image();
    concertads[2] = new Image();
    concertads[3] = new Image();
    concertads[4] = new Image();

    concertads[0].src = "concertads/concert1.gif";
    concertads[1].src = "concertads/concert2.gif";
    concertads[2].src = "concertads/concert3.gif";
    concertads[3].src = "concertads/concert4.gif";
    concertads[4].src = "concertads/concert5.gif";
var completeAds;
var currImgIndex = 0;
var maxImgIndex = concertads.length-1; 
function concertAd() {
    if (completeAds) {
        completeAds.src = concertads[0].src;
        ++currImgIndex;
    if (currImgIndex > maxImgIndex) {
        currImgIndex = 0;
    }
}
}
function initImgCycle(adsID) {
    completeAds = document.getElementByID(adsID)
    if (completeAds) {
        setInterval("cycle()", 5000);
        }
    }*/

imgCounter=0;
    function cycle(){
            if(imgCounter<5){
            imgCounter++;
        document.getElementById("imgX").src="concertads/concert" + imgCounter + ".gif";    
            setTimeout("cycle();", 5000);
    }
}
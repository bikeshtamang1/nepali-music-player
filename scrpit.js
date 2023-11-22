var menuicon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");


menuicon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

let rockBtn=document.getElementById("rock-btn");
let happyBtn=document.getElementById("happy-btn");
let sadBtn=document.getElementById("sad-btn");
let loveBtn=document.getElementById("love-btn");
let hiphopBtn=document.getElementById("hip-hop-btn");
let tamangBtn=document.getElementById("tamang-btn");
let lokBtn=document.getElementById("lok-btn");
let newariBtn=document.getElementById("newari-btn");
let folkBtn=document.getElementById("folk-btn");
let instrumentalBtn=document.getElementById("instrumental-btn");
let tharuBtn=document.getElementById("tharu-btn");

let allSongs=document.getElementsByClassName("vid-list")
let rockSongs=document.getElementsByClassName("rock")
let sadSongs=document.getElementsByClassName("sad")
let loveSongs=document.getElementsByClassName("love")
let happySongs=document.getElementsByClassName("happy")
let hiphopSongs=document.getElementsByClassName("hip-hop")
let tamangSongs=document.getElementsByClassName("tamang")
let lokSongs=document.getElementsByClassName("lok")
let newariSongs=document.getElementsByClassName("newari")
let folkSongs=document.getElementsByClassName("folk")
let instrumentalSongs=document.getElementsByClassName("instrumental")
let tharuSongs=document.getElementsByClassName("tharu")

function rockBtnOnClick(){
    for(i=0; i<allSongs.length; i++){
       allSongs[i].style.display="none"
    }
    for(i=0; i<rockSongs.length; i++){
       rockSongs[i].style.display="block"
    }
}
function sadBtnOnClick(){
    for(i=0; i<allSongs.length; i++){
       allSongs[i].style.display="none"
    }
    for(i=0; i<sadSongs.length; i++){
       sadSongs[i].style.display="block"
    }
}
function loveBtnOnClick(){
    for(i=0; i<allSongs.length; i++){
       allSongs[i].style.display="none"
    }
    for(i=0; i<loveSongs.length; i++){
       loveSongs[i].style.display="block"
    }
}
function happyBtnOnClick(){
    for(i=0; i<allSongs.length; i++){
       allSongs[i].style.display="none"
    }
    for(i=0; i<happySongs.length; i++){
       happySongs[i].style.display="block"
    }
}
function hiphopBtnOnClick(){
    for(i=0; i<allSongs.length; i++){
       allSongs[i].style.display="none"
    }
    for(i=0; i<hiphopSongs.length; i++){
       hiphopSongs[i].style.display="block"
    }
}
function tamangBtnOnClick(){
    for(i=0; i<allSongs.length; i++){
       allSongs[i].style.display="none"
    }
    for(i=0; i<tamangSongs.length; i++){
       tamangSongs[i].style.display="block"
    }
}
function lokBtnOnClick(){
    for(i=0; i<allSongs.length; i++){
       allSongs[i].style.display="none"
    }
    for(i=0; i<lokSongs.length; i++){
       lokSongs[i].style.display="block"
    }
}
function newariBtnOnClick(){
    for(i=0; i<allSongs.length; i++){
       allSongs[i].style.display="none"
    }
    for(i=0; i<newariSongs.length; i++){
       newariSongs[i].style.display="block"
    }
}
function folkBtnOnClick(){
    for(i=0; i<allSongs.length; i++){
       allSongs[i].style.display="none"
    }
    for(i=0; i<folkSongs.length; i++){
       folkSongs[i].style.display="block"
    }
}
function instrumentalBtnOnClick(){
    for(i=0; i<allSongs.length; i++){
       allSongs[i].style.display="none"
    }
    for(i=0; i<instrumentalSongs.length; i++){
       instrumentalSongs[i].style.display="block"
    }
}
function tharuBtnOnClick(){
    for(i=0; i<allSongs.length; i++){
       allSongs[i].style.display="none"
    }
    for(i=0; i<tharuSongs.length; i++){
       tharuSongs[i].style.display="block"
    }
}

rockBtn.addEventListener("click", rockBtnOnClick )
sadBtn.addEventListener("click", sadBtnOnClick )
loveBtn.addEventListener("click", loveBtnOnClick )
happyBtn.addEventListener("click", happyBtnOnClick )
hiphopBtn.addEventListener("click", hiphopBtnOnClick )
tamangBtn.addEventListener("click", tamangBtnOnClick )
lokBtn.addEventListener("click", lokBtnOnClick )
newariBtn.addEventListener("click", newariBtnOnClick )
folkBtn.addEventListener("click", folkBtnOnClick )
instrumentalBtn.addEventListener("click", instrumentalBtnOnClick )
tharuBtn.addEventListener("click", tharuBtnOnClick )



let profileIcon=document.getElementById("user-icon")
let profileCard=document.getElementById("profile-card")

 function showCard(){
   if(profileCard.style.display==="block"){
        profileCard.style.display="none"; }else
        {
                profileCard.style.display="block";
                }
 }
profileIcon.addEventListener("click", showCard)

window.onclick=function(event){
   if(event.target==profileCard){
      profileCard.style.display="none"
      console.log("btn");
   }
}




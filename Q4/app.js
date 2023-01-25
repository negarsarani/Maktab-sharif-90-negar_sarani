"use strict"

const divNotif= document.querySelector(".notif");
function shownNotification(item){
    const styleTop =item.top;
    const styleRight =item.right;
    divNotif.style.top = `${styleTop}px`;
    divNotif.style.right = `${styleRight}px`;
    divNotif.innerHTML = item.html
    divNotif.classList.add = item.className
    console.log(divNotif.classList)
    // console.log(styleTop)
}






// shownNotification({
//     top:10,
//     right:10,
//     html: "Hello",
//     className: "welcome"
// })

shownNotification({
    top:+prompt("top"),
    right:+prompt("right"),
    html: prompt("write sth"),
    className: prompt("welcome")
})
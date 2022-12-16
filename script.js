function horloge() {
    let hour = document.querySelector("#hours")
    let min = document.querySelector("#minutes")
    let sec = document.querySelector('#seconds')

    let newDate = new Date ()

    let nbHours = newDate.getHours()
    let nbMin = newDate.getMinutes()
    let nbSec = newDate.getSeconds()

    hour.style.transform = "rotate(" + ((nbHours * 30) - 90) + "deg)"
    min.style.transform = "rotate(" + ((nbMin * 6) - 90) + "deg)"
    sec.style.transform = "rotate(" + ((nbSec * 6) - 90) + "deg)"

}

window.setInterval(horloge, 1000)
let myImg = document.querySelector("img")
myImg.onclick = () => {
    let mySrc = myImg.getAttribute("src")
    if (mySrc === "images/firefox-icon.jpeg") {
        myImg.setAttribute("src", "images/firefox.jpeg")
    } else {
        myImg.setAttribute("src", "images/firefox-icon.jpeg")
    }
}


let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")
myButton.onclick = function () {
    setUserName()
}

function setUserName() {
    let myName = prompt("请输入你的名字：")
    if (!myName|| myName === null) {
        setUserName()
    } else {
        localStorage.setItem("name", myName)
        myHeading.innerHTML = "Mozilla 酷毙了：" + myName
    }

}

if (localStorage.getItem("name")) {
    setUserName()
} else {
    let storeName = localStorage.getItem("name")
    myHeading.textContent = "Mozilla 酷毙了：" + myName
}

document.querySelector("h1").addEventListener("click", function () {
    alert("别戳我，我怕疼")
})
document.querySelector("h2").addEventListener("click", () => {
    alert("别戳我，我怕疼")
})




const main = document.getElementById("mainDiv")
let natureImgs = document.querySelectorAll(".nature-img")
let natureSection = document.getElementById("nature")

let portraitImgs = document.querySelectorAll(".portrait-img")
let portraitSection = document.getElementById("people")

let otherImgs = document.querySelectorAll(".other-img")
let otherSection = document.getElementById("other")

function changeBg(){
    let images=[
        'url("img/IMG_2581_v2.jpg")',
        'url("img/IMG_0142.jpg")',
        'url("img/IMG_9834.jpg")',
        'url("img/IMG_7921.jpg")'
        
    ]

    let bg = images[Math.floor(Math.random() * images.length)]

    main.style.backgroundImage = bg

    
}

//setInterval(changeBg,3000)



function displayBigImgNature(){
    for(let i=0; i<natureImgs.length; i++){
        let smImg=natureImgs[i]
        smImg.addEventListener("click",function clickEvent(){
            console.log("click")
            console.log(smImg.src)
         let bigImgContainer = document.createElement("div")
         let bigImg = document.createElement("img")
         natureSection.appendChild(bigImgContainer)
         bigImgContainer.appendChild(bigImg)
         bigImg.src=smImg.src

         smImg.classList.remove("img-container")
         bigImgContainer.className="bigImg"
         bigImgContainer.style="display:block"
         
         let closeBtn = document.createElement("span")
         closeBtn.className = "close"
         closeBtn.innerText = "X"
         bigImgContainer.appendChild(closeBtn)
         closeBtn.onclick =()=>{
            bigImgContainer.style.display="none"
         }
        })
    }
  
}

function displayBigImgPortrait(){
    for(let i=0; i<portraitImgs.length; i++){
        let smImg=portraitImgs[i]
        smImg.addEventListener("click",function clickEvent(){
            console.log("click")
            console.log(smImg.src)
         let bigImgContainer = document.createElement("div")
         let bigImg = document.createElement("img")
         portraitSection.appendChild(bigImgContainer)
         bigImgContainer.appendChild(bigImg)
         bigImg.src=smImg.src

         smImg.classList.remove("img-container")
         bigImgContainer.className="bigImg"
         bigImgContainer.style="display:block"
         
         let closeBtn = document.createElement("span")
         closeBtn.className = "close"
         closeBtn.innerText = "X"
         bigImgContainer.appendChild(closeBtn)
         closeBtn.onclick =()=>{
            bigImgContainer.style.display="none"
         }
        })
    }
  
}

function displayBigImgOther(){
    for(let i=0; i<otherImgs.length; i++){
        let smImg=otherImgs[i]
        smImg.addEventListener("click",function clickEvent(){
            console.log("click")
            console.log(smImg.src)
         let bigImgContainer = document.createElement("div")
         let bigImg = document.createElement("img")
         otherSection.appendChild(bigImgContainer)
         bigImgContainer.appendChild(bigImg)
         bigImg.src=smImg.src

         smImg.classList.remove("img-container")
         bigImgContainer.className="bigImg"
         bigImgContainer.style="display:block"
         
         let closeBtn = document.createElement("span")
         closeBtn.className = "close"
         closeBtn.innerText = "X"
         bigImgContainer.appendChild(closeBtn)
         closeBtn.onclick =()=>{
            bigImgContainer.style.display="none"
         }
        })
    }
  
}

displayBigImgNature()
displayBigImgPortrait()
displayBigImgOther()

/*prevent right click to images*/ 
document.addEventListener("contextmenu", function(e){
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);
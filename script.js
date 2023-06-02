console.log("hello")

let hello = document.getElementById("hello")
hello.addEventListener("click",()=>{
    hello.innerText = "Hello World"
})

const replace =()=>{
    let hello = document.getElementById("replace")
    hello.innerText = "Welcome to Elevation academy"

}

let quetion = document.getElementById("Q")

quetion.addEventListener("click",()=>{
    quetion.style.color = "red"
})


var toggle = false;
function change(){
    let Q7 = document.querySelector(".Q7")
      toggle = !toggle
    console.log(Q7)
    if (toggle) {
        Q7.style.flexDirection = "column"  
    }else{
        Q7.style.flexDirection = "row"
    }
 
}

let clock = document.querySelector('.Time')
let h2 = document.querySelectorAll('h2')

function time(){
    let time = new Date;
    let hours= time.getHours()
    let min = time.getMinutes()
    let secs = time.getSeconds()

    let timezone =`Hours ${hours} : Minutes ${min} : Seconds ${secs}`
    // console.log(hours, min, secs)
    h2[0].innerText= timezone
}

setInterval(() => {
    time()
},1000)
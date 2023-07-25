document.getElementById("I1").addEventListener("click", () => {
    var para = document.getElementById("info1");
    if (para.classList.contains("info")) {
        para.classList.remove("info");
        para.classList.add("info_f");
    }
});
document.getElementById("info1").addEventListener("click", () => {
    var para = document.getElementById("info1");
    if (para.classList.contains("info_f")) {
        para.classList.remove("info_f");
        para.classList.add("info");
    }
});


document.getElementById("N").addEventListener("click", () => {
    var para = document.getElementById("info2");
    if (para.classList.contains("info")) {
        para.classList.remove("info");
        para.classList.add("info_f");
    }
});

document.getElementById("info2").addEventListener("click", () => {
    var para = document.getElementById("info2");
    if (para.classList.contains("info_f")) {
        para.classList.remove("info_f");
        para.classList.add("info");
    }
});


document.getElementById("D").addEventListener("click", () => {
    var para = document.getElementById("info3");
    if (para.classList.contains("info")) {
        para.classList.remove("info");
        para.classList.add("info_f");
    }
});

document.getElementById("info3").addEventListener("click", () => {
    var para = document.getElementById("info3");
    if (para.classList.contains("info_f")) {
        para.classList.remove("info_f");
        para.classList.add("info");
    }
});


document.getElementById("I2").addEventListener("click", () => {
    var para = document.getElementById("info4");
    if (para.classList.contains("info")) {
        para.classList.remove("info");
        para.classList.add("info_f");
    }
});

document.getElementById("info4").addEventListener("click", () => {
    var para = document.getElementById("info4");
    if (para.classList.contains("info_f")) {
        para.classList.remove("info_f");
        para.classList.add("info");
    }
});


document.getElementById("A").addEventListener("click", () => {
    var para = document.getElementById("info5");
    if (para.classList.contains("info")) {
        para.classList.remove("info");
        para.classList.add("info_f");
    }
});

document.getElementById("info5").addEventListener("click", () => {
    var para = document.getElementById("info5");
    if (para.classList.contains("info_f")) {
        para.classList.remove("info_f");
        para.classList.add("info");
    }
});

//document.getElementById("box2").addEventListener("mouseover", () => {
setTimeout(function () {
    var para = document.getElementById("I1");
    para.classList.add("textCLASS");

}, 1000)
setTimeout(function () {
    var para = document.getElementById("N");
    para.classList.add("textCLASS");

}, 1250)
setTimeout(function () {
    var para = document.getElementById("D");
    para.classList.add("textCLASS3");

}, 1500)
setTimeout(function () {
    var para = document.getElementById("I2");
    para.classList.add("textCLASS2");

}, 1750)
setTimeout(function () {
    var para = document.getElementById("A");
    para.classList.add("textCLASS2");

}, 2000)
//});

setInterval(function () {
    var pro = document.getElementById("bullet");
    if (pro.classList.contains("prompt1")) {
        pro.classList.remove("prompt1");
        pro.classList.add("prompt2");}
    else
    {
        pro.classList.remove("prompt2");
        pro.classList.add("prompt1"); 
    }

}, 2000);

document.getElementById("btn1").addEventListener("click",()=>{
    
})

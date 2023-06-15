const spans = document.querySelectorAll("span")
const contents = document.querySelectorAll(".content")
const firstTop = contents[0].offsetTop
const secondTop = contents[1].offsetTop
const thirdTop = contents[2].offsetTop
const fourthTop = contents[3].offsetTop
const fifthTop = contents[4].offsetTop

spans[0].onclick = function(){
	window.scroll({top:firstTop, behavior: 'smooth'})
}
spans[1].onclick = function(){
	window.scroll({top:secondTop, behavior: 'smooth'})
}
spans[2].onclick = function(){
	window.scroll({top:thirdTop, behavior: 'smooth'})
}


/**-- index text animation */
const content = ".PORTFOLIO{}";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
    }
}
setInterval(typing, 230)

function rate(){
let stars = document.getElementsByTagName("path");
for (let i = 0; i < stars.length; i++) {
    const selectedStar = stars[i];
    selectedStar.addEventListener("click",function(event){
    let clickedStar =  i+1;
   for (let index = clickedStar; index < stars.length; index++) {
       const star = stars[index];
       star.classList.toggle("makeBlack");
       console.log(star);
   }
    })
}
}
rate();


  
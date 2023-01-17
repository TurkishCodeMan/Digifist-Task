const scrollSlider = document.querySelector(".next-wrapper");
const slider = document.querySelector(".item-slider");

slider.addEventListener(
  "wheel",
  function (e) {
    slider.focus();
    if (e.deltaY > 0) slider.scrollLeft += 250;
    else slider.scrollLeft -= 250;
    e.preventDefault();
  },
  { passive: false }
);


scrollSlider.addEventListener('click',(e)=>{
    slider.focus();
    slider.scrollLeft += 250;
    e.preventDefault();
})
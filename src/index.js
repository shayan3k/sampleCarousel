function carouselInit() {
  // Get Control Elements
  let carouselControlOne = document.getElementById("carousel-control-one");
  let carouselControlTwo = document.getElementById("carousel-control-two");
  let carouselControlThree = document.getElementById("carousel-control-three");

  //Get the relative Images

  let carouselImageOne = document.getElementById("carousel-image-one");
  let carouselImageTwo = document.getElementById("carousel-image-two");
  let carouselImageThree = document.getElementById("carousel-image-three");

  carouselControlOne.addEventListener("click", () => {
    resetOpacity();
    TweenMax.to("#carousel-image-one", 1, { delay: 1, css: { opacity: 1 } });
  });

  carouselControlTwo.addEventListener("click", () => {
    resetOpacity();
    TweenMax.to("#carousel-image-two", 1, { delay: 1, css: { opacity: 1 } });
  });

  carouselControlThree.addEventListener("click", () => {
    resetOpacity();
    TweenMax.to("#carousel-image-three", 1, { delay: 1, css: { opacity: 1 } });
  });

  function resetOpacity() {
    return TweenMax.to(
      ["#carousel-image-one", "#carousel-image-two", "#carousel-image-three"],
      1,
      { css: { opacity: 0 } }
    );
  }
}
// Calling the Function to Start
carouselInit();

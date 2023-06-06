(function () {
  const star = document.querySelector(".star");
  const activeStar = document.querySelector(".active-star");
  const rating = document.querySelector(".rating");

  let currentPr = 166.5;
  activeStar.style.width = currentPr + "px";

  document.addEventListener("click", (e) => {
    if (e.target.closest(".star")) {
      let pr = calcPr(e.clientX);
      activateStar(pr);
      currentPr = activeStar.clientWidth;
      calckMark(currentPr);
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (e.target.closest(".star")) {
      let pr = calcPr(e.clientX);
      activateStar(pr);
      calckMark(pr * 185);
    }
  });

  star.addEventListener("mouseleave", (e) => {
    activeStar.style.width = currentPr + "px";
    calckMark(currentPr);
  });

  function calcPr(x) {
    let coord = star.getBoundingClientRect();
    let xCord = x - coord.left;
    return xCord / coord.width;
  }

  function activateStar(pr) {
    activeStar.style.width = pr * 185 + "px";
  }

  function calckMark(val) {
    let res = (val / 185) * 5;
    res = parseFloat(res.toFixed(1));
    writerating(res);
  }

  function writerating(value) {
    rating.textContent = value + "/5";
  }

  calckMark(currentPr);
})();

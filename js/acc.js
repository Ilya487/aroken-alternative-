(function () {
  let buttons = document.querySelectorAll(".faq__btn");
  let boxes = document.querySelectorAll(".faq__acc-item");
  let prevBox;
  let content;

  buttons.forEach((item, i) => {
    item.setAttribute("data-number", i);
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest(".faq__acc-item")) {
      let currentBox = e.target.closest(".faq__acc-item");
      if (prevBox) {
        if (prevBox != currentBox) {
          prevBox.classList.remove("active");
          content.style.height = 0;
        }
      }

      let btn = currentBox.querySelector(".faq__btn");
      let number = parseInt(btn.dataset.number);
      boxes[number].classList.toggle("active");

      content = boxes[number].querySelector(".faq__text-box");

      if (boxes[number].classList.contains("active")) {
        content.style.height = content.scrollHeight + "px";
      } else {
        content.style.height = 0;
      }
      prevBox = currentBox;
    }
  });
})();
// (function () {
//   let buttons = document.querySelectorAll(".faq__btn");
//   let boxes = document.querySelectorAll(".faq__acc-item");

//   buttons.forEach((item, i) => {
//     item.setAttribute("data-number", i);
//   });

//   document.addEventListener("click", (e) => {
//     if (e.target.closest(".faq__btn")) {
//       let number;
//       if (e.target.nodeName === "SPAN") {
//         number = parseInt(e.target.parentNode.dataset.number);
//       } else {
//         number = parseInt(e.target.dataset.number);
//       }
//       boxes[number].classList.toggle("active");

//       let content = boxes[number].querySelector(".faq__text-box");

//       if (boxes[number].classList.contains("active")) {
//         content.style.height = content.scrollHeight + "px";
//       } else {
//         content.style.height = 0;
//       }
//     }
//   });
// })();

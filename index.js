const inputs = document.querySelectorAll(".input");
const resumeBtn = document.querySelector(" .resume-btn");
resumeBtn.addEventListener("click", () => {
  window.open("https://virtualsingh.github.io/resume/");
});

function focusFunction() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
function blurFunction() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunction);
  input.addEventListener("blur", blurFunction);
});

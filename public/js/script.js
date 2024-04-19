// document.body.style.overflow = "hidden";

// window.onload = function () {
//   var loaderWrapper = document.querySelector(".loader-wrapper");
//   loaderWrapper.style.opacity = "0";
//   loaderWrapper.style.visibility = "hidden";
//   loaderWrapper.style.transition = "visibility 0s 0.5s, opacity 0.5s linear";

//   document.body.style.overflow = "visible";
// };

AOS.init({
  once: true,
  duration: 800,
});

window.addEventListener("scroll", function () {
  var banner = document.getElementById("banner");
  if (window.scrollY > 50) {
    banner.classList.add("scrolled");
  } else {
    banner.classList.remove("scrolled");
  }
});

function animateIfVisible() {
  const elements = document.querySelectorAll(
    ".font-cabinet-grotesk[data-count]"
  );
  elements.forEach((element) => {
    if (isInViewport(element) && !element.dataset.animated) {
      animateCountOnce(element);
    }
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateCountOnce(element) {
  if (element.dataset.animating) return;

  const targetCount = parseFloat(element.getAttribute("data-count"));
  const duration = 1000;
  const startTime = performance.now();
  const initialValue = parseFloat(element.textContent) || 0;

  element.dataset.animating = true;

  function updateValue(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentValue = initialValue + (targetCount - initialValue) * progress;
    element.textContent = Math.round(currentValue).toLocaleString();
    if (progress < 1) {
      requestAnimationFrame(updateValue);
    } else {
      element.dataset.animated = true;
      delete element.dataset.animating;
    }
  }

  requestAnimationFrame(updateValue);
}

document.addEventListener("DOMContentLoaded", animateIfVisible);

window.addEventListener("scroll", animateIfVisible);
window.addEventListener("resize", animateIfVisible);

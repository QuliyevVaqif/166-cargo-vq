document.querySelectorAll(".faqTitle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const body = btn.nextElementSibling;

    btn.classList.toggle("open");
    body.classList.toggle("active");

    document.querySelectorAll(".faqBody").forEach((check) => {
      if (body !== check) {
        check.classList.remove("active");
        check.previousElementSibling.classList.remove("open");
      }
    });
  });
});

document.querySelectorAll(".faqKateqoriyalar li").forEach((listElement) => {
  listElement.addEventListener("click", () => {
    listElement.classList.add("changeBorder");

    const btn = listElement.firstElementChild;

    btn.classList.add("change-color");

    document.querySelectorAll(".faqKateqoriyalar li").forEach((check) => {
      if (check !== listElement) {
        check.classList.remove("changeBorder");
        check.firstElementChild.classList.remove("change-color");
      }
    });
  });
});

document.querySelectorAll(".musteri-option div").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("musteri-color");

    document.querySelectorAll(".musteri-option div").forEach((check) => {
      if (btn !== check) {
        check.classList.remove("musteri-color");
      }
    });
  });
});

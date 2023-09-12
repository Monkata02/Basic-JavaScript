document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = question.querySelector("i");

        question.addEventListener("click", () => {
            const isExpanded = item.classList.toggle("active");
            answer.classList.toggle("show");

            if (isExpanded) {
                icon.classList.replace("fa-plus", "fa-minus");
            } else {
                icon.classList.replace("fa-minus", "fa-plus");
            }
        });
    });
});

const faq = document.querySelectorAll(".faqContent");

faq.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active"); 
    });
});
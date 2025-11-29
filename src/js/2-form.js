let formData = { email: "", message: "" };
let feedbackForm = document.querySelector(".feedback-form");
let feedbackFormState = localStorage.getItem("feedback-form-state");
const submitButton = feedbackForm.querySelector("button");

if (feedbackFormState) {
    feedbackFormState = JSON.parse(feedbackFormState);
    feedbackForm.elements.email.value = feedbackFormState.email;
    feedbackForm.elements.message.value = feedbackFormState.message;
    formData = feedbackFormState;
}

feedbackForm.addEventListener("input", () => {
    formData.email = feedbackForm.elements.email.value.trim();
    formData.message = feedbackForm.elements.message.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    localStorage.removeItem("feedback-form-state"); 
    formData = { email: "", message: "" };
    feedbackForm.reset();
});
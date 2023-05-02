import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle((event) => {
    const email = feedbackForm.elements.email.value;
    const message = feedbackForm.elements.message.value;
    const feedback = {
        email,
        message,
    }
    const feedbackJSON = JSON.stringify(feedback);
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
}, 500));
function checkStorageStatus() {
    const localValue = localStorage.getItem("feedback-form-state")
    if (localValue) {
        const localValueObj = JSON.parse(localValue);
        feedbackForm.elements.email.value = localValueObj.email;
        feedbackForm.elements.message.value = localValueObj.message;
    }
}
checkStorageStatus();

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = feedbackForm.elements.email.value;
    const message = feedbackForm.elements.message.value;
    const feedback = {
        email,
        message,
    }
    console.log(feedback);
    feedbackForm.reset();
    localStorage.removeItem("feedback-form-state");
});
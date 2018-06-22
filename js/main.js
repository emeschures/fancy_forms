// Questions Array
const questions = [
  { question: 'Enter Your First Name' },
  { question: 'Enter Your Last Name' },
  { question: 'Enter Your Email', pattern: /\S+@\S+\.\S+/ },
  { question: 'Create a Password', type: 'password' }
];

// Transition Tiems
const shakeTime = 100; // Shake Transition Time
const switchTime = 200; // Transition Between Questions

// Initialize Position at First Question
let position = 0;

// Initialize DOM Elements
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

// EVENTS

// Get Question on DOM Load
document.addEventListener('DOMContentLoaded', getQuestion);

// Next Button Click
nextBtn.addEventListener('click', validate);

// FUNCTIONS

// Get Question from Array & Add to Markup
  function getQuestion() {
    // Get Current Question
    inputLabel.innerHTML = questions[position].question;
    // Get Current Type
    inputField.type = questions[position].type || 'text';
    // Get Current Answer
    inputField.value = questions[position].answer || '';
    // Focus on Element
    inputField.focus();

    // Set Progress Bar Width - Variable to the questions length
    progress.style.width = (position * 100) / questions.length + '%';

    // Add User Icon OR Back Arrow Depending On Question
    prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-user';

    showQuestion();
}

// Display Question To User
function showQuestion() {
  inputGroup.style.opacity = 1;
  inputProgress.style.transition = '';
  inputProgress.style.width = '100%';
}

// Hide Question From User
function hideQuestion() {
  inputGroup.style.opacity = 0;
  inputLabel.style.marginLeft = 0;
  inputProgress.style.width = 0;
  inputProgress.style.transition = 'none';
  inputGroup.style.border = null;
}

// Transform To Create Shake Motion
function transform(x, y) {
  formBox.style.transform = `translate(${x}px, ${y}px)`
}

// Validate Field
function validate() {
  // Make Sure Pattern Matches If There Is One
  if(!inputField.value.match(questions[position].pattern || /.+/)
  ){
    inputFail();
  } else {
    inputPass();
  }
}

// Field Input Fail
function inputFail() {
  formBox.className= 'error';
}

// Field Input Pass
function inputPass() {

}
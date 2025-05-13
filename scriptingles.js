function checkAnswers() {
    var score = 0;

    // Check question 1
    var question1 = document.querySelector('input[name="question1"]:checked');
    if (question1 && question1.value === 'a') score++;

    // Check question 2
    var question2 = document.querySelector('input[name="question2"]:checked');
    if (question2 && question2.value === 'b') score++;

    // Check question 3
    var question3 = document.querySelector('input[name="question3"]:checked');
    if (question3 && question3.value === 'b') score++;

    // Show result
    var feedback = document.getElementById('feedback');
    var resultSection = document.getElementById('result');
    resultSection.style.display = 'block';

    if (score === 3) {
      feedback.textContent = 'Congratulations! You answered all questions correctly.';
    } else if (score === 2) {
      feedback.textContent = 'Good job! You got 2 out of 3 correct.';
    } else if (score === 1) {
      feedback.textContent = 'Not bad! You got 1 out of 3 correct.';
    } else {
      feedback.textContent = 'Keep practicing! You didn’t get any correct, but don’t give up!';
    }
  }
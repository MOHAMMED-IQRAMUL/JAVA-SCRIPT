const mcqs = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question:
      "Which programming language is commonly used for web development?",
    options: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
  },
];

function displayQuestion(questionObject, index) {
  let form = document.querySelector(".form");

  let optionsHtml = questionObject.options
    .map((option, optionIndex) => {
      return `
            <label>
                <input type="radio" name="q${index}" value="${option}">
                ${option}
            </label>
            <br>
        `;
    })
    .join("");

  form.innerHTML += `
    <p>${questionObject.question}</p>
    ${optionsHtml}
    <br>
    `;
}

mcqs.forEach(displayQuestion);

function validateAnswers() {
  let score = 0;

  mcqs.forEach((question, index) => {
    const selectedOption = document.querySelector(
      `input[name="q${index}"]:checked`
    );

    if (selectedOption) {
      const userAnswer = selectedOption.value;
      const correctAnswer = question.correctAnswer;

      if (userAnswer === correctAnswer) {
        score++;
      }
    }
  });

  let ans1 = document.querySelector(".ans");
  ans1.innerText = `You scored ${score} out of ${mcqs.length}`;
  alert(`You scored ${score} out of ${mcqs.length}`);
}

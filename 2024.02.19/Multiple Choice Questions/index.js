import { questions } from "./questions.js";

const questionsDiv = document.getElementById("questions-div");
const quizForm = document.querySelector("form");

questions.forEach((questionObj, index) => {
  const questionDiv = document.createElement("div");
  const questionTitle = document.createElement("h3");
  questionTitle.textContent = `${index + 1}. ${questionObj.question}`;
  questionTitle.style.marginBottom = "2rem";
  questionDiv.appendChild(questionTitle);

  questionObj.options.forEach((option, optionIndex) => {
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("option-container"); // Add a class for styling

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question_${index}`;
    input.id = `q${index}_option${optionIndex}`;
    input.className = "option";

    const label = document.createElement("label");
    label.htmlFor = `q${index}_option${optionIndex}`;
    label.textContent = option;
    label.className = "option";

    input.addEventListener("change", () => {
      const isCorrect = optionIndex === questionObj.correctAnswer;
      updateAnswerStyle(label, isCorrect);

      // Automatically select correct answer if wrong answer is chosen
      if (!isCorrect) {
        const correctInput = questionDiv.querySelector(`input#q${index}_option${questionObj.correctAnswer}`);
        correctInput.checked = true;
        updateAnswerStyle(correctInput.nextElementSibling, true);
        input.style.accentColor = "green";
      }

      // Disable all options once an answer is chosen
      disableOptions(questionDiv);
    });

    optionDiv.appendChild(input);
    optionDiv.appendChild(label);
    questionDiv.appendChild(optionDiv);
    questionDiv.className = "question-div";
  });

  quizForm.appendChild(questionDiv);
});

function updateAnswerStyle(label, isCorrect) {
  if (isCorrect) {
    label.classList.add("correct");
  } else {
    label.classList.add("incorrect");
  }
}

function disableOptions(questionDiv) {
  const optionContainers = questionDiv.querySelectorAll(".option-container");
  optionContainers.forEach((container) => {
    container.classList.add("disabled");
  });
}

function goToNews(){
    window.location.href = "/HTML/News.html"
}
function goToMain(){
    window.location.href = "/HTML/Main.html"
}
function goToHelp(){
    window.location.href = "/HTML/PsyhHelp.html"
}
function goToMath(){
    window.location.href = "/HTML/MathTest.html"
}

document.addEventListener('DOMContentLoaded', function () {
    var showFormButton = document.getElementById('showFormButton');
    var closeFormButton = document.getElementById('closeFormButton');
    var popupForm = document.getElementById('popupForm');
    var popupContent = document.querySelector('.popup-content');

    showFormButton.addEventListener('click', function () {
        popupForm.style.display = 'block';
    });

    closeFormButton.addEventListener('click', function () {
        popupForm.style.display = 'none';
    });

    // Закривати форму, якщо користувач клікає поза нею
    window.addEventListener('click', function (event) {
        if (event.target === popupForm) {
            popupForm.style.display = 'none';
        }
    });

    // Запобігає тому, щоб клік на самій формі не закривав її
    popupContent.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
        

 // Перевірте, чи є відповіді у локальному сховищі та відновіть їх
 var storedAnswers = localStorage.getItem('answers');
 var answers = storedAnswers ? JSON.parse(storedAnswers) : {};

 // Встановіть відповіді для кожного питання
 setAnswer('question1');
 setAnswer('question2');
 setAnswer('question3');
 setAnswer('question4');
 setAnswer('question5');
 setAnswer('question6');
 setAnswer('question7');
 setAnswer('question8');
 setAnswer('question9');
 setAnswer('question10');
 // Додайте аналогічний виклик для інших питань

 function setAnswer(questionId) {
     var answerElement = document.getElementById(questionId);
     var storedAnswer = answers[questionId];

     if (storedAnswer) {
         var selectedOption = storedAnswer.selectedOption;
         var resultElement = document.getElementById(questionId + '-result');

         if (selectedOption === storedAnswer.correctAnswer) {
             buttonElement.style.backgroundColor = 'green';
             answerElement.classList.remove('incorrect');
             answerElement.classList.add('correct');
         } else {
             buttonElement.style.backgroundColor = 'red';
             answerElement.classList.remove('correct');
             answerElement.classList.add('incorrect');
         }

         var buttons = document.querySelectorAll('.answer button');
         for (var i = 0; i < buttons.length; i++) {
             buttons[i].classList.add('disabled');
         }
     }
 }

        var answerSelected1 = false;
        var answerSelected2 = false;
        var answerSelected3 = false;
        var answerSelected4 = false;
        var answerSelected5 = false;
        var answerSelected6 = false;
        var answerSelected7 = false;
        var answerSelected8 = false;
        var answerSelected9 = false;
        var answerSelected10 = false;

function checkAnswer(selectedOption, questionId, buttonElement) {
  var resultElement = document.getElementById(questionId + '-result');
  var answerElement = document.getElementById(questionId);
  

  // Перевірка, чи є вже вибрана відповідь
  if (questionId === 'question1' && answerSelected1) {
      return;
  } else if (questionId === 'question2' && answerSelected2) {
      return;
  } else if (questionId === 'question3' && answerSelected3) {
    return;
  } else if (questionId === 'question4' && answerSelected4) {
    return;
  } else if (questionId === 'question5' && answerSelected5) {
    return;
  } else if (questionId === 'question6' && answerSelected6) {
    return;
  } else if (questionId === 'question7' && answerSelected7) {
    return;
  } else if (questionId === 'question8' && answerSelected8) {
    return;
  } else if (questionId === 'question9' && answerSelected9) {
    return;
  } else if (questionId === 'question10' && answerSelected10) {
    return;
  }
  

 var correctAnswer;  // Змінна для зберігання правильної відповіді

 if (questionId === 'question1') {
     correctAnswer = 'В';
 } else if (questionId === 'question2') {
     correctAnswer = 'Г'; 
 } else if (questionId === 'question3') {
     correctAnswer = 'Б'; 
 } else if (questionId === 'question4') {
     correctAnswer = 'Г'; 
 } else if (questionId === 'question5') {
     correctAnswer = 'А'; 
 } else if (questionId === 'question6') {
     correctAnswer = 'Б'; 
 } else if (questionId === 'question7') {
     correctAnswer = 'А'; 
 } else if (questionId === 'question8') {
     correctAnswer = 'Г'; 
 } else if (questionId === 'question9') {
     correctAnswer = 'Г'; 
 } else if (questionId === 'question10') {
  correctAnswer = 'А'; 
 }

  answers[questionId] = {
    selectedOption: selectedOption,
    correctAnswer: correctAnswer
  };

  localStorage.setItem('answers', JSON.stringify(answers));

  if (selectedOption === correctAnswer) {
    // Змініть колір тільки тієї кнопки, яку ви натискаєте, на зелений
    buttonElement.style.backgroundColor = 'green';
    answerElement.classList.remove('incorrect');
    answerElement.classList.add('correct');
  } else {
    buttonElement.style.backgroundColor = 'red';
    answerElement.classList.remove('incorrect');
    answerElement.classList.add('correct');
  }
              // Вимикаємо всі кнопки в групі
  var buttons = document.querySelectorAll('.answer button');
  for (var i = 0; i < buttons.length; i++) {
       buttons[i].classList.add('disabled');
  }
  
  if (questionId === 'question1') {
    answerSelected1 = true;
  } else if (questionId === 'question2') {
    answerSelected2 = true;
  } else if (questionId === 'question3') {
    answerSelected3 = true;
  } else if (questionId === 'question4') {
    answerSelected4 = true;
  } else if (questionId === 'question5') {
    answerSelected5 = true;
  } else if (questionId === 'question6') {
    answerSelected6 = true;
  } else if (questionId === 'question7') {
    answerSelected7 = true;
  } else if (questionId === 'question8') {
    answerSelected8 = true;
  } else if (questionId === 'question9') {
    answerSelected9 = true;
  } else if (questionId === 'question10') {
    answerSelected10 = true;
  }
}


document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
  
    // Обробка події натискання кнопки "Вхід"
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      var username = document.getElementById('name').value;
      var password = document.getElementById('password').value;
  
      // Викликати функцію для відправки даних на сервер та обробки відповіді
      loginUser(username, password);
    });
  });
  
  async function sendTestResult(testName, result) {
    try {
      const response = await fetch('http://localhost:3000/api/test-results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ testName, result }),
      });

      if (!response.ok) {
        throw new Error('Помилка відправлення результатів тестування');
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  

function buildQuiz(){
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){

                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
}

function showResults(){}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
        question: "Which Kpop album had the highest sales in S.Korea in 2023?",
        answers: {
            a: "NewJeans - OMG",
            b: "NCT Dream - ISTJ",
            c: "Junkook - Golden",
            d: "Seventeen - FML"
        },
        correctAnswer: "d"
    },

    {
        question: "How many provinces are there in S.Korea?",
        answers: {
            a: "Thirteen",
            b: "Nine",
            c: "Twenty-Two",
            d: "Eight"
        },
        correctAnswer: "b"
    },

    {
        question: "What is the Korean word for 'side dishes'",
        answers: {
            a: "banchan - 반찬",
            b: "sagwa - 사과",
            c: "annyeong - 안녕",
            d: "naembi - 냄비"
        },
        correctAnswer: "a"
    },

    {
        question: "Under what name did Wang Kon unify the country in 918 A.C.?",
        answers: {
            a: "Seoul",
            b: "Koryo",
            c: "Shanghai",
            d: "Joseon"
        },
        correctAnswer: "b"
    },

    {
        question: "What dish is typically eaten in S.Korea on birthdays?",
        answers: {
            a: "Bulgogi(불고기) - Korean BBQ Beef",
            b: "Tteokbokki(떡볶이) - Spicy Rice Cake",
            c: "Miyeok Guk (미역국) - Seaweed Stew",
            d: "Tteok Guk(떡국) - Rice Cake Stew"
        },
        correctAnswer: "c"
    },
];

buildQuiz();

submitButton.addEventListener('click', showResults)
// Senarai soalan dan jawapan
const cards = [
    {question: "4x = 24. Cari x.", answer: "x = 6"},
    {question: "3x = 18. Cari x.", answer: "x = 6"},
    {question: "x/4 = 6. Cari x.", answer: "x = 24"},
    {question: "x/3 = 5. Cari x.", answer: "x = 15"},
    {question: "48x = 6. Cari x.", answer: "x = 1/8"},
    {question: "6x + 4 = 24. Cari x.", answer: "x = 10/3"},
    {question: "7x - 5 = 30. Cari x.", answer: "x = 5"},
    {question: "3x + 2 = 20. Cari x.", answer: "x = 6"},
    {question: "3x - 4 = 17. Cari x.", answer: "x = 7"},
    {question: "x/5 + 3 = 6. Cari x.", answer: "x = 15"},
    {question: "2x - 8 = 10. Cari x.", answer: "x = 9"},
    {question: "24x= 17x - 13. Cari x.", answer: "x = -13/7"},
    {question: "x/2 - 4 = 1. Cari x.", answer: "x = 10"},
    {question: "5(x-3) + 7 = 20. Cari x.", answer: "x = 28/5"},
    {question: "4(x-2) = 20. Cari x.", answer: "x = 7"},
    {question: "2x + 3 = 4x - 5. Cari x.", answer: "x = 4"},
    {question: "5x + 12 = 3x + 10. Cari x.", answer: "x = -1"},
    {question: "8 + 3x = 2(x+10). Cari x.", answer: "x = 12"},
    {question: "6x - 2 = 3x + 10. Cari x.", answer: "x = 4"},
    {question: "4(x+3) - 2 = 2x + 20 . Cari x.", answer: "x = 10"},
    {question: "5x + 11 = 13x - 7. Cari x.", answer: "x = 9/4"},
    {question: "Bilangan kerusi di dalam sebuah dewan ialah 3 kali bilangan meja ditambah 12. Jika jumlah kerusi 48, cari bilangan meja. Cari x.", answer: "x = 12"},
    {question: "Harga sehelai baju ialah Rm 5 lebih daripada empat kali harga topi. Jika harga baju ialah Rm 29, cari harga topi. Cari x.", answer: "x = 6"},
    {question: "Puan Lina membeli x keping roti. Setiap keping roti berharga Rm2.50. Jika jumlah bayaran ialah Rm20, cari x. Cari x.", answer: "x = 8"},
];

let currentCard = 0;

const flashcard = document.getElementById('flashcard');
const answerText = document.getElementById('answer');
const showAnswerBtn = document.getElementById('showAnswer');
const nextCardBtn = document.getElementById('nextCard');

function showQuestion() {
    flashcard.innerText = cards[currentCard].question;
    answerText.innerText = '';
}

function showAnswer() {
    answerText.innerText = "Jawapan: " + cards[currentCard].answer;
}

function nextCard() {
    currentCard++;
    if (currentCard >= cards.length) currentCard = 0;
    showQuestion();
}

// Event listener
showAnswerBtn.addEventListener('click', showAnswer);
nextCardBtn.addEventListener('click', nextCard);

// Mula dengan soalan pertama
showQuestion();

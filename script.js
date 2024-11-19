const sentences = [
    { text: "Je nutné, aby ses jim omluvil.", type: "Věta podmětná" },
    { text: "Kdo mi neporozuměl, může se na všechno znovu zeptat.", type: "Věta podmětná" },
    { text: "Není nutné, abys tam chodil.", type: "Věta podmětná" },
    { text: "Řeka byla, jako by ji postříbřil.", type: "Věta přísudková" },
    { text: "Nejsi taková, jakou si tě pamatuji.", type: "Věta přísudková" },
    { text: "Řekl, že nebude odmlouvat učitelům.", type: "Věta předmětná" },
    { text: "Pověz mi, co čteš, a já ti povím, jaký jsi.", type: "Věta předmětná" },
    { text: "Poraďte mi, kde mám vysadit stromky.", type: "Věta předmětná" },
    { text: "Závodníci, kteří projeli cílovou páskou, byli bouřlivě pozdraveni.", type: "Věta přívlastková" },
    { text: "Mám obavu, že mnozí studenti dostatečně neovládají tuto látku.", type: "Věta přívlastková" },
    { text: "Učitel pozoroval žáka, jak schovává tahák do rukávu.", type: "Věta doplňková" },
    { text: "Viděl jsem králíky, jak poskakují v trávě.", type: "Věta doplňková" },
    { text: "Byl všude, kde se něco dělo.", type: "Věta příslovečná (Místní)" },
    { text: "Budu čekat, dokud se neozveš.", type: "Věta příslovečná (Časová)" },
    { text: "Dělal to, jak nejlíp dovedl.", type: "Věta příslovečná (Způsobová)" },
    { text: "Družstvo Sparty prohrálo, protože nebylo dobře sehraným celkem.", type: "Věta příslovečná (Příčinná)" },
    { text: "Uděláme všechno, abychom dostali jedničku z česk ého jazyka.", type: "Věta příslovečná (Účelová)" },
    { text: "Jestli dnes přijede tetička, upečeme k obědu husu.", type: "Věta příslovečná (Podmínková)" },
    { text: "Musíte se to naučit, i když se vám nechce.", type: "Věta příslovečná (Přípustková)" }
];

const types = [
    "Věta podmětná",
    "Věta přísudková",
    "Věta předmětná",
    "Věta přívlastková",
    "Věta doplňková",
    "Věta příslovečná (Místní)",
    "Věta příslovečná (Časová)",
    "Věta příslovečná (Způsobová)",
    "Věta příslovečná (Příčinná)",
    "Věta příslovečná (Účelová)",
    "Věta příslovečná (Podmínková)",
    "Věta příslovečná (Přípustková)"
];

let currentSentence;
let correctAnswer;

function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function getRandomOptions(correctType) {
    const options = new Set();
    options.add(correctType);
    while (options.size < 4) {
        const randomType = types[Math.floor(Math.random() * types.length)];
        options.add(randomType);
    }
    return Array.from(options).sort(() => Math.random() - 0.5);
}

function displayQuestion() {
    const sentenceObj = getRandomSentence();
    currentSentence = sentenceObj.text;
    correctAnswer = sentenceObj.type;

    document.getElementById('sentence').innerText = currentSentence;
    const options = getRandomOptions(correctAnswer);
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    options.forEach(option => {
        const button = document.createElement('div');
        button.className = 'option';
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById('result').innerText = '';
}

function checkAnswer(selectedOption) {
    const result = document.getElementById('result');
    if (selectedOption === correctAnswer) {
        result.innerText = 'Správně!';
    } else {
        result.innerText = `Špatně! Správná odpověď je: ${correctAnswer}`;
    }
}

document.getElementById('nextButton').onclick = displayQuestion;

displayQuestion();
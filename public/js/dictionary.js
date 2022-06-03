// // Javascript developed with the help of tutorial by Coding Artist: https://www.youtube.com/watch?v=PUkgK7TI0x0&t=809s
// // & tutorial by Jarrett Retz https://rapidapi.com/blog/build-a-dictionary-app-with-the-wordsapi/
// // & from API website: https://dictionaryapi.dev/

const resultDiv = document.querySelector(".result");
const wordEle = document.querySelector("#word");
const phonetics = document.querySelector(".phonetics");
const wordMeaning = document.querySelector(".word-definition");

const handle = async (e) => {
  if (e.keyCode === 13) {
    const word = e.target.value;
    const result = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await result.json();
    resultDiv.style.display = "block";
    //from API website
    wordEle.innerText = data[0].word;
    phonetics.innerText = data[0].phonetics[0].text;
    wordMeaning.innerText = data[0].meanings[0].definitions[0].definition;
  }
};

//Couldn't get synonyms to work :(
//     const synonyms = data[0].meanings[0].definitions[0].synonyms;
//     let synonymsData = "";
//     for (let i = 0; i < synonyms.length; i++) {
//       synonymsData += `<p class="pills">${synonyms[i]}<p>`;
//     }
//     document.querySelector(".synonyms").innerHTML = synonymsData;
// }
// };

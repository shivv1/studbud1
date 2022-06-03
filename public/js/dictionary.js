// // developed with the help of tutorial by Coding Artist: https://www.youtube.com/watch?v=PUkgK7TI0x0&t=809s
// // & tutorial by Jarrett Retz https://rapidapi.com/blog/build-a-dictionary-app-with-the-wordsapi/
// // & from API website: https://dictionaryapi.dev/

//Declare consts
const resultDiv = document.querySelector(".result");
const wordEle = document.querySelector(".word");
const phonetics = document.querySelector(".phonetics");
const wordMeaning = document.querySelector(".word-definition");

const handle = async (e) => {
  // 13 = enter key. Tutorial from: https://css-tricks.com/snippets/javascript/javascript-keycodes/
  //if enter is pressed
  if (e.keyCode === 13) {
    const word = e.target.value;
    //wait till accepted
    const result = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    //data from API
    const data = await result.json();
    resultDiv.style.display = "block";
    //from API website https://dictionaryapi.dev/
    //returning text content
    //return word name
    wordEle.innerText = data[0].word;
    //return word phonetic
    phonetics.innerText = data[0].phonetics[0].text;
    //return word definition
    wordMeaning.innerText = data[0].meanings[0].definitions[0].definition;
    //return synonyms
    const synonyms = data[0].meanings[0].definitions[0].synonyms;
      let synonymsData = "";
      for (let i = 0; i < synonyms.length; i++) {
        // return the synonyms to synbox (output)
        synonymsData += `<p class="synbox">${synonyms[i]}<p>`;
      }
      //HTML property
      document.querySelector(".synonyms").innerHTML = synonymsData;
      return;
    }
  };
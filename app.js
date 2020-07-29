let titlePresentation = document.querySelector('#title-presentation')
let paragraphPresentation = document.querySelector('#paragraph-presentation')
const URL = `https://api.jsonbin.io/b/5f210aadc58dc34bf5dcf49b/6`

const getData = async() =>{
  const resp = await fetch(URL);
  const data = await resp.json();
  console.log(data)
  const presentation = data.presentation
  titlePresentation.innerHTML = presentation.titlePresentation
  paragraphPresentation.innerHTML = presentation.paragraphPresentation
}
// function changeButton() {
//   info.insertAdjacentHTML('beforebegin',
// `<div><p>Your name is: ${player.name}</p></div>`);
// }
console.log("working");
getData()

let titleDescription = document.querySelector('#title-description')
let paragraphDescription = document.querySelector('#paragraph-description')
const URL = `https://api.jsonbin.io/b/5f210aadc58dc34bf5dcf49b/4`

const getData = async() =>{
  const resp = await fetch(URL);
  const data = await resp.json();
  console.log(data)
  titleDescription.innerHTML = data.titleDescription
  paragraphDescription.innerHTML = data.paragraphDescription
}
// function changeButton() {
//   info.insertAdjacentHTML('beforebegin',
// `<div><p>Your name is: ${player.name}</p></div>`);
// }
console.log("working");
getData()

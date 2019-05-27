var musicHTML = document.querySelector('#Bands');
var inputName = document.querySelector('#InputBandName');
var inputGenre = document.querySelector('#InputGenreName');
var inputAge = document.querySelector('#InputYearFormed');
var addBtn = document.querySelector('#AddBand')
var bands = [];


addBtn.addEventListener('click', function(event) {
event.preventDefault();
var name = inputName.value;
var genre = inputGenre.value;
var age = inputAge.value;
var newBand = {
  name: name,
  genre: genre,
  age: age
}
bands.push(newBand);
var rowsofBands = bands.map(function(band) {
  return `
   <tr>
   <td>${band.name}</td>
   <td>${band.genre}</td>
   <td>${band.age}</td>
   </tr>
     `
})
musicHTML.innerHTML = `
  <table>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    ${rowsofBands}
  </table>
  `
})

const requestURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=8d027704c57524153a0af2b38415ac45&language=en-US&page=1&region=gb';

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById('demo').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', requestURL, true);
  xhttp.send();
}

loadXMLDoc();

// const header = document.querySelector('header');
// // const section = document.querySelector('section');
//
// const requestURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=8d027704c57524153a0af2b38415ac45&language=en-US&page=1&region=gb';
//
// const request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
//
// request.onload = function() {
//   const movies = request.response;
//   populateHeader(movies);
//   showmovies(movies);
// };
//
// function populateHeader(jsonObj) {
//   var myH1 = document.createElement('h1');
//   myH1.textContent = jsonObj['title'];
//   header.appendChild(myH1);
//
//   var myPara = document.createElement('p');
//   myPara.textContent = jsonObj['overview'];
//   header.appendChild(myPara);
// }
//
// function showmovies(jsonObj) {
//   const results = jsonObj['results'];
//   const title = jsonObj[i].title;
//
//   for (var i = 0; i < results.length; i++) {
//     // var myPara1 = document.createElement('p');
//     var myArticle = document.createElement('article');
//     var myList = document.createElement('ul');
//
//
//     for (var j = 0; j < title.length; j++) {
//       var listItem = document.createElement('li');
//       listItem.textContent = title[j];
//       myList.appendChild(listItem);
//     }
//
//     myArticle.appendChild(myList);
//   }
// }

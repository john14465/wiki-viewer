const results = document.querySelector('#results');
const input = document.querySelector('#search-input');

document.querySelector('#search-btn').addEventListener('click', function(){
    let search = input.value;
    let url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + search + '&limit=10&origin=*';
    results.innerHTML = "";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
          let response = JSON.parse(xhttp.responseText);
          let data = response;
          for(let i = 0; i < data[1].length; i++){
            item = `<a href="${data[3][i]}" target="_blank"><div class="item"><h3>${data[1][i]}</h3><p>${data[2][i]}</p></div></a>`
            results.innerHTML += item;
          }
      }
    };
    input.value = "";
    xhttp.open("GET", url, true);
    xhttp.send();
});
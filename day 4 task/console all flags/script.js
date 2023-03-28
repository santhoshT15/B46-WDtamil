

var url = new XMLHttpRequest();

url.open('GET','https://restcountries.com/v3.1/all');
url.responseType= 'json';

url.send();

url.onload = function() {
    var data = url.response;
    for(var i=0;i<data.length;i++){
        console.log(data[i].flag)
    }
}
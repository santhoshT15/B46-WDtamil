let url= new XMLHttpRequest();
url.open('GEt','https://restcountries.com/v3.1/all');
url.responseType= 'json';

url.send();

url.onload = function() {
    var data = url.response;
    
    for (var i=0; i<data.length;i++){
        console.log("Country name= "+data[i].name.common);
        console.log("Region= "+data[i].region);
        console.log("Subregion= "+data[i].subregion);
        console.log("Population= "+data[i].population);
    }
}
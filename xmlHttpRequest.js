//2nd and 3rd questions answer

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    for (var i = 0; i<data.length; i++){
        console.log(
            `CountryName:${data[i].name.common}
            region:${data[i].region}
            SubRegion:${data[i].subregion}
            Population:${data[i].population}
            Flags:${data[i].flags.png}`);
    }
}   

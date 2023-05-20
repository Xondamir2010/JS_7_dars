/*localStorage.setItem('ism','Behruz');
localStorage.setItem('familiya','Muhammadov');
localStorage.setItem('yoshi','13 yoshda');

localStorage['ism'] = "Xondamir"
localStorage['familiya'] = "Qo'ldoshev"

/!*localStorage.removeItem('ism');
localStorage.removeItem('familiya');
localStorage.removeItem('yoshi');*!/

localStorage.clear();

let uningIsmi = localStorage.getItem('ism');
let uningFamiliyasi = localStorage.getItem('familiya');
let uningYoshi = localStorage.getItem('yoshi')

console.log(uningIsmi,uningFamiliyasi,uningYoshi);*/


/*let sorov = new XMLHttpRequest();
sorov.open('get','https://getty.uz/serverdan/malumot/olish');
sorov.send();*/


/*sorov.onload = function (){
    console.log(sorov.responseText);
}*/

/*let jsFile = {ism: "Behruz",yoshi: 13};

let jsonFile = '{"ismi": "Bilolxoja","yoshi": 14}'

/!*console.log(JSON.stringify(jsFile));*!/
console.log(JSON.parse(jsonFile));*/

let sorov = new XMLHttpRequest();
sorov.open('get','jsonFile.json');
sorov.send();

sorov.onload = function (){
    let byData = JSON.parse(sorov.responseText);
    console.log(byData);
}















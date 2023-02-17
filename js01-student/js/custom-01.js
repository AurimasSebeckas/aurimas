/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
vardas= "aurimas"
pavarde= "sebeckas"
let metai= 1983
let dmetai= new Date().getFullYear()
console.log(`as esu ${vardas} ${pavarde}. Man yra ${dmetai-metai} metai(-ų). `)

/*02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
let num1= Math.round(Math.random()*4)
let num2= Math.round(Math.random()*4)
console.log(" skaiciai "  + num1+", "+ num2)
if (num1==0 || num2==0){
console.log("daluba is nulio negalima")
}else if (num1>num2){
  console.log((num1/num2).toFixed(2))
}else{
    console.log((num2/num1).toFixed(2))
  }
/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
let n1= Math.round(Math.random()*25)
let n2= Math.round(Math.random()*25)
let n3= Math.round(Math.random()*25)
console.log(" skaiciai "  + n1+", "+ n2+", "+ n3)
let max = Math.max(n1,n2,n3)
let min = Math.min(n1,n2,n3)
let vid 
if(n1!=max && n1!=min){
    vid=n1
} else if (n2!=max && n2!=min){
    vid=n2
}else if (n3!=max && n3!=min){
    vid=n3
}else {
    vid="du arba daugiau skaiciu yra lygus, todel negalime nustatyti vidurines reiksmes"
}
console.log("vidurinis skaicius: "+ vid)

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1= Math.ceil(Math.random()*10)
let kr2= Math.ceil(Math.random()*10)
let kr3= Math.ceil(Math.random()*10)
console.log(" skaiciai "  + kr1+", "+ kr2+", "+ kr3)
if(kr1+kr2>kr3 && kr1+kr3>kr2 && kr2+kr3>kr1){
    console.log("trikampis imanomas")
} else{ 
    console.log("trikampis neimanomas")
}



/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let no1= Math.round(Math.random()*2)
let no2= Math.round(Math.random()*2)
let no3= Math.round(Math.random()*2)
let no4= Math.round(Math.random()*2)
console.log(" skaiciai "  + no1+", "+ no2+", "+ no3+", "+ no4)
let du=0
let vienas=0
let nulis=0
if (no1==0){
    nulis++
}
if (no2==0){
    nulis++
}
if (no3==0){
    nulis++
}
if (no4==0){
    nulis++
}
if (no1==1){
    vienas++
}
if (no2==1){
    vienas++
}
if (no3==1){
    vienas++
}
if (no4==1){
    vienas++
}
if (no1==2){
    du++
}
if (no2==2){
    du++
}
if (no3==2){
    du++
}
if (no4==2){
    du++
}
console.log(`nuliai: ${nulis}, vienetai: ${vienas}, dvejetai: ${du} . `)




/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
let k1= Math.floor(Math.random()*21)-10
let k2= Math.floor(Math.random()*21)-10
let k3= Math.floor(Math.random()*21)-10
console.log(" skaiciai "  + k1+", "+ k2+", "+ k3)
if (k1<0){
    console.log(`[${k1}]`)
}
if (k2<0){
    console.log(`[${k2}]`)
}
if (k3<0){
    console.log(`[${k3}]`)
}
if (k1==0){
    console.log(`(${k1})`)
}
if (k2==0){
    console.log(` (${k2})`)
}
if (k3==0){
    console.log(`(${k3})`)
}
if (k1>0){
    console.log(`{${k1}}`)
}
if (k2>0){
    console.log(`{${k2}} `)
}
if (k3>0){
    console.log(` {${k3}}`)
}




/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
let zva= Math.floor(Math.random()*(3000-5+1)+5)
let kaina=1
if (zva>2000){
    kaina=(kaina*zva*0.96).toFixed(2)
}else if (zva>1000){
    kaina=(kaina*zva*0.97).toFixed(2)
}
else {
    kaina=zva.toFixed(2)
}
console.log(`kiekis: ${zva}, Suma: ${kaina} `)





/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
let h1= Math.round(Math.random()*100)
let h2= Math.round(Math.random()*100)
let h3= Math.round(Math.random()*100)
let kiekis=3
let vidurkis=Math.round((h1+h2+h3) / kiekis) 
console.log(" skaiciai "  + h1+", "+ h2+", "+ h3)
console.log(`vidurkis: ${vidurkis}`)
if (h1>90 || h1<10){
    kiekis--
    h1=0
}
if (h2>90 || h2<10){
    kiekis--
    h2=0
}
if (h3>90 || h3<10){
    kiekis--
    h3=0
}
if (h1==0 && h2==0 && h3==0){
    console.log(" visi trys skaicia yra atmestini, vidurkis neskaiciuojamas" )
}
else{
    vidurkis=Math.round((h1+h2+h3) / kiekis) 
    console.log(`Atmetus nepriimtinus skaicius,vidurkis: ${vidurkis}`)
}   

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
let total= Math.round(Math.random()*86400)
let val=Math.floor(total / 3600)
let minute=Math.floor((total - (val*3600)) / 60)
let sek=total - (val*3600)-(minute*60)
if (val<10){
    val=val.toString().padStart(2,"0")
}
if (minute<10){
    minute =minute.toString().padStart(2,"0")
}
if (sek<10){
    sek =sek.toString().padStart(2,"0")
}
console.log(`pries: ${val}: ${minute}: ${sek}`)

let nsek= Math.round(Math.random()*300)
console.log(`prideta :  ${nsek}s`)
total+=nsek
val=Math.floor(total / 3600)
minute=Math.floor((total - (val*3600)) / 60)
sek=total - (val*3600)-(minute*60)
if (val<10){
    val=val.toString().padStart(2,"0")
}
if (minute<10){
    minute =minute.toString().padStart(2,"0")
}
if (sek<10){
    sek =sek.toString().padStart(2,"0")
}
console.log(`po: ${val}: ${minute}: ${sek}`)



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/


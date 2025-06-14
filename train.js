// console.log("TRAIN AREA!");
// const moment = require('moment')
function content (a,b){
    const string1 = a.split("").sort().join("")
    const string2 = b.split("").sort().join("")
    if (string1 === string2){
        return true;
    }
    return false;
}
console.log(content("ray","yar"))
// C-Task
/*
Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
*/
// time = moment().format('HH:mm')
// class Shop {
//   constructor(non, suv, shorva) {
//     this.mahsulotlar = {
//       non: non,
//       suv: suv,
//       shorva: shorva
//     };
// }

//     qoldiq(){
//             console.log(`hozir ${time} da ${this.mahsulotlar.non} Non ${this.mahsulotlar.suv} Suv va ${this.mahsulotlar.shorva} Shorva mavjud`)
//     }
    
//     sotish(nima,soni){
//         if(nima in this.mahsulotlar){
//             this.mahsulotlar[nima] -= soni;
//             console.log(`${time} da ${this.mahsulotlar.non} ta ${nima} sotildi`)
//         }
//     }

//     qoshish(nima,soni){
//         if(nima in this.mahsulotlar){
//             this.mahsulotlar[nima] += soni;
//             console.log(`${time} da ${this.mahsulotlar.non} ta ${nima} qoshildi`)
//         }
//     }
// }

// const shop = new Shop(10,20,30);
// shop.qoldiq();
// shop.sotish("non",5);
// shop.qoshish("shorva",5);
// shop.qoldiq();
// shop.sotish('Non',5);
// shop.qoldiq()
//B-Task
// let count = 0; 
// function countnumber(word) {
//   for(i of word){
//     if(Number.isFinite(Number(i))){
//       count += 1;
//     }
//   }
//   console.log(count)  
// }

// countnumber("ab2sd3sd4mjlhhk6");


//Loop va Callback
// console.log("Jack Ma maslahatlari"); 
// const list = [ 
// "yahshi talaba boling", //0-20 
// "togri boshliq tanlang va koproq hato qiling", // 20-30 
// "uzingizga ishlashingizni boshlang", // 30-40 
// "siz kuchli bolgan narsalarni qiling", // 40-50 
// "yoshlarga investitsiya qiling", // 50-60 
// "endi dam oling, foydasi yoq endi", // 60 
// ]; 

// function maslahatBering(a, callback) { 
//     if (typeof a !== "number") callback("insert a number", null); 
//     else if (a <= 20) callback(null, list[0]); 
//     else if ( a > 28 && a <= 30 ) callback(null, list[1]); 
//     else if (a > 38 && a <= 40 ) callback(null, list[2]); 
//     else if ( a > 48 && a <= 50 ) callback(null, list[3]); 
//     else if (a > 50 && a <= 60 ) callback(null, list[4]); 
//     else { 
//             setTimeout(function () { 
//                 callback(null, list[5]); 
//             }, 5000); 
//         } 
// } 
// console.log("passed here 0"); 
// maslahatBering(65, (err, data) => { 
//     if (err) console.log("ERROR:", err); 
//     else { 
//         console.log("javob:", data); 
//     } 
// });
// console.log("passed here 1")

//
// console.log("Jack Ma maslahatlari"); 
// const list = [ 
// "yahshi talaba boling", //0-20 
// "togri boshliq tanlang va koproq hato qiling", // 20-30 
// "uzingizga ishlashingizni boshlang", // 30-40 
// "siz kuchli bolgan narsalarni qiling", // 40-50 
// "yoshlarga investitsiya qiling", // 50-60 
// "endi dam oling, foydasi yoq endi", // 60 
// ]; 

// async function maslahatBering(a) { 
//     if (typeof a !== "number") throw new Error("Insert a number")
//     else if (a <= 20) return list[0]; 
//     else if ( a > 28 && a <= 30 ) return list[1]; 
//     else if (a > 38 && a <= 40 ) return list[2]; 
//     else if ( a > 48 && a <= 50 ) return list[3]; 
//     else if (a > 50 && a <= 60 ) returnlist[4]; 
//     else { ;
//             return list[5]
//             // setTimeout(function () { 
//             //     return list[5]; 
//             // }, 5000); 
//         } ;
// } 
// console.log("passed here 0"); 
//then /catch
// maslahatBering(20)
//     .then((data) => {
//             maslahatBering(30)
//             .then((data) => {
//                             maslahatBering(30)
//                                 .then((data) => {
//                                     console.log("Javob:", data);
//                                 })
//                                 .catch(err => {;
//                                     console.log("ERROR:",err)
//                                 });

//                 console.log("Javob:", data);
//             })
//             .catch(err => {;
//                 console.log("ERROR:",err)
//             });
//             console.log("Javob:", data);
//         })
//         .catch(err => {;
//             console.log("ERROR:",err)
//         });
// console.log("passed here 1")
// async/await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob); 
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

// async function maslahatBering(a) { 
//     if (typeof a !== "number") throw new Error("Insert a number")
//     else if (a <= 20) return list[0]; 
//     else if ( a > 28 && a <= 30 ) return list[1]; 
//     else if (a > 38 && a <= 40 ) return list[2]; 
//     else if ( a > 48 && a <= 50 ) return list[3]; 
//     else if (a > 50 && a <= 60 ) returnlist[4]; 
//     else { ;
//             return new Promise((resolve,reject) => {
//                 setTimeout(() => {
//                     resolve(list[5])
//                 }, 5000);
//             });
//             // setTimeout(function () { 
//             //     return list[5]; 
//             // }, 5000); 
//         };
// };

//A-TASK
// let count = 0;
// function find(letter, word){
//     for( let i = 0;i < word.length; i++){
//         if(word[i] === letter){
//             count = count + 1;
//         }
//     }
//     console.log(count);
// }

// find("e","engeneer");

// function qoldiqliBolish(a, b, callback) {
//   if (b && a !== 0) {
//     callback(null, a % b);
//   } else {
//     callback("Mahraj nolga teng bololmaydi", null);
//   }
// }

// // CALL
// qoldiqliBolish(10, 0, (data , err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Error:", data);
//   }
// });

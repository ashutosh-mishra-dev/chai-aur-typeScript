/* 
lecture 3 :
 type Annotations and inference(infer) in typescript

 Annotations means mai samjhaunga, matlab ham yha datatype define karte h.
 inference means aap apne aap se samajh jao , means typescript me variable me jo value first time rakhate ho vhi 
 type ban jayega apne aap typescript samajh jata h infer kar leta hai. 

 */

//----------------------------infer example --------------------------------------------------------------
let drink = "chai";
//drink = 0; // ye error dega kyuki drink variable ab string ho gya h ex. let drink: string
// ye error dega jab ham drink = 0 dete hai. ->Type 'number' is not assignable to type 'string'.ts(2322)

let cup = Math.random() > 0.5 ? 10 : "5";
// yha cup apne aap : let cup: string | number matlab string aur number dono aayenge

let numData = Math.random() > 0.5 ? 10 : 5;
//numData = "hari"; aisa karne pr error aayega ye ab aisa ban gya h let numData: number

//---------------------------- Annotations example --------------------------------------------------------------

let chaiFlavour: string = "masala chai"; // yha hamne variable ko string define kiya esi ko Annotation kahte hai

chaiFlavour = "ginger chai"; //yha sahi overwrite hai

//chaiFlavour = 3; // yha error aayega: Type 'number' is not assignable to type 'string'.

let chaiOrder: number = 2;

let chaiMilGayi: boolean = true;

//** Annotations means type ko define karna ki variable kis type ka hai

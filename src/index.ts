import {
  CuttingChai,
  getChai,
  KulhadChai,
  orderChai,
  serve,
  serveChai,
} from "./03_typesNarrowing.js";

import { numericLenght, pageData, strData } from "./04_moreTypes.js";

function greet(person: string): string {
  return `Hello ${person}, welcome to Chai Code`;
}
const username: string = "chai aur typeScript";
//console.log(greet(username));

//======================== here we are using src/03_typesNarrowing.js file here ==============================

//---------- Example 1: getChai -------------------
// console.log(getChai("green"));
// console.log(getChai(3));

//---------- //Example 2: serveChai -------------------
// console.log(serveChai("elaichi"));
// console.log(serveChai());

//---------- Example 3: orderChai -------------------
// console.log(orderChai("small"));
// console.log(orderChai("large"));
// console.log(orderChai(3));

//---------- Example 4: using class -------------------
const Kulhad = new KulhadChai();
const cutting = new CuttingChai();

// console.log(serve(Kulhad));
// console.log(serve(cutting));

//============================================================================================================

//====================Type Assertion, Type Unknown and Type Never 04_moreTypes.ts ==========================

//---------- Example 1: using class -------------------
//console.log(numericLenght);
//console.log(pageData);
//console.log(strData);

//============================================================================================================

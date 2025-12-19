/*
Lecture 6: Type Narrowing & Type Guards

Type guard = check(typeof, instanceof, if, is, as, comparisons (a===b , a!==b))
Type narrowing = us check ka result

English : Type narrowing is the process of refining a broader type (like a union) into a more specific type at runtime using checks.

HINDI: TypeScript me jab variable ke paas multiple possible types hote hain (union type),
to hume code likh kar TS ko batana padta hai abhi exact kaunsa type hai.

Kaha use hota hai?
API response
User input
Union types
Redux / Zustand state
Form values

English : Type guards are conditions or functions that help TypeScript determine the specific type of a variable.
👉 Type guards are tools used to achieve type narrowing.

Hindi : Type guards wo checks hote hain jo TypeScript ko batate hain ki variable ka exact type kya hai.
👉 Type guards ka use karke hi type narrowing hoti hai.(typeof,instanceof,in,is,as,)
ex> "type" in obj or typeof x === "string" or err instanceof Error

🔹 Kaha use hota hai?
API data validation
Complex object checking
Library code
Reusable checks
*/

//--------------------------- Example 1: getChai -> import by index.ts --------------------------------------
export function getChai(kind: string | number) {
  // agar ham kind pr hover karte ha to : (parameter) kind: string | number matlab yha string ya to number aa sakta hai
  if (typeof kind === "string") {
    return `making ${kind} of chai...`; // but jab ham yha kind pr hover karte h to yha data types ek dam sure ho jata h ex.agar ham kind pr hover karte ha to : (parameter) kind: string | number
  }
  return `chai orderId : ${kind}`; /// same yha bhi kind pr hover karte h to yha data types ek dam sure ho jata h ex. (parameter) kind: number
}

//  saf saf dekh sakta hu ki hya hame gauranteed data typemil rha hai agar ham string vale kind pr kind. "kind(dot)" karte hi hame string ka method suggest hota hai
//agar ham number wale kind pr kind. karte hai to math method suggest karta hai ye most importaint suggestions hote h jo production me kaam aata hai.
//ab esi ko Narrowing type hota hai.

//found Truthiness narrowing :
// ---------------------------- Example 2: serveChai -> import by index.ts --------------------------------
export function serveChai(msg?: string) {
  if (msg) {
    return `serving ${msg}`;
  }
  return `serving default masala chai`;
}

// ---------------------------- Example 3: orderChai -> import by index.ts --------------------------------
// axostic checks :
//Literal type narrowing:
export function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai...`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai...`;
  }
  return `chai order #${size}`;
}

// ---------------------------- Example 4: using class -> import by index.ts --------------------------------
//Class-based narrowing :
export class KulhadChai {
  serve() {
    return `Serving Kulhad Chai`;
  }
}

export class CuttingChai {
  serve() {
    return `Serving Cutting Chai`;
  }
}

export function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve(); // to ab hame yha pata hai ki kulhadChai wale class ka method call hoga.
  } else {
    return chai.serve(); // yha baki bacha hua class ka method call hoga means CuttingChai class ka method hi call hoga
  }
}

//***hame typescript ek super power deta h khud ke types define karne ke using "type" keyword; type ek guard type checking hai.

//----------------------------------------------------------------------------------------------

type chaiOrder = { type: string; sugar: number };

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: chaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} spoon sugar`;
  }
  return `Serving custom chai: ${item}`;
}

//--------------------------------------------------------------------------

//hamne yha Type Guard bna diya :
type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

//type Guard banane ke bad uska narraving use kar sakte ho

function MakeChai(order: Chai) {
  switch (order.type) {
    case "elaichi":
      return `elaichi chai`;
      break;
    case "ginger":
      return `ginger chai`;
      break;
    case "masala":
      return `Masala chai`;
      break;
    default:
      return `default`;
      break;
  }
}

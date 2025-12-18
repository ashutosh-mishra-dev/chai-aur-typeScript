/*
Lecture 6: Type Narrowing & Type Guards
English : Type narrowing is the process of refining a broader type (like a union) into a more specific type at runtime using checks.
*/

function getChai(kind: string | number) {
  // agar ham kind pr hover karte ha to : (parameter) kind: string | number matlab yha string ya to number aa sakta hai
  if (typeof kind === "string") {
    return `making ${kind} of chai...`; // but jab ham yha kind pr hover karte h to yha data types ek dam sure ho jata h ex.agar ham kind pr hover karte ha to : (parameter) kind: string | number
  }
  return `chai order ${kind}`; /// same yha bhi kind pr hover karte h to yha data types ek dam sure ho jata h ex. (parameter) kind: number
}

//  saf saf dekh sakta hu ki hya hame gauranteed data typemil rha hai agar ham string vale kind pr kind. "kind(dot)" karte hi hame string ka method suggest hota hai
//agar ham number wale kind pr kind. karte hai to math method suggest karta hai ye most importaint suggestions hote h jo production me kaam aata hai.
//ab esi ko Narrowing type hota hai.

//found truthyness :
function serveChai(msg?: string) {
  if (msg) {
    return `serving ${msg}`;
  }
  return `serving default masala chai`;
}

// axostic checks :

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai...`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai...`;
  }
  return `chai order #${size}`;
}

class KulhadChai {
  serve() {
    return `Serving Kulhad Chai`;
  }
}

class CuttingChai {
  serve() {
    return `Serving Cutting Chai`;
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve(); // to ab hame yha pata hai ki kulhadChai wale class ka method call hoga.
  }
}

//***hame typescript ek super power deta h khud ke types define karne ke using "type" keyword; type ek guard type checking hai.

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

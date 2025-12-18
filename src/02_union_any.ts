/*
Lecture 5: understading union and any

UNION TYPE ( | ) : 
English : Union types allow a variable to hold more than one type, providing flexibility while maintaining type safety.

Hindi:Union type ka matlab hota hai ki ek variable ek se zyada type ka ho sakta hai, lekin TypeScript phir bhi type safety maintain karta hai.


any :
English : The any type disables TypeScript’s type checking and allows a variable to hold any value.
TypeScript stops checking types for that variable.

Hindi: any ka matlab hota hai TypeScript ka type-checking band kar dena.
Variable kuch bhi ho sakta hai
TypeScript koi error nahi dikhata, chahe galat code ho

✅ Better option than any → unknown
English : unknown is a safer alternative to any because it forces type checking before use.

Hindi: unknown, any ka safe version hai kyunki use karne se pehle type check karna padta hai.

let value: unknown;

if (typeof value === "string") {
  value.toUpperCase(); // ✅ Safe
}

⭐ Prefer Union / Unknown
❌ Avoid any in real projects

*/

// --------------------------------- Union ex : ----------------------------------------------------------------

let subs: string | number = "1M"; //yha string aur number dono datatype chalega eske alawa aur koi datatypes nhi chalenge
subs = 123;
//subs = true; // error: Type 'boolean' is not assignable to type 'string | number'.

let apiRequest: "pending" | "success" | "error" = "pending"; // ham jaise " " karte hai to hame suggestion deta h pending,success,error ka jo production me bahut kaam aata hai.
apiRequest = "success";
//apiRequest="not-found"; //error :Type '"not-found"' is not assignable to type '"pending" | "success" | "error"'.

let airLineSeate: "aisle" | "window" | "middle" = "middle";
airLineSeate = "aisle";

// --------------------------------- Any ex : ----------------------------------------------------------------

const orders = ["12", "20", "28", "42"];
let currentOrder; // agar ham es variable pr cursor pointer le jate jai to hame "any" suggest karta hai.
// any hame kahta h ki aap ka data type kya h mujhe pta nhi h ya aisa kah sakte hai any bol rha h ki mujhe aap ke data types ka perwah nhi hai.

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder); // but yha hame kuch aisa dikhata h: let currentOrder: string | undefined jo ki galat hai kyuki nicheck agar coe dekhe ham vha number data type le liye

currentOrder = 123;

//agar mujhe es same example ko dusra varible name le ke union banana ho to kar sakte hai

const ordering = ["12", "20", "28", "42"];
let currentOrdering: string | undefined;

for (let ordered of ordering) {
  if (ordered === "28") {
    currentOrdering = ordered;
    break;
  }

  currentOrdering = "11";
}

console.log(currentOrdering);

// hamne currentOrdering me undefined es liy diya becouse console loop ke bahar hai to jiske vajah se error mil rha tha :
// Variable 'currentOrdering' is used before being assigned.

// jiska matlab saf tha agar condition wrong ho jay aur conditon ke andar jaye hi na tab kya ? to typescript sab kuch apne se pahle hi soch leta hai jisse aage koi error na aaye

// any ka use very worst case me kiya jata h jab api se data aata h aur hame pta hi nhi chalta ki data types kya hai ?

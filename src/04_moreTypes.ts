/*

Lecture 7 : Type Assertion, Type Unknown and Type Never in Typescript

Type Assertion :- Type Assertion me "as" ka use hota hai:
TypeScript, mujh par bharosa karo — mujhe pata hai ye value ka type kya hai

is = ID Proof 🪪
“Agar Aadhaar match ho jaye to banda Indian hai”

as = Bol dena 😎
“Ye Indian hi hai, mat poochho”

🔹 Kab use karein?
DOM elements
3rd-party libraries
Legacy JS code

🔹 Kab avoid karein?
User input
API data
Unknown data

Type Unknown : “Mujhe nahi pata is value ka type kya hai” lekin aapko “Pehle check karo ye kya hai”

Sochiye aapne kisi se ek sealed box 📦 liya.
Aapko pata hai box me kuch hai
Lekin ye nahi pata kya hai
👉 Ye hi situation TypeScript me unknown hoti hai.

🔹 Real-world use :
API response
JSON.parse()
User input
Catch block

type never :Ek aisa function jo:
kabhi khatam hi nahi hota
ya har baar error throw karta hai
👉 Wahan never use hota hai.


unknown → data aata hai, pehle check karo
never → yahan code kabhi pahunchna hi nahi chahiye

*/

//----------------------------------- Type Assertions -----------------------------------------------------
//Example 1 numericLenght :
let response: any = "32";
//export let numericLenght: number = response.length;

//ab mujhe numericLenght me response la length janana h but yha agar response pr hover kar rhe hai to datatype any aa rha hai but mai sure hu ki string aane wala h response variable me jo api se aa sakta hai. response. (dot) karta hu to kuch nhi bta rha hai kyu nhi bta rha kyu kai bar ya aise case me hame type assertion foursefully karna padta hai.
//ab hamne jo response.length lagaya bina suggestion ke lagaya apne man se jo ki ese forcefully mhi kahte ye galat h
//forcefully means forcefully bhi suggetion bataiye.

export let numericLenght: number = (response as string).length; //ab ye sahi suggest kar rha h ham yha response ko bol rhe hai aap barosa rakho server se jo data aayega vo string me hi aayega ab ham kah sakte h kiya force fully suggestion dhikhane ki liye bol rhe ha means forcefully Type Assertion kar rhe hai.

//Example 2 bookObject :
type book = { name: string; pages: number };

let bookString = '{ "name": "mahabharat", "pages":3 }';
let bookObject = JSON.parse(bookString) as book;
export const pageData = bookObject.pages;

//Example 3  : ye bahut hi importaint example hai yha pr assertion ka use bahut jyada hota hai dom ke case me
//const inputElement = document.getElementById("username") as HTMLInputElement; // yha type mujhe mila : const inputElement: HTMLInputElement

//----------------------------------- Type Any vs type unknown -----------------------------------------------
let value: any;
value = true;
value = 123;
value = "abc";
value = [1, 2, 3];
value = { name: "abc", age: 33 };
//value.toUppercase();
//ham saf saf dekh pa rhe hai value.toUppercase(); karne pr  kisi bhi prakar ka error nhi dikha rha any lagane ke bad se kyu ki any me sare data types use kar sakte hai ham

let newValue: unknown;
newValue = true;
newValue = 123;
newValue = "abc";
newValue = [1, 2, 3];
newValue = { name: "abc", age: 33 };

//newValue.toUpperCase(); //yha error mila : 'newValue' is of type 'unknown'.
/*
// TypeScript yahan bolega:
// “Ruko!
// Mujhe nahi pata ye string hai ya number ya kuch aur
// bina check ke kaise use kar sakta hoon?”

// ab unknown bol rha h ki aap jab chahe tab datatype nhi change kar sakte aap ko data type check karna hoga
// aap ese type guards ke through sahi kar sakte hai.
//👉 Yahi unknown ka fayda hai
//Ye aapko galti karne se rokta hai

*/

if (typeof newValue === "string") {
  newValue.toUpperCase();
  //Yahan aapne TypeScript ko bola:“Maine check kar liya, ye string hi hai”
}

if (typeof newValue === "number") {
  //newValue.toUpperCase();  // ab yha ERROR: Property 'toUpperCase' does not exist on type 'number'.
  newValue.toFixed(); // right
}

try {
} catch (error) {
  if (error instanceof Error) console.log(error.message);
  console.log("Error :", error);
}

const data: unknown = "chai aur code";
export const strData: string = data as string;

//----------------------------------- Type Any vs type never -----------------------------------------------

//Example 4 :
type Role = "admin" | "user" | "superAdmin";

export function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("redirecting to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("redirecting to User dashboard");
    return;
  }

  role;

  //jab tak type Role = "superAdmin" nhi dete tab: agar ham yha role pr hover karte hai to : (parameter) role: never aata hai.
  //jab tak type Role = "superAdmin" de dete tab: agar ham yha role pr hover karte hai to :(parameter) role: "superAdmin"
}

//Example 5:
// kabhi kabhi aisa hota h jab hame infinite data chahiye hota hai (jaise google server hamesa continue chalta rahta hai jab request aati h vaise hi response send kar dena)
function neverReturn(): never {
  while (true) {} // infinite loop
}

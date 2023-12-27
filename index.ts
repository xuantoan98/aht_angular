import { sumArrayNumbers } from "./b1";
import { IPerson, displayInfor } from "./b2";
import { displayValue } from "./b3";
import { Color, displayColor } from "./b4";
import { Rectangle } from "./b5";
import { IPost, callAPI } from "./b7";

// B1
const result = sumArrayNumbers([1, 2, 3, 4]);
console.log({ result });

// B2
const person: IPerson = {
  name: "Dev Test",
  age: 22,
  email: "devtest@gmail.com",
};
console.log(displayInfor(person))

// B3
console.log(displayValue());

// B4
console.log(displayColor(Color.BLUE));

// B5 - B6
const firstRectangle = new Rectangle(5, 20);
console.log("Diện tích: " + firstRectangle.caculateArea());

// B7
const apiUrl: string = "http://localhost:3000/posts";
callAPI(apiUrl)
  .then((data: IPost[]) => {
    console.log("Data of API:", data);
  })
  .catch((error: Error) => {
    console.error("Error when calling API:", error);
  });

console.log("hello");

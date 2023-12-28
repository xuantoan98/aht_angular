import { sumArrayNumbers } from "./b1";
import { IPerson, displayInfor } from "./b2";
import { displayValue } from "./b3";
import { Color, displayColor } from "./b4";
import { Rectangle } from "./b5";
import { IPost, callAPI } from "./b7";
import { caculateFactorial, checkPrimeNumbers } from "./b8";
import {
  getDiscountedProducts,
  productWithPrice,
  productsList,
  productsUnder100,
  renderDescriptionProduct,
  sumPrice,
} from "./b9";

// B1
const result = sumArrayNumbers([1, 2, 3, 4]);
console.log({ result });

// B2
const person: IPerson = {
  name: "Dev Test",
  age: 22,
  email: "devtest@gmail.com",
};
console.log(displayInfor(person));

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

// B8
const number = 5;
const factorial = caculateFactorial(number);
const isPrime = checkPrimeNumbers(number);
console.log(`Giai thừa của ${number} là: ${factorial}`);
console.log(`${number} ${isPrime ? "là" : "không là"} số nguyên tố `);

// B9
const discountNumber = 10 // 10%
console.log(
  `Tổng giá trị các sản phẩm trong danh sách là: ${sumPrice(productsList)}`
);
console.log('Các sản phẩm có giá lớn hơn 100: ', productWithPrice(productsList));
console.log('Template literials: ', renderDescriptionProduct(productsList));
console.log(`Tổng số sản phẩm có giá nhỏ hơn 100 là: ${ productsUnder100(productsList)}`);
console.log(`Các sản phẩm đã dùng mã giảm giá:`, getDiscountedProducts(productsList, discountNumber));


console.log("hello");

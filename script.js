// 2. Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback.Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback. У випадку якщо товар не знайдено, викликається errorCallback і передається повідомлення про помилку.   

let products = [
    {
        id: 273,
        name: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
        price: 55000,
        description: "Викувано з титану й оснащено революційним чипом A17 Pro, кнопкою дії з можливістю налаштування та ще універсальнішою системою камер Pro"
    },
    {
        id: 274,
        name: "Apple iPhone 15 Pro Max 128GB Natural Titanium",
        price: 50000,
        description: "Викувано з титану й оснащено революційним чипом A17 Pro, кнопкою дії з можливістю налаштування та ще універсальнішою системою камер Pro"
    },
    {
        id: 275,
        name: "Apple iPhone 14 Pro Max 256GB Natural Titanium",
        price: 45000,
        description: "Викувано з титану й оснащено революційним чипом A17 Pro, кнопкою дії з можливістю налаштування та ще універсальнішою системою камер Pro"
    }
];

function getProductDetails(arr, productId, successCallback, errorCallback) {
    let found = false;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].id === productId) {
            found = true;
            successCallback(arr[i]);
            break; 
        }
    }
    if (!found) {
        errorCallback();
    }
}

function successCallback(product) {
    let productDetails = `
    <strong>ID:</strong> ${product.id}<br>
    <strong>Назва:</strong> ${product.name}<br>
    <strong>Ціна:</strong> ${product.price}<br>
    <strong>Опис:</strong> ${product.description}<br>
    `;
    document.getElementById('productDetails').innerHTML = productDetails;
}

function errorCallback() {
    document.getElementById('productDetails').innerHTML = "Такий товар не знайдено";
}

getProductDetails(products, 275, successCallback, errorCallback);


// 4. З об'єкту concerts отримати масив, який буде містити лише імена міст.З масиву потрібно прибрати міста, в яких концерт  уже пройшов і   відсортувати їх у хронологічному порядку.Результат вивести у консоль.
// Очікуваний результат ["Одеса", "Умань", "Харків"]
// Застосувати стрілочні функції
// const concerts = {
//   Київ: new Date("2020-04-01"),
//   Умань: new Date("2025-07-02"),
//   Вінниця: new Date("2020-04-21"),
//   Одеса: new Date("2025-03-15"),
//   Хмельницький: new Date("2020-04-18"),
//   Харків: new Date("2025-07-10"),
// };

const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

const currentDate = new Date();
const cities = [];
const filteredCities = Object.keys(concerts)
    .filter(city => concerts[city] >= currentDate)
    .sort((a, b) => concerts[a] - concerts[b]);

console.log(filteredCities);
document.getElementById('filteredCities').innerHTML = filteredCities;

// 6.Напишіть функцію, яка приймає массив об'єктів і повертає новий массив об'єктів, у якому є знижка на  30 % на всі медикаменти ціна, яких перевищує 300 грн у масиві Надайте ід для кожного медикамента    

const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 }
]

function getnewMedicine(arr) {
    const newMedicine = [];
    let id = 1;

    arr.forEach(item => {
        if (item.price > 300) {
            const discount = 0.3 * item.price;
            newPrice = item.price - discount;}
        else {
            newPrice = item.price;
            }
            const newMedicineItem = {
                id: id++,
                name: item.name,
                price: item.price,
                discountPrice: newPrice
            };

            newMedicine.push(newMedicineItem);
        });
    return newMedicine;
}

const newMedicine = getnewMedicine(medicines);
console.log(newMedicine);

const newMedicineContainer = document.getElementById('newMedicine');
newMedicine.forEach(item => {
    const medicineElement = document.createElement('div');
    medicineElement.textContent = `ID: ${item.id}, Назва: ${item.name}, Ціна: ${item.price}, Ціна зі знижкою: ${item.discountPrice}`;
    newMedicineContainer.appendChild(medicineElement);
});


// 8. Напиши функцію конструктор Storage який створює об'єкти  Для управління складом товарів.  При виклику отримуватиме один агрумент - початковий масив товарів,  і записувати їх у властивість items. 
// Додай методи класу:   getItems() - повертайте масив товарів   addItems(item) - отримує новий товар та додає його до поточних   removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних 

const arr = ["apple", "banana", "mango"];

class Storage {
    constructor(storageItems) {
        this.items = storageItems;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}


const storage = new Storage(arr);
console.log(storage.getItems()); 
document.getElementById('StorageItems1').innerHTML = storage.getItems();

storage.addItem("orange");
console.log(storage.getItems()); 
document.getElementById('StorageItems2').innerHTML = storage.getItems();

storage.removeItem("banana");
document.getElementById('StorageItems3').innerHTML = storage.getItems();

// Поверніть об'єкт, в якому вказано кількість тегів.
// Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

//  const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//     ];

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tagCount = tweets.reduce((acc, tweet) => {
    tweet.tags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
}, {});

const tagCountDiv = document.getElementById('tagCount');
tagCountDiv.textContent = JSON.stringify(tagCount, null, 2);
// 10.Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)  і перевіряє 
// правильність закриття дужок () {} []
//   Якщо рядок містить коректний код функція повертає true.
//   В іншому випадку повертає false

function checkBrackets(str) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastOpeningBracket = stack.pop();
            if (lastOpeningBracket !== bracketPairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const code = 'function someFn() { if (true) { return "hello"; } }';
console.log(checkBrackets(code)); 
document.getElementById('checkBrackets').innerHTML = checkBrackets(code);
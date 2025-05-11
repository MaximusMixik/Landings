

// !!!!!!!!!!!!!!! LESSON 15

//! 00:02:00 ПРодовження опис функції 00:04:00 приклад
// let obj = {
//   name: "Alex",
//   age: 25,
//   city: "Kiev",
//   sayHi: function () {
//     //!	00:10:00 Звернення до данних в обєкті this
//     console.log(`Hi, my name is ${this.name}, i live in ${this.city}`);
//   },
//   sayBye: function () {
//     console.log(`Bye,  ${this.name}`);
//   },
//   //! 00: 19:00 Виклик інших функцій
//   combo: function () {
//     this.sayHi()
//     this.sayBye()
//   }
// }

// obj.sayHi();
// // obj['sayHi'](); //or

// obj.combo();


//! 00: 20:00 приклад
// let student = {
//   name: "Alex",
//   class_: 10,
//   scores: [10, 8, 11,],
//   getMiddleScore: function () {
//     return (this.scores.reduce((sum, score) => sum += score, 0) / this.scores.length).toFixed(1);
//   },
//   getCountSearchScore: function (searchScore) {
//     return this.scores.reduce((count, score) => score === searchScore ? count + 1 : count, 0)
//   }
// }

// console.log(student.getMiddleScore())
// console.log(student.getCountSearchScore(10))

//! 00: 29:00 приклад запису вхідних данних задачі, розв'язок
// let product = {
//   // ----------- Властивості - характеристики ---------
//   // назва товару
//   title: 'Coffee',
//   // ціна
//   price: 430,
//   // кількість
//   count: 32,
//   // вартість зберігання в день
//   storePricePerDay: 3,

//   //------------ Методи (функіональні можливості) -------------
//   // визначення загальної вартості наявної кількості одиниць
//   getAllPrices: function () {
//     return this.count * this.price
//   },
//   // визначити вартість зберігання для заданої кількості днів
//   getStorePrice: function (days) {
//     return days * this.storePricePerDay
//   },
//   // зменшення ціни на вказану кількість відсотків
//   reducePrice: function (percent) {
//     this.price *= (1 - percent / 100)
//   },

//   // збільшення ціни на вказану кількість відсотків
//   increasePrice: function (percent) {
//     this.price *= (1 + percent / 100)
//   },
// }

// console.log(product.getStorePrice(3))
// console.log(product.getAllPrices())

// product.increasePrice(20)
// console.log(product.getAllPrices())
// product.reducePrice(20)
// console.log(product.getAllPrices())


//! 00: 51:00 Спеціальні методи
// let product = {
//   title: 'Coffee',
//   price: 430,
//   count: 32,
//   storePricePerDay: 3,
//   //! toString
//   toString: function () {
//     return `${this.title} - ${this.price} - ${this.count} - ${this.storePricePerDay}`
//   },
//   //! valueOf
//   valueOf: function () {
//     return this.price * this.count
//   }
// }

// //! виклик toString
// // console.log('hello! ' + product.toString())
// // document.write(product)

// //! виклик valueOf
// console.log(product.valueOf() * 3)
// // document.write(product * 3)


//! 01:08:00 Приклад. Описати об’єкт «Інвойс»
// let invoice = {
//   // ----- Властивості-характеристики (дані) ----
//   // номер інвойса
//   number: 422532343,
//   // перелік виконаних робіт
//   completedTasks: ['create tasks new obj', 'lorem slkfsfjla asjfdaslkdjf'],
//   // сума грошей
//   money: 50000,

//   // ----- Методи --------------------
//   // перетворення у рядок (вивести номер інвойса, кількість виконаних робіт, сума грошей
//   toString: function () {
//     return ` номер інвойса: ${this.number} <br>  кількість виконаних робіт: ${this.completedTasks.length} <br>  сума грошей: ${this.money}uan <br>`
//   },
//   // перетворення у число (повертається сума грошей)
//   valueOf: function () {
//     return this.money
//   }
// }
// document.write(invoice) //invoice.toString()
// document.write(invoice + 'uan')  //invoice.valueOf()+...



//! 01: 14:00 Зміна данних в середині константи
// let invoice = {
//   number: 422532343,
//   money: 50000,
// }

// Object.freeze(invoice.number)
// invoice.money = 333

// console.log(invoice.money)

// //! 01:24:00 Масив з назвами
// let objKeys = Object.keys(invoice)
// console.log(objKeys)

// //! 01:25:00 - масив з властивостями
// let objValues = Object.values(invoice)
// console.log(objValues)



//! 01: 26:00 Функції фабрики 01:32:00 приклад
// function getPlayer(initName, initNumber, initAge) {
//   return {
//     name: initName,
//     number: initNumber,
//     age: initAge
//   }
// }

// const player1 = getPlayer('Max', 23, 25)
// const player2 = getPlayer('Nick', 25, 30)
// console.log(player1)
// console.log(player2)


//! 01:30:00 Конструктори об'єктів, 01: 34:00  приклад

// // робота під капотом
// // function getPlayer(initName, initNumber, initAge) {
// //   let this = {}
// //   this.name = initName
// //   this.number = initNumber
// //   this.age = initAge
// //   return this
// // }
// function Player(initName, initNumber, initAge) {   // (з великої літери - назва об"єкта реальної дійсності)

//   this.name = initName
//   this.number = initNumber
//   this.age = initAge

// }

// //! 01: 46:00Опис спільних властивостей (при створенні не дублюються функції) визначається по-за межами функції конструктором, для оптимізації та щоб не було дублювання, приклад
// Player.prototype.isPensionerAge = function (pensionerAger = 65) {
//   return pensionerAger - this.age
// }
// Player.prototype.teamTitle = 'BigFoot'
// Player.prototype.age = 23
// const player1 = new Player('Max', 23, 25)
// //! Коли Використовується new функції не потрібно зававати змінну для пустого обєкта та повертати вже наповнений об'єкт, все відбувається автоматично
// console.log(player1)

// console.log(player1.isPensionerAge());
// console.log(player1.teamTitle);
// console.log(player1.age);


//! 02:02:00 гра рулетка
//       Приклад. Гра «Рулетка»

// function Roulette(cellNumber, minScore = -100, maxScore = 100) {
//   // -----Унікальні  Властивості для кожного -------
//   this.cellsNumber = cellNumber
//   this.minScore = minScore
//   this.maxScore = maxScore
//   // генерування полів рулетки
//   this.gameField = this.generateGameField()
//   // виведення списку згенерованих значень
//   this.showField = this.generateShowField()
//   // приведення до рядка
//   this.toString = this.toString()
//   // крутити рулетку (отримання випадкового балу)
//   this.randomNumber = this.getRandomScore()
//   // Гра
//   this.gamePlay = this.playGame()
// }
// // ----- Спільні Методи та функції ----------
// // генерування полів рулетки
// Roulette.prototype.getRandomNumber = function (minValue, maxValue) {
//   minValue ??= this.minScore
//   maxValue ??= this.maxScore
//   return minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
// }
// Roulette.prototype.generateGameField = function () {
//   let gameField = []
//   for (let cellNum = 0; cellNum < this.cellsNumber; cellNum++) {
//     let randScore = this.getRandomNumber()
//     gameField.push(randScore)
//   }
//   return gameField
// }
// // виведення списку згенерованих значень
// Roulette.prototype.generateShowField = function () {
//   return console.table(this.gameField)
// }
// // Roulette.showField
// // приведення до рядка
// Roulette.prototype.toString = function () {
//   return `${this.gameField}`
// }
// //! крутити рулетку (отримання випадкового балу)
// Roulette.prototype.getRandomScore = function () {
//   const randomIndex = this.getRandomNumber(0, this.cellsNumber)
//   return this.gameField[randomIndex]
// }

// // ! метод гри(користувач крутить рулетку поки не відмовиться)
// //           поки користувач хоче крутити
// //                визначаємо рандомне значення рулетки
// //                додаємо до загальної суми
// //                повідомляємо користувача про результат та загальну кількість балів

// Roulette.prototype.playGame = function () {
//   let totalSum = 0
//   while (confirm("Крутити Далі?")) {
//     const randScore = this.getRandomNumber()
//     totalSum += randScore
//     alert(` ${randScore > 0 ? `Ви виграли : ${randScore}` : `Ви програли ${randScore}`} <br> Загальна сума ${totalSum}`)
//   }
// }


// // let game = new Roulette(20, -400, 400)
// // console.log(game.randomNumber)

// let newRoulette = new Roulette(10, 300, 300)
// newRoulette.playGame()


//! 02: 29:00 Використання класів
// class Range {
//   constructor(defaultMin, defaultMax) {
//     // Опис унікальних полів
//     this.min = defaultMin
//     this.max = defaultMax
//     this.range = this.getRange()
//     this.random = this.getRandomValue()
//     this.string = this.toString()
//   }

//   // Опис загальних  методів полів і функцій
//   getRange(value) {
//     return value >= this.min && value <= this.max
//   }
//   getRandomValue() {
//     return this.min + Math.floor(Math.random() * (this.max - this.min + 1))
//   }
//   toString() {
//     return `${this.min} - ${this.max}`
//   }
// }

// let range = new Range(1, 100)
// console.log(range.getRange(0))
// console.log(range.random)
// console.log(range.string)



// !  02: 35:00 Практичний приклад

//  Розробити клас «Передбачувач». Дозволяє кожні вказані кількість секунд отримувати передбачення


// class Predictor {
//   constructor(predictorInterval, predictionList) {
//     // Властивості :
//     //      масив можливоих передбачень,
//     //      інтервал між передбаченнями
//     this.predictorInterval = predictorInterval
//     this.predictionList = predictionList
//   }
//   // Методи:
//   //      вибір випадкового передбачення

//   getRandomPrediction() {
//     const randIndex = Math.floor(Math.random() * this.predictionList.length)
//     return this.predictionList[randIndex]
//   }
//   //      метод run, що ініціює запуск таймера і генерування передбачень
//   run() {
//     setInterval(() => {
//       // alert(this.getRandomPrediction())
//       console.log(this.getRandomPrediction())
//     }, this.predictorInterval)
//   }

// }

// const ptedictionList = [
//   'PEACE',
//   'LOVE',
//   'MONEY',
//   'BIG MONEY',
//   'BEER',
//   'Шовдарь',
//   'Пікниця',
// ]

// // let prediction1 = new Predictor(1000, ptedictionList)
// // prediction1.run()

// console.log(Predictor)


//! 03:00:00 Позичання методів
// let myObj1 = {
//   a: 21,
//   b: 7,
//   show: function () {
//     return console.log(this.a)
//   }
// }
// myObj1.show()
// let myObj2 = {
//   a: 6,
//   c: 7,
// }
// myObj2.newShow = myObj1.show
// myObj2.newShow()


//! 03:04:00 this call 03:06:00 this apply
// let obj1 = {
//   numbers: [2, 3, 8, 23, 4, 20],
//   getSum: function () {
//     let result = this.numbers.reduce((sum, num) => sum += num, 0);
//     return console.log(` result = ${result}`)
//   }
// }


// let obj2 = {
//   numbers: [4, 5, 7, 10, 20, 2, 3, 8, 23],
//   getRange: function (min, max) {
//     let result = this.numbers.reduce((multiply, num) => num > min && num < max ? multiply *= num : multiply, 1);
//     return console.log(` result = ${result}`)
//   }
// }

// // Використати обидва методи стосовно обидвох об’єктів(використати call, apply)
// obj1.getSum()
// obj1.getSum.call(obj2)
// obj2.getRange(1, 8)


// obj2.getRange.call(obj1)

//! My test
// let myObj = {
//   name: 'Max',
//   yearBorn: 1995,
//   getCurrentAge: function () {
//     let currentDate = new Date().getFullYear()
//     return currentDate - this.yearBorn
//   },
//   toString: function () {
//     return `${this.name}, current age: ${this.getCurrentAge()}`
//   },
//   valueOf: function () {
//     return this.getCurrentAge()
//   }
// }
// console.log(Object.keys(myObj))
// console.log(myObj.getCurrentAge())


// let month = 5
// const months = 12
// let currentYear = Math.floor(months / 12)
// let currentMonth = (months + month) % 12
// console.log(`year = ${currentYear}, month ${currentMonth}`)



// let currentDays = 365
// let days = ((currentDays - 1) % 30) + 1
// let months = Math.floor(currentDays / 30)
// let years = Math.floor(currentDays / 365)
// console.log(days)
// console.log(months)
// console.log(years)


// TEST +HW
// const obj = {
// 	name: 'Max',
// 	age: 29,
// 	toString: function () {
// 		return ` ${this.name}, age ${this.age}`
// 	},
// 	valueOf: function () {
// 		return this.age
// 	},
// 	getNewAge: function (years) {
// 		return years + this.age
// 	}
// }

// console.log(obj)

// console.log('hello' + obj)
// console.log(12 * obj)
// console.log(obj.getNewAge(3))

//! function constructor
// function Player(initName, initAge, initNumber) {
// 	this.name = initName
// 	this.age = initAge
// 	this.number = initNumber
// }

// Player.prototype.family = 'Smolyak'

// const team = [
// 	new Player('Max', 29, 22),
// 	new Player('Alexandr', 51, 13),
// 	new Player('Yulia', 50, 29),
// ]
// console.log(team)
// console.log(team[0].name)
// console.log(team[0].family)






// Задача 0. Дано два об’єкта.
// Обидва містять масив цілих чисел.
// При цьому у одному з них є функція знаходження суми,
// а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів(використати call, apply)
// const obj1 = {
// 	numbers: [1, 2, 3, 4, 5, 6],
// 	getSum: function () {
// 		return this.numbers.reduce((sumNum, num) => sumNum + num, 0)
// 	}
// }
// const obj2 = {
// 	numbers: [11, 12, 13, 14, 15, 16],
// 	getProduct: function (min = 3, max = 15) {
// 		return this.numbers.reduce((products, num) => num > min && num < max ? products * num : products, 1)
// 	}
// }
// console.log(obj1.getSum())
// console.log(obj2.getProduct())
// console.log(obj1.getSum.call(obj2))
// console.log(obj2.getProduct.call(obj1))
// console.log(obj1.getSum.apply(obj2))
// console.log(obj2.getProduct.apply(obj1, [2, 5]))



// Задача 1.  Створити клас «Тир».
// У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Поля(властивості)
// Масив, у якому зберігається поле з зайцями
// Методи(дії)
// Метод пострілу(задається позиція пострілу)
// Виведення ігрового поля
// class Tier {
// 	constructor(fieldLength, rabits) {
// 		this.rabits = rabits
// 		this.fieldLength = fieldLength
// 		this.field = this.createField()
// 	}
// 	createField() {
// 		const arr = new Array(this.fieldLength).fill(0)
// 		for (let i = this.rabits; i > 0;) {
// 			const rand = Math.floor(Math.random() * arr.length)
// 			if (arr[rand] === 0) {
// 				i--
// 				arr[rand] = 1
// 			}
// 		}
// 		return arr
// 	}
// 	userShot() {
// 		let userShot, res
// 		do {
// 			userShot = parseInt(prompt(`user shot 0-${this.fieldLength}`, 1))
// 			if (isNaN(userShot)) break
// 			if (this.field[userShot] === 1) {
// 				this.rabits--
// 				this.field[userShot] = 0
// 				res = `you shoot 1 rabbit, last ${this.rabits}`
// 			}
// 			else res = 'try again'
// 			alert(res)
// 		}
// 		while (this.rabits > 0)
// 		alert(this.field.includes(1) ? 'lose!' : 'win!')
// 	}
// 	showField() {
// 		console.log(this.field)
// 	}
// }

// let tier1 = new Tier(parseInt(prompt('field size', 10)), parseInt(prompt('rabbits', 3)))
// tier1.userShot()
// tier1.showField()


// Задача 2. Створити об’єкт «Авто».
// Авто

// Поля(властивості)
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів

// Методи(дії)
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів
// const auto = {
// 	mark: "Audi",
// 	fuelBack: 50,
// 	enableFuel: 15,
// 	sits: 3,
// 	passangers: 2,
// 	addFuel: function (liters) {
// 		liters = Math.abs(liters)
// 		let res
// 		if (liters + this.enableFuel <= this.fuelBack) {
// 			this.enableFuel += liters
// 			res = `sucsesfuly added ${liters} l, now you have ${this.enableFuel} l`
// 		} else {
// 			let moreThanBackSize = liters + this.enableFuel - this.fuelBack
// 			let canAdded = liters - moreThanBackSize
// 			this.enableFuel += canAdded
// 			res = `sucsesfuly added  ${canAdded} l,\nthis are more than you need ${moreThanBackSize} l \nnow you have ${this.enableFuel} l`
// 		}
// 		return res
// 	},
// 	toString: function () {
// 		return `passangers number ${this.passangers}`
// 	},
// 	addPass: function (passangers) {
// 		let res
// 		if (passangers + this.passangers <= this.sits) {
// 			this.passangers += passangers
// 			res = `sucsessfully added ${passangers}, now you have ${this.passangers} passangers`
// 		}
// 		else res = ` you can't add ${passangers}passangers, becouse you have ${this.passangers} passangers`
// 		return res
// 	},
// 	removePass: function (passangers) {
// 		let res
// 		// passangers = Math.abs(passangers)
// 		if (this.passangers - passangers >= 0) {
// 			this.passangers -= passangers
// 			res = `sucsessfully remove ${passangers}, now you have ${this.passangers} passangers`
// 		}
// 		else res = ` you can't remove ${passangers}passangers, becouse you have ${this.passangers} passangers`
// 		return res
// 	},
// }

// console.log(auto.addFuel(2))
// console.log(auto.addFuel(55))

// console.log(auto.toString())
// console.log(auto.addPass(1))
// console.log(auto.removePass(3))
// console.log(auto.removePass(5))
// console.log(auto.addPass(2))

// Задача 3. Розробити клас MultChecker для перевірки таблиці множення
// Поля
// Число, яке перевіряємо(наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей
// Методи
// Генерування прикладу(метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render

// class MultChecker {
// 	constructor(number) {
// 		this.number = number
// 		this.answeredTrueCounter = 0
// 		this.answeredFalseCounter = 0
// 		this.generateExample()
// 	}
// 	randNumber(min = 1, max = 9) {
// 		return min + Math.floor(Math.random() * (max - min + 1))
// 	}
// 	generateExample() {
// 		let userAnswer
// 		do {
// 			const secondNumber = this.randNumber()
// 			userAnswer = parseInt(prompt(`${this.number} * ${secondNumber} = ?`))
// 			if (isNaN(userAnswer)) break
// 			const correctMeaning = this.number * secondNumber
// 			this.checkAnswer(userAnswer, correctMeaning)
// 		} while (!isNaN(userAnswer))

// 		this.render()
// 	}
// 	checkAnswer(userAnswer, correctMeaning) {
// 		userAnswer === correctMeaning ? this.answeredTrueCounter++ : this.answeredFalseCounter++
// 	}
// 	render() {
// 		document.write(`answeredTrueCounter = ${this.answeredTrueCounter} <br> answeredFalseCounter = ${this.answeredFalseCounter}`)
// 	}
// }

// const mult1 = new MultChecker(7)

// Задача 4. Розробити клас Baner
// Поля
// Масив об’єктів(графічних зображень та посилань на сайти)
// методи
// Метод випадкового вибору об’єкта(графічного зображення та посилання)
// Метод виведення випадкового банера

// class Baner {
// 	constructor(media) {
// 		this.media = media
// 		this.getRandomBanner()
// 	}
// 	randomIndex(min = 0, max = this.media.length - 1) {
// 		return min + Math.floor(Math.random() * (max - min + 1))
// 	}
// 	getRandomBanner() {
// 		if (this.media.length > 0) {
// 			const currentBanner = this.media[this.randomIndex()]
// 			this.showBanner(currentBanner)
// 		}
// 		else console.log('no has media')
// 	}
// 	showBanner(content) {
// 		document.write(`<a href="${content.link}">
// 		<img src="${content.image}" alt="Image" style="width: 100px; height: 100px; object-fit:cover;" >
// 	</a>`)
// 	}
// }

// const arr = [
// 	{
// 		image: 'https://images.unsplash.com/photo-1745949779026-f7fdd1470f8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 		link: 'https://unsplash.com/photos/mountains-are-visible-in-the-cars-side-mirror-sPAW5PxmWeM'
// 	},
// 	{
// 		image: 'https://images.unsplash.com/photo-1746102268391-a17760aff398?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 		link: 'https://unsplash.com/photos/a-mosques-dome-and-roof-against-the-sky-FB4P3KkK0ZI'
// 	},
// ]
// const banner = new Baner(arr)


// Задача 5. Розробити клас «Керівник танців»
// Поля
// Масив імен хлопців
// Масив імен дівчат

// Методи
// Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run, який ініціює через кожні 5 секунд виведення нової пари для танців
// class DanceTrainer {
// 	constructor(boys, girls) {
// 		this.boys = boys
// 		this.girls = girls

// 		this.showPare()
// 		this.run()
// 	}
// 	randomIndex(min, max) {
// 		return min + Math.floor(Math.random() * (max - min + 1))
// 	}
// 	getRandomPerson(arr) {
// 		return arr[this.randomIndex(0, arr.length - 1)]
// 	}
// 	showPare() {
// 		document.write(`${this.getRandomPerson(this.boys)} and ${this.getRandomPerson(this.girls)} <br>`)
// 	}
// 	run() {
// 		setInterval(() => {
// 			this.showPare()
// 		}, 5000)
// 	}
// }

// const group1 = new DanceTrainer(['Billy', 'Terner', 'Sam'], ['Idy', 'Gigy', 'Anna', 'Vladyslava'])



class Player {
	constructor(body) {

		this.audio = body.querySelector('#audio')
		this.playPauseButton = body.querySelector('#playPause')
		this.playPauseButton.addEventListener('click', () => this.togglePlay())


		this.playState = false
		// volume
		this.audio.volume = 0.5

		this.reduceButton = body.querySelector('#reduce')
		this.increaseButton = body.querySelector('#increase')

		// console.log(this.audio.ended)
		// console.log(this.audio.HTMLMediaElement.audioTracks)
		this.reduceButton.addEventListener('click', () => this.reduceVolume())
		this.increaseButton.addEventListener('click', () => this.increaseVolume())

		// range
		this.volumeRange = body.querySelector('#volumeRange')
		this.volumeRange.addEventListener('change', (e) => this.updateVolume(e))


		// this.soundToggleButton = body.querySelector('#soundToggle')
		// this.soundToggleButton.addEventListener('click', (e) => this.soundToggle(e))
	}

	// document.write('\u00A9')
	// soundToggle(e) {
	// 	const button = e.target

	// 	// if (this.audio.paused && this.playState) {

	// 	// }

	// 	// if (this.playState) {
	// 	// 	console.log('mute')
	// 	// 	this.pauseAndMute()
	// 	// 	button.innerHTML = '🔇'
	// 	// }
	// 	// else {
	// 	// 	console.log('play')
	// 	// 	this.playAudio()
	// 	// 	button.innerHTML = '🔊'
	// 	// }
	// }

	updateVolume(e) {
		const input = e.target
		this.audio.volume = input.value

		this.volumeState()

		if (input.value < 0.1) {
			this.pauseAndMute()
		}
		else {
			this.playAudio()
		}
	}
	pauseAndMute() {
		this.audio.volume = 0
		this.audio.muted
		this.audio.pause();
		console.log('muted/paused')
		this.playState = false

	}
	playAudio() {
		if (this.audio.paused && this.playState) {
			this.audio.play();
			this.playState = true

		}
	}
	reduceVolume() {
		if (this.audio.volume < 1) {
			const val = ((this.audio.volume * 10) + (0.1 * 10)) / 10
			// console.log(`(${this.audio.volume} * 10 - (0.1 * 10)) / 10 = ${val}`)
			this.audio.volume = val

			this.playAudio()
			// if (this.audio.paused && this.playState) {
			// 	this.audio.play();
			// }
			this.volumeState()
		}
	}
	increaseVolume() {
		if (this.audio.volume >= 0.2) {
			const val = ((this.audio.volume * 10) - (0.1 * 10)) / 10
			// console.log(`(${this.audio.volume} * 10 - (0.1 * 10)) / 10 = ${val}`)
			this.audio.volume = val
		}
		else {
			this.pauseAndMute()
			// this.audio.volume = 0
			// this.audio.muted
			// this.audio.pause();
			// console.log('muted/paused')
		}
		this.volumeState()
	}
	volumeState() {
		const percents = Math.round(this.audio.volume * 100)
		console.log(`${percents}%`)
	}
	togglePlay() {
		if (this.audio.paused) {
			this.audio.play();
			this.playState = true
		} else {
			this.audio.pause();
			this.playState = false
		}
	}
}

window.onload = () => {
	body = document.querySelector('.player')
	if (body) {
		const p1 = new Player(body)
	}
}


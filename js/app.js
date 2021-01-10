'use strict';

const locationCookies = (city) => {
	return document.querySelectorAll(`.${city} ul li span`);
};

const seattleCookies = locationCookies('seattle');
const seattleBtn = document.querySelector('.seattle');

const tokyoCookies = locationCookies('tokyo');
const tokyoBtn = document.querySelector('.tokyo');

const dubaiCookies = locationCookies('dubai');
const dubaiBtn = document.querySelector('.dubai');

const parisCookies = locationCookies('paris');
const parisBtn = document.querySelector('.paris');

const limaCookies = locationCookies('lima');
const limaBtn = document.querySelector('.lima');

//seattle city
const seattle = {
	minCustomerPerHour: 23,
	maxCustomerPerHour: 65,
	averageCookiePerCustomer: 6.3,
	numberOfCustomers() {
		for (let i = 0; i < 14; i++) {
			this.numberOfCustomersPerHour.push(Math.floor(Math.random() * 100 + 1));
		}
	},
	numberOfCustomersPerHour: [],
	purchasedCookiesPerHour() {
		for (let i = 0; i < this.numberOfCustomersPerHour.length; i++) {
			this.numberOfPurchasedCookies.push(
				Math.floor(
					this.averageCookiePerCustomer * this.numberOfCustomersPerHour[i],
				),
			);
		}
	},
	numberOfPurchasedCookies: [],
};

seattle.numberOfCustomers();
seattle.purchasedCookiesPerHour();
seattleCookies.forEach((cookie) => {
	for (let i = 0; i < seattle.numberOfPurchasedCookies.length; i++) {
		seattleCookies[i].textContent =
			seattle.numberOfPurchasedCookies[i] + ' cookies';
	}
});

let seattleFlag = true;
seattleBtn.addEventListener('click', () => {
	if (seattleFlag) {
		document.querySelector('.seattle ul').classList.remove('hidden');
		seattleFlag = false;
	} else {
		document.querySelector('.seattle ul').classList.add('hidden');
		seattleFlag = true;
	}
});

const seattleTotal = document.querySelector('.seattle ul li .total');
seattleTotal.textContent =
	seattle.numberOfPurchasedCookies.reduce((acc, cookie) => {
		return (acc += cookie);
	}) + ' cookies';

//end of seattle city

//Tokyo city
const tokyo = {
	minCustomerPerHour: 23,
	maxCustomerPerHour: 65,
	averageCookiePerCustomer: 6.3,
	numberOfCustomers() {
		for (let i = 0; i < 14; i++) {
			this.numberOfCustomersPerHour.push(Math.floor(Math.random() * 100 + 1));
		}
	},
	numberOfCustomersPerHour: [],
	purchasedCookiesPerHour() {
		for (let i = 0; i < this.numberOfCustomersPerHour.length; i++) {
			this.numberOfPurchasedCookies.push(
				Math.floor(
					this.averageCookiePerCustomer * this.numberOfCustomersPerHour[i],
				),
			);
		}
	},
	numberOfPurchasedCookies: [],
};

tokyo.numberOfCustomers();
tokyo.purchasedCookiesPerHour();
tokyoCookies.forEach((cookie) => {
	for (let i = 0; i < tokyo.numberOfPurchasedCookies.length; i++) {
		tokyoCookies[i].textContent =
			tokyo.numberOfPurchasedCookies[i] + ' cookies';
	}
});

let tokyoFlag = true;
tokyoBtn.addEventListener('click', () => {
	if (tokyoFlag) {
		document.querySelector('.tokyo ul').classList.remove('hidden');
		tokyoFlag = false;
	} else {
		document.querySelector('.tokyo ul').classList.add('hidden');
		tokyoFlag = true;
	}
});

const tokyoTotal = document.querySelector('.tokyo ul li .total');
tokyoTotal.textContent =
	tokyo.numberOfPurchasedCookies.reduce((acc, cookie) => {
		return (acc += cookie);
	}) + ' cookies';

//end of tokyo city

//Dubai city
const dubai = {
	minCustomerPerHour: 23,
	maxCustomerPerHour: 65,
	averageCookiePerCustomer: 6.3,
	numberOfCustomers() {
		for (let i = 0; i < 14; i++) {
			this.numberOfCustomersPerHour.push(Math.floor(Math.random() * 100 + 1));
		}
	},
	numberOfCustomersPerHour: [],
	purchasedCookiesPerHour() {
		for (let i = 0; i < this.numberOfCustomersPerHour.length; i++) {
			this.numberOfPurchasedCookies.push(
				Math.floor(
					this.averageCookiePerCustomer * this.numberOfCustomersPerHour[i],
				),
			);
		}
	},
	numberOfPurchasedCookies: [],
};

dubai.numberOfCustomers();
dubai.purchasedCookiesPerHour();
dubaiCookies.forEach((cookie) => {
	for (let i = 0; i < dubai.numberOfPurchasedCookies.length; i++) {
		dubaiCookies[i].textContent =
			dubai.numberOfPurchasedCookies[i] + ' cookies';
	}
});

let dubaiFlag = true;
dubaiBtn.addEventListener('click', () => {
	if (dubaiFlag) {
		document.querySelector('.dubai ul').classList.remove('hidden');
		dubaiFlag = false;
	} else {
		document.querySelector('.dubai ul').classList.add('hidden');
		dubaiFlag = true;
	}
});

const dubaiTotal = document.querySelector('.dubai ul li .total');
dubaiTotal.textContent =
	dubai.numberOfPurchasedCookies.reduce((acc, cookie) => {
		return (acc += cookie);
	}) + ' cookies';

//end of dubai city

//Paris city
const paris = {
	minCustomerPerHour: 23,
	maxCustomerPerHour: 65,
	averageCookiePerCustomer: 6.3,
	numberOfCustomers() {
		for (let i = 0; i < 14; i++) {
			this.numberOfCustomersPerHour.push(Math.floor(Math.random() * 100 + 1));
		}
	},
	numberOfCustomersPerHour: [],
	purchasedCookiesPerHour() {
		for (let i = 0; i < this.numberOfCustomersPerHour.length; i++) {
			this.numberOfPurchasedCookies.push(
				Math.floor(
					this.averageCookiePerCustomer * this.numberOfCustomersPerHour[i],
				),
			);
		}
	},
	numberOfPurchasedCookies: [],
};

paris.numberOfCustomers();
paris.purchasedCookiesPerHour();
parisCookies.forEach((cookie) => {
	for (let i = 0; i < paris.numberOfPurchasedCookies.length; i++) {
		parisCookies[i].textContent =
			paris.numberOfPurchasedCookies[i] + ' cookies';
	}
});

let parisFlag = true;
parisBtn.addEventListener('click', () => {
	if (parisFlag) {
		document.querySelector('.paris ul').classList.remove('hidden');
		parisFlag = false;
	} else {
		document.querySelector('.paris ul').classList.add('hidden');
		parisFlag = true;
	}
});

const parisTotal = document.querySelector('.paris ul li .total');
parisTotal.textContent =
	paris.numberOfPurchasedCookies.reduce((acc, cookie) => {
		return (acc += cookie);
	}) + ' cookies';

//end of paris city

//Lima city
const lima = {
	minCustomerPerHour: 23,
	maxCustomerPerHour: 65,
	averageCookiePerCustomer: 6.3,
	numberOfCustomers() {
		for (let i = 0; i < 14; i++) {
			this.numberOfCustomersPerHour.push(Math.floor(Math.random() * 100 + 1));
		}
	},
	numberOfCustomersPerHour: [],
	purchasedCookiesPerHour() {
		for (let i = 0; i < this.numberOfCustomersPerHour.length; i++) {
			this.numberOfPurchasedCookies.push(
				Math.floor(
					this.averageCookiePerCustomer * this.numberOfCustomersPerHour[i],
				),
			);
		}
	},
	numberOfPurchasedCookies: [],
};

lima.numberOfCustomers();
lima.purchasedCookiesPerHour();
limaCookies.forEach((cookie) => {
	for (let i = 0; i < lima.numberOfPurchasedCookies.length; i++) {
		limaCookies[i].textContent = lima.numberOfPurchasedCookies[i] + ' cookies';
	}
});

let limaFlag = true;
limaBtn.addEventListener('click', () => {
	if (limaFlag) {
		document.querySelector('.lima ul').classList.remove('hidden');
		limaFlag = false;
	} else {
		document.querySelector('.lima ul').classList.add('hidden');
		limaFlag = true;
	}
});

const limaTotal = document.querySelector('.lima ul li .total');
limaTotal.textContent =
	lima.numberOfPurchasedCookies.reduce((acc, cookie) => {
		return (acc += cookie);
	}) + ' cookies';

//end of lima city

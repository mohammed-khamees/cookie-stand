'use strict';
const cities = document.querySelector('.cities');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close');
const addCity = document.querySelector('.add-city');
const addBtn = document.querySelector('.add');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const times = [
	'6:00am',
	'7:00am',
	'8:00am',
	'9:00am',
	'10:00am',
	'11:00am',
	'12:00pm',
	'1:00pm',
	'2:00pm',
	'3:00pm',
	'4:00pm',
	'5:00pm',
	'6:00pm',
	'7:00pm',
	'Daily Location Total',
];

const maxMinCustomer = [
	{ city: 'seattle', minCustomer: 23, maxCustomer: 65, average: 6.3 },
	{ city: 'tokyo', minCustomer: 3, maxCustomer: 24, average: 1.2 },
	{ city: 'dubai', minCustomer: 11, maxCustomer: 38, average: 3.7 },
	{ city: 'paris', minCustomer: 20, maxCustomer: 38, average: 2.3 },
	{ city: 'lima', minCustomer: 2, maxCustomer: 16, average: 4.6 },
];

const totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const Location = function (
	minCustomerPerHour,
	maxCustomerPerHour,
	averageCookiePerCustomer,
	numberOfCustomersPerHour,
	numberOfPurchasedCookies,
) {
	this.minCustomerPerHour = minCustomerPerHour;
	this.maxCustomerPerHour = maxCustomerPerHour;
	this.averageCookiePerCustomer = averageCookiePerCustomer;
	this.numberOfCustomersPerHour = numberOfCustomersPerHour;
	this.numberOfPurchasedCookies = numberOfPurchasedCookies;
};

const tableOfContent = document.createElement('table');

Location.prototype.numberOfCustomers = function () {
	for (let i = 0; i < 14; i++) {
		this.numberOfCustomersPerHour.push(
			Math.floor(
				Math.random() * this.maxCustomerPerHour + this.minCustomerPerHour,
			),
		);
	}
};

Location.prototype.purchasedCookiesPerHour = function () {
	for (let i = 0; i < this.numberOfCustomersPerHour.length; i++) {
		this.numberOfPurchasedCookies.push(
			Math.floor(
				this.averageCookiePerCustomer * this.numberOfCustomersPerHour[i],
			),
		);
	}
};

Location.prototype.render = function (numberOfPurchasedCookies, location) {
	const tableRows = document.createElement('tr');
	tableOfContent.appendChild(tableRows);
	for (let i = 0; i < 16; i++) {
		const tableCol = document.createElement('td');
		const tableColhead = document.createElement('th');
		if (i === 0) {
			tableColhead.textContent = location;
			tableRows.appendChild(tableColhead);
		} else if (i === 15) {
			tableCol.textContent = numberOfPurchasedCookies.reduce((acc, num) => {
				return (acc += num);
			});
			tableRows.appendChild(tableCol);
		} else {
			tableCol.textContent = numberOfPurchasedCookies[i - 1];
			tableRows.appendChild(tableCol);
			totals[i - 1] += numberOfPurchasedCookies[i - 1];
		}
	}
};

window.addEventListener('DOMContentLoaded', () => {
	table();
	resultSales();
	totalRow();
});

btn.addEventListener('click', () => {
	addCity.classList.add('show');
	main.classList.add('main-bg');
	tableOfContent.classList.add('table-appeare');
	footer.classList.add('table-appeare');
	btn.style.display = 'none';
});

close.addEventListener('click', () => {
	addCity.classList.remove('show');
	main.classList.remove('main-bg');
	tableOfContent.classList.remove('table-appeare');
	footer.classList.remove('table-appeare');
	btn.style.display = 'block';
});

addBtn.addEventListener('click', (e) => {
	e.preventDefault();

	const cityAdd = document.getElementById('cityAdd');
	const min = document.getElementById('min');
	const max = document.getElementById('max');
	const averageCookies = document.getElementById('average');

	const newCity = {
		city: cityAdd.value,
		minCustomer: Number(min.value),
		maxCustomer: Number(max.value),
		average: Number(averageCookies.value),
	};
	maxMinCustomer.push(newCity);
	const tableOfContent = document.querySelector('table');
	tableOfContent.innerHTML = '';
	table();
	resultSales();
	totalRow();
});

function table() {
	cities.appendChild(tableOfContent);
	const tableHeaderRow = document.createElement('tr');
	tableOfContent.appendChild(tableHeaderRow);
	for (let i = 0; i < 16; i++) {
		const tableHeaderItem = document.createElement('th');
		tableHeaderItem.textContent = times[i - 1];
		tableHeaderRow.appendChild(tableHeaderItem);
	}
}

function resultSales() {
	maxMinCustomer.forEach((location) => {
		let { city, minCustomer, maxCustomer, average } = location;
		const cityName = city;
		city = new Location(minCustomer, maxCustomer, average, [], []);
		city.numberOfCustomers();
		city.purchasedCookiesPerHour();
		city.render(city.numberOfPurchasedCookies, cityName);
	});
}

function totalRow() {
	const TotalsRow = document.createElement('tr');
	tableOfContent.appendChild(TotalsRow);
	for (let i = 0; i < 16; i++) {
		const tableCol = document.createElement('td');
		const tableColhead = document.createElement('th');
		if (i === 0) {
			tableColhead.textContent = 'Totals';
			TotalsRow.appendChild(tableColhead);
		} else if (i === 15) {
			tableCol.textContent = totals.reduce((acc, num) => {
				return (acc += num);
			});
			TotalsRow.appendChild(tableCol);
		} else {
			tableCol.textContent = totals[i - 1];
			TotalsRow.appendChild(tableCol);
		}
	}
}

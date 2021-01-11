'use strict';
const cities = document.querySelector('.cities');

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

const locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

const totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const tableOfContent = document.createElement('table');
cities.appendChild(tableOfContent);
const tableHeader = document.createElement('tr');
tableOfContent.appendChild(tableHeader);
for (let i = 0; i < 16; i++) {
	const tableHeaderItem = document.createElement('th');
	tableHeaderItem.textContent = times[i - 1];
	tableHeader.appendChild(tableHeaderItem);
}

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

Location.prototype.numberOfCustomers = function (min, max) {
	for (let i = 0; i < 14; i++) {
		this.numberOfCustomersPerHour.push(Math.floor(Math.random() * max + min));
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

Location.prototype.render = function (numberOfPurchasedCookies, index) {
	const tableRows = document.createElement('tr');
	tableOfContent.appendChild(tableRows);
	for (let i = 0; i < 16; i++) {
		const tableCol = document.createElement('td');
		if (i === 0) {
			tableCol.textContent = locations[index];
			tableRows.appendChild(tableCol);
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

//seattle city
const seattle = new Location(23, 65, 6.3, [], []);
seattle.numberOfCustomers(23, 65);
seattle.purchasedCookiesPerHour();
seattle.render(seattle.numberOfPurchasedCookies, locations.indexOf('Seattle'));
//end of seattle city

//Tokyo city
const tokyo = new Location(23, 65, 6.3, [], []);
tokyo.numberOfCustomers(3, 24);
tokyo.purchasedCookiesPerHour();
tokyo.render(tokyo.numberOfPurchasedCookies, locations.indexOf('Tokyo'));
//end of tokyo city

//Dubai city
const dubai = new Location(23, 65, 6.3, [], []);
dubai.numberOfCustomers(11, 38);
dubai.purchasedCookiesPerHour();
dubai.render(dubai.numberOfPurchasedCookies, locations.indexOf('Dubai'));
//end of dubai city

//Paris city
const paris = new Location(23, 65, 6.3, [], []);
paris.numberOfCustomers(20, 38);
paris.purchasedCookiesPerHour();
paris.render(paris.numberOfPurchasedCookies, locations.indexOf('Paris'));
//end of paris city

//Lima city
const lima = new Location(23, 65, 6.3, [], []);
lima.numberOfCustomers(2, 16);
lima.purchasedCookiesPerHour();
lima.render(lima.numberOfPurchasedCookies, locations.indexOf('Lima'));
//end of lima city

const TotalsRow = document.createElement('tr');
tableOfContent.appendChild(TotalsRow);
for (let i = 0; i < 16; i++) {
	const tableCol = document.createElement('td');
	if (i === 0) {
		tableCol.textContent = 'Totals';
		TotalsRow.appendChild(tableCol);
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

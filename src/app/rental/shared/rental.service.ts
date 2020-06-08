import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Rental } from './rental.model';

@Injectable()
export class RentalService {

	private rentals: any[] = [{
		id: "1",
		title : "Central Apartment",
		city: "New York",
		street: "Times Square",
		category: "apartment",
		image:"https://via.placeholder.com/350x250",
		bedroom: 3,
		description : "very nice apartment",
		dailyRate: 34,
		shared: false,
		createdAt : "24/12/2017"
	},
	{
		id: "2",
		title : "Central Apartment 2",
		city: "San Francisco",
		street: "Main Street",
		category: "condo",
		image:"https://via.placeholder.com/350x250",
		bedroom: 2,
		description : "very nice apartment",
		dailyRate: 12,
		shared: true,
		createdAt : "24/12/2017"
	},
	{
		id: "3",
		title : "Central Apartment 3",
		city: "Greece",
		street: "Park Street",
		category: "condo",
		image:"https://via.placeholder.com/350x250",
		bedroom: 2,
		description : "very nice apartment",
		dailyRate: 534,
		shared: true,
		createdAt : "24/12/2017"
	},
	{
		id: "4",
		title : "Central Apartment 4",
		city: "Paris",
		street: "Church Street",
		category: "apartment",
		image:"https://via.placeholder.com/350x250",
		bedroom: 2,
		description : "very nice apartment",
		dailyRate: 700,
		shared: true,
		createdAt : "24/12/2017"
	}];


	public getRentalById(rentalId: string): Observable<Rental> {

		return new Observable<Rental>((observer) => {setTimeout(() => {
				const foundRental = this.rentals.find((rental) => {
					return rental.id == rentalId;
				});

				observer.next(foundRental);
			}, 500);
		});
	}

	public getRentals(): Observable<Rental[]> {
		return new Observable<Rental[]>((observer) => {

			setTimeout(()  =>  {
				observer.next(this.rentals);
			}, 1000);

		});
	}
}
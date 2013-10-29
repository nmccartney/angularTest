angular.module('airlineServices', ['ngResource'])
	.factory('Airport', function  ($resource) {
		return $resource('/airports.json');
	})
	.factory('Flights', function  ($resource) {
		return $resource('/flights.json');
	})
	.factory('Reservations', function  ($resource) {
		return $resource('/reservations');
	});
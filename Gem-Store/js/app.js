(function (){
	var app = angular.module('store', []);

var gems = [{
		name: 'Dodecahedron',
		price: 2.95,
		description: "This is super great...",
		canPurchase: true
	},
	{
		name: 'MaCool Gem',
		price: 54.95,
		description: "This is super great, yo...",
		canPurchase: false
	},
	{
		name: 'MaCooler Gem',
		price: 540.95,
		description: "This is super great, yo...",
		canPurchase: true
	},	
	];
	app.controller('StoreController', function(){
		this.products = gems;
	});	

	
})();
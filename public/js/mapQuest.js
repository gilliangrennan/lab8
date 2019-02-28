function initMap() {
	// add your code here
	L.mapquest.key = 'InzLFkbyYhnAdUK6pNo6sQgVmcj6ME8F';

	var map = L.mapquest.map('map', {
		center: [32.8788, -117.2359],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false


	});

	L.marker([32.88, -117.236]).addTo(map);

}
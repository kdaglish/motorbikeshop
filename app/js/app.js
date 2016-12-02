var app = angular.module('bikeStore', []);

app.controller('bikeController', function() {

  this.bikes =
  [
    {
      name: 'Honda CBR600rr',
      description: "The CBR600RR",
      price: 9000.00,
      images: [
        "bike_images/cbr600rr-01.jpg",
        "bike_images/cbr600rr-02.jpg"
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this gem!",
          author: "joe@example.org",
          createdOn: 1397490980837
        },
        {
           stars: 1,
           body: "This gem sucks.",
           author: "tim@example.org",
           createdOn: 1397490980837
        }
      ]
    },
    {
      name: 'Yamaha YZF-R6',
      description: "yahamahahaha",
      price: 9999.99,
      images: [
        "bike_images/r6-01.jpg",
        "bike_images/r6-02.jpg"
      ],
      reviews: [
        {
          stars: 3,
          body: "I think this gem was just OK, could honestly use more shine, IMO.",
          author: "JimmyDean@example.org",
          createdOn: 1397490980837
        },
        {
          stars: 4,
          body: "Any gem with 12 faces is for me!",
          author: "gemsRock@example.org",
          createdOn: 1397490980837
        }
      ]
    }
  ];


});

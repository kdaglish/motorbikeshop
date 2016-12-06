angular.module('helmetProducts', [])

.directive("helmetsList", function(){
  return{
    restrict: 'E',
    templateUrl: "helmets.html"
  };
})

.controller('helmetController', function() {
  this.helmets =
  [
    {
      name: 'Shoei NXR',
      description: "The Shoei NXR has everything you need from a sports helmet; safety, aerodynamics, clear vision, ventilation and performance. The NXR's compact design boasts a newly designed shell which is physically smaller and has an all new baseline. 4 intakes in the forehead along with 6 outlets produce an effective ventilation system, whilst wind noise has been reduced by utilising larger cheek and ear pads. An all new visor and base plate system allows hassle free fitting and the base plates can be adjusted front and rear via a rotating dial.",
      price: 400.00,
      specs: {
        Chin_Strap: "Double-D",
        Colour_Scheme: "black",
        Form: "full face",
        Sharp_Rating: "4 Star"
      },
      images: [
        "helmet_images/helmet1-01.jpg",
        "helmet_images/helmet1-02.jpg",
        "helmet_images/helmet1-03.jpg"
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
      name: 'shoei nxr plain',
      description: "plain black nxr",
      price: 300.00,
      specs: {
        Chin_Strap: "Double-D",
        Colour_Scheme: "black",
        Form: "full face",
        Sharp_Rating: "4 Star"
      },
      images: [
        "helmet_images/helmet2-01.jpg",
        "helmet_images/helmet2-02.jpg",
        "helmet_images/helmet2-03.jpg"
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
    },
    {
      name: 'Shoei spirit3',
      description: "best helmet ever made",
      price: 600.00,
      specs: {
        Chin_Strap: "Double-D",
        Colour_Scheme: "replica",
        Form: "full face",
        Sharp_Rating: "5 Star"
      },
      images: [
        "helmet_images/helmet3-01.jpg",
        "helmet_images/helmet3-02.jpg",
        "helmet_images/helmet3-03.jpg"
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
    }
  ];
});

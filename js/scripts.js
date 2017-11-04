var infoWindowWidth = 500;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: 48.139840, lng:7.569656},
    mapTypeControl: false,
    scrollwheel: false,
    streetViewControl: false,
    // PASTE SNAZZY MAPS STYLING BELOW
    styles: [
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffdfa6"
              }
          ]
      },
      {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "saturation": "-100"
            }
        ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#b52127"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  // "color": "#c5531b"
                  "color": "#b52127"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#74001b"
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#74001b"
          },
          {
            "lightness": -8
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#6a0d10"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffdfa6"
          },
          {
            "weight": 0.4
          }
        ]
      },
    ]
  });

  setMarkers(map);
}

//ICONS
var icons = {
  hangwoman: {
    icon: 'images/hangwoman.png',
    coords: [1, 1, 1, 50, 30, 50, 30, 1],
    type: 'poly'
  },
  witch: {
    icon: 'images/annieSmol.png',
  }
};

// ALL THE DATA FROM THE .DOCX
var coordinates = [
  ['Würzburg', 49.792017, 9.950237, 4, 'images/hangwoman.png',
            '<div class="content">'+
            '<div class="site-notice">'+
            '</div>'+
            '<h1 class="first-heading">Würzburg Witch Trials</h1>'+
            '<h4 class="second-heading">Würzburg, Germany</h4>'+
            '<div class="body-content">'+
            '<p>One of the largest mass witch trials in European history, the <b>Würzburg Witch Trials</b> took place from 1626 to 1631. Witch-hunting committees were formed to investigate the townspeople of Würzburg. People from every rank of society were accused and executed, from high-ranking councilmen to young peasant children. Overall, 157 people were beheaded then burned at the stake in Würzburg, and a likely 900 were killed in the entire region. Most of the names of the accused are unknown, but one victim, nineteen-year-old Gobel Babelin was written about extensively. In a letter, the Chancellor of the Prince-Bishop of Würzburg wrote of her, “A week ago a maiden of nineteen was executed, of whom it is everywhere said that she was the fairest in the whole city.”</p>'+
            '</div>'+
            '</div>'],
  ['Berlin', 52.520050, 13.404871, 5, 'images/annieSmol.png',
            '<div class="content">'+
            '<div class="site-notice">'+
            '</div>'+
            '<h1 class="first-heading">Alternative für Deutschland</h1>'+
            '<h4 class="second-heading">Berlin, Germany</h4>'+
            '<div class="img-align"><img id="afd" src="images/afd.png"/></div>'+
            '<div class="body-content">'+
            '<p>Germany held its 2017 Bundestag elections this September. AfD, a far-right Populist party, won 12.6% of the votes, meaning that they will have representatives in Germany’s Parliament. Their campaign posters focused on a Germany first platform, particularly targeting refugees and Muslims. This ad reads ““Burkas?” We wear Bikinis.” This poster caused outrage in Germany for its sexist and Islamophobic messages. However, AfD now has seats in the Bundestag. This is the first time a far-right party has had seats in the German Parliament since the election of the Nazi party.</p>'+
            '</div>'+
            '</div>'],
  ['Speyer', 49.316830, 8.439153, 3, 'images/hangwoman.png',
            '<div class="content">'+
            '<div class="site-notice">'+
            '</div>'+
            '<h1 class="first-heading">Publication of <em>Malleus Maleifcarum</em></h1>'+
            '<h4 class="second-heading">Speyer, Germany</h4>'+
            '<div class="body-content">'+
            '<p>Written in 1486, Malleus Maleficarum is known as the foremost treatise on witchcraft. The work was written by clergyman Heinrich Kramer, and later Jacob Sprenger’s name was also added as an author. The book details how people, usually women, are possessed by the devil to become witches. It argues that witchcraft should be tried as a crime in secular courts, and that torture should be used to urge witches to confess. Particularly, the book advocated for witches to be burned at the stake. It remained a bestselling book for nearly 200 years after its publication.</p>'+
            '</div>'+
            '</div>'],
  ['Rome', 41.902671, 12.496252, 2, 'images/annieSmol.png',
            '<div class="content">'+
            '<div class="site-notice">'+
            '</div>'+
            '<h1 class="first-heading">Italy\'s Fertility Day</h1>'+
            '<h4 class="second-heading">Rome, Italy</h4>'+
            '<div class="img-align"><img id="fertility" src="images/fertility.png"/></div>'+
            '<div class="body-content">'+
            '<p>In 2016, Italy’s Ministry of Health launched a “Fertility Day” campaign that aimed to reverse Italy’s low birthrate. The ads featured sexist slogans, such as one that read, “Beauty doesn’t have an age. Fertility does.” The signs were met with anger over the belittling of women’s issues such as equal workplace pay and affordable childcare. Many people said the ads were reminiscent of Fascist Italy, where women were encouraged to have as many children as possible, because it was seen as their duty to their state.</p>'+
            '</div>'+
            '</div>'],
  ['Lancashire', 53.850536, -2.668760, 1, 'images/hangwoman.png',
            '<div class="content">'+
            '<div class="site-notice">'+
            '</div>'+
            '<h1 class="first-heading">Pendle Witches</h1>'+
            '<h4 class="second-heading">Lancashire, England</h4>'+
            '<div class="body-content">'+
            '<p>In 1612, twelve people, ten women and two men, were hung in Lancashire, England after being convicted of witchcraft. These accused mainly came from two families: the Demdikes and the Chattoxes. Each family accused the other of witchcraft, potentially due to a underlying fight about property. The matriarch of the Demdikes was Elizabeth Southerns, who was nearly 80 years old when she was hung. She had been accused of being a witch before, due to her old age and possession of pins, which were thought to have healing powers. Southerns was hung along with her daughter and two grandchildren.</p>'+
            '</div>'+
            '</div>'],
  ['London', 51.507356, -0.127764, 1, 'images/annieSmol.png',
            '<div class="content">'+
            '<div class="site-notice">'+
            '</div>'+
            '<h1 class="first-heading">Heels Lawsuit</h1>'+
            '<h4 class="second-heading">London, England</h4>'+
            '<div class="body-content">'+
            '<p>Nicola Thorp, a British receptionist, was told that her flat shoes were unacceptable for her workplace. Her supervisor explained that women at the PwC accounting firm were required to wear heels that were at least two inches high. Upon investigation, Thorp learned that her firm, and several other companies in England, had dress codes that made women wear heels. After starting a petition to draw attention to the sexist requirement, other women came forward saying that they had been asked to change their appearance in the work places, including dying their hair blonde and wearing more makeup. Thorp’s petition was signed more than 150,000 times.</p>'+
            '</div>'+
            '</div>'],
  ['Valais', 46.163517, 7.517275, 1, 'images/hangwoman.png',
            '<div class="content">'+
            '<div class="site-notice">'+
            '</div>'+
            '<h1 class="first-heading">Valais Witch Trials</h1>'+
            '<h4 class="second-heading">Valais, France</h4>'+
            '<div class="body-content">'+
            '<p>These 1428 trials were the first ones in Switzerland that led to systematic execution. Townspeople started being accused of witchcraft in the lower region of Valais, but the accusations quickly began to spread throughout the entirety of Valais. Local authorities proclaimed that trials would begin to convict the witches. Torture was employed if a person was accused by five or more people. The accused witches were charged with murder, heresy and sorcery, and making deals with the devil. The exact number of people executed is unknown, but is estimated to be above 200 people.</p>'+
            '</div>'+
            '</div>'],
  ['Paris', 48.857482, 2.349461, 1, 'images/annieSmol.png',
            '<div class="content">'+
            '<div class="site-notice">'+
            '</div>'+
            '<h1 class="first-heading">Islamic Headscarf Ban</h1>'+
            '<h4 class="second-heading">Paris, France</h4>'+
            '<div class="body-content">'+
            '<p>In 2011, former French prime minister, François Fillon, banned French women from wearing the niqab in public. The French law banned Muslim women from wearing the traditional clothing anywhere outside their homes. In 2014, the ban was upheld by theEuropean court of human rights. Most recently in 2016, former prime minister Manuel Valls suggested that there should be a ban on “burkini” swimsuits. The alleged basis for these bans was to encourage homogeneity among the French people.</p>'+
            '</div>'+
            '</div>']
];

var infowindow = null;

function setMarkers(map) {

  var image = 'images/hangwoman-short.png'; /*CHANGE IMAGE HERE ONCE YOU HAVE*/

  var shape = {
    coords: [1, 1, 1, 50, 30, 50, 30, 1],
    type: 'poly'
  };

  var infowindow = new google.maps.InfoWindow({
    content: "nuthin",
    maxWidth: infoWindowWidth
  });

  for (var i = 0; i < coordinates.length; i++) {
    var mark = coordinates[i];
    var marker = new google.maps.Marker({
      position: {lat: mark[1], lng: mark[2]},
      map: map,
      icon: mark[4],
      shape: shape,
      title: mark[0],
      zIndex: mark[3],
      html: mark[5]
    });

    google.maps.event.addListener(marker, 'click', function () {
    infowindow.setContent(this.html);
    infowindow.open(map, this);
    });
  }
}

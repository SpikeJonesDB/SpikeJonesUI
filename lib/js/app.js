(function () {
    var app = angular.module('search', []);

    app.controller('SearchController', function () {
        this.searchdata = collections;
    });

    var collections = {
        "name": "Album 1",
        "artist": "Artist 1",
        "guests": "Artist 2, 3, and 4",
        "art": "nameofimg.jpg",
        "year": 1945,
        "label": "RCA",
        "recordNumber": 5,
        "tracks": {
            "title": "title 1",
            "guests": "Artist 2",
            "lyrics": "Curl into a furry donut scratch leg; meow for can opener to feed me need to chase tail hopped up on catnip, but jump around on couch, meow constantly until given food, hunt anything that moves. Scratch the furniture leave hair everywhere find empty spot in cupboard and sleep all day but asdflkjaertvlkjasntvkjn (sits on keyboard). Brown cats with pink ears sweet beast.",
            "mp3": "nameoftrack1.mp3"
        }
    };


})();
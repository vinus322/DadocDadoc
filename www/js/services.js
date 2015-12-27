angular.module('starter.services', [])



.factory('newsFeeds', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var newsfeeds = [{
    id: 0,
    name: 'Ben Sparrow',
    date: new Date('2015', '12', '11'),
    myText: 'You on your way?',
    face: 'img/ben.png',
    bookimg: 'img/book/1.jpg',
    like: 1,
    comments: 2
  }, {
    id: 1,
    name: 'Max Lynx',
    date: new Date('2015', '12', '10'),
    myText: 'Hey, it\'s me',
    face: 'img/max.png',
    bookimg: 'img/book/2.jpg',
    like: 1,
    comments: 5
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    date: new Date('2015', '11', '08'),
    myText: 'I should buy a boat',
    face: 'img/adam.jpg',
    bookimg: 'img/book/3.jpg',
    like: 3,
    comments: 4
  }, {
    id: 3,
    name: 'Perry Governor',
    date: new Date('2014', '05', '12'),
    myText: 'Look at my mukluks!',
    face: 'img/perry.png',
    bookimg: 'img/book/4.jpg',
    like: 2,
    comments: 7
  }, {
    id: 4,
    name: 'Mike Harrington',
    date: new Date('2014', '02', '08'),
    myText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    bookimg: 'img/book/5.jpg',
    like: 10,
    comments: 44
  }];

  return {
    all: function() {
      return newsfeeds;
    },
    get: function(newsfeedId) {
      for (var i = 0; i < newsfeeds.length; i++) {
        if (newsfeeds[i].id === parseInt(newsfeedid)) {
          return newsfeeds[i];
        }
      }
      return null;
    }
  };
})

.factory('rcmdBooks', function() {
  var rcmdbooks = [{
    id: 0,
    name: 'Ben Sparrow',
    date: new Date('2015', '12', '11'),
    bookimg: 'img/book/1.jpg',
  }, {
    id: 1,
    name: 'Max Lynx',
    date: new Date('2015', '12', '10'),
    bookimg: 'img/book/2.jpg',
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    date: new Date('2015', '12', '10'),
    bookimg: 'img/book/4.jpg',
  }, {
   id: 3,
    name: 'Adam Bradleyson',
    date: new Date('2015', '12', '10'),
    bookimg: 'img/book/3.jpg',
  }, {
   id: 4,
    name: 'Adam Bradleyson',
    date: new Date('2015', '12', '10'),
    bookimg: 'img/book/5.jpg',
  }];
  return {
    all: function() {
      return rcmdbooks;
    },
    get: function(rcmdbookId) {
      for (var i = 0; i < rcmdbooks.length; i++) {
        if (rcmdbooks[i].id === parseInt(rcmdbookId)) {
          return rcmdbooks[i];
        }
      }
      return null;
    }
  };
});

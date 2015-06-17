if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  var days = function() {
    return Math.floor((new Date() - new Date(2015, 5, 10))/86400000) + 1;
  };


  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    start: function() {
      return "2015년 6월 10일(수)";
    },
    days: function() {
      return days();
    },
    dday: function(day){
      return day - days();
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

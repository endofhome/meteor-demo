// run this when the meteor app is started
Meteor.startup(function() {

  // if there are no polls available create sample data
  if (Polls.find().count() === 0) {

    // create sample polls
    var samplePolls = [
      {
        question: 'Best Strayan Critter?',
        choices: [
          { text: 'Echidna', votes: 0 },
          { text: 'Wallaroo', votes: 0 },
          { text: 'Flying Fox', votes: 0 }
        ]
      },
      {
        question: 'Best Sock?',
        choices: [
          { text: 'Left', votes: 0 },
          { text: 'Right', votes: 0 },
          { text: 'None', votes: 0 }
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });

  }

});
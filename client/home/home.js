import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './home.html';

Template.chat.onCreated(function () {
  Session.set('v2','next_1');
}); 


Template.chat.helpers({
  GoNext()
  {
    return Session.get('v2');
}

});

Template.next_1.events({
  'click #b4'(event) {
    event.preventDefault();
    Session.set('v2','b13');
  },
  'click #l1'(event) {
event.preventDefault();
Session.set('v2','b13');
},
});



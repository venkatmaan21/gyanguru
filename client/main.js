import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Template.main.onCreated(function () {
  Session.set('v1','next');
  Tracker.autorun(() =>{    
   Meteor.subscribe('fetchData');    
  });
}); 


Template.main.helpers({
  isHome()
  {
    return Session.get('v1');
}

});

Template.next.events({
  
  'click #b2'(event) {
    event.preventDefault();
    Session.set('v1','b12');
  },
  
  'click #b1': function(event) {
        event.preventDefault();
        
        //Session.set('v1','b11');
         
         let email = document.getElementById('login1').value;
         let psw = document.getElementById('psw1').value;
         alert(email);
         let k=Datbase.find({email_id:email,pass:psw});
         if (k)
          Session.set('v1','b11');
        else
          alert("invalid user");
        

         /*Meteor.loginWithPassword(email, psw, function(error) {

            if (Meteor.user()) {
               console.log(Meteor.email());
            } else {
               console.log("ERROR: " + error.reason);
            }
         });*/
      }
   });
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './register.html';


Template.hello.onCreated(function () {
Session.set('login','regis')
Tracker.autorun(() =>{
Meteor.subscribe('fetchData');
});
});

Template.hello.helpers({
isRegister()
{
return Session.get('login');
}

});


Template.regis.events({

'click #save': function(event) {
event.preventDefault();
console.log("ok");
let mobile_no = document.getElementById('mob').value;
let email_id = document.getElementById('remail').value;
let pass = document.getElementById('psw2').value;
let r_psw = document.getElementById('rpsw2').value;


if (mobile_no == '' || email_id == '' || pass == '' || r_psw == '')
{
alert ('All are mandatory');
return;
}

let obj = {
mobile_no: mobile_no,
email_id: email_id,
pass: pass,
r_psw: r_psw,

/*isedit: Session.get ('isEdit'),
id: Session.get ('rec_id')==false?'NA':Session.get ('rec_id'),*/
};
console.log(obj);
Meteor.call ('RegistrationForm',obj,function (err,res)
{
if (err)
{
alert(err);
console.log("error",err);

}
console.log("not ok",res);
Session.set('login','reg');
document.getElementById('mob').value = '';
document.getElementById('remail').value = '';
document.getElementById('psw2').value = '';
document.getElementById('rpsw2').value = '';


});
},
});
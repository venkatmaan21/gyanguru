import { Meteor } from 'meteor/meteor';
import '../collection.js';
import './function.js';
import './publication.js';

Meteor.startup(() => {
	let k=Datbase.find({}).fetch();
	console.log(k);
  // code to run on server at startup
});
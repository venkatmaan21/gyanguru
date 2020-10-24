Meteor.publish('fetchData',function () {
  return Datbase.find({});
});
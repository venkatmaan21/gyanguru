Datbase = new Mongo.Collection('datbase');
Datbase.attachSchema(new SimpleSchema({
  
  mobile_no: {
    type: String,
    optional: true,
    defaultValue: '-'
  },
  email_id: {
    type: String,
    optional: true,
    defaultValue: '-'
  }, 
  pass: {
    type: String,
    optional: true,
    defaultValue: '-'
  }, 
  r_psw: {
    type: String,
    optional: true,
    defaultValue: '-'
  }
    
}));
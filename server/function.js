Meteor.methods({


    RegistrationForm(obj)
    { check (obj,Object);
        let p=Datbase.find(obj).fetch();
        console.log(obj,p);
        if (p.length>0)
        {
            console.log("ll");
            
        }
        else
        {
            console.log("kk");

            idata = {
                mobile_no: obj.mobile_no,
                email_id: obj.email_id,
                pass: obj.pass,
                r_psw: obj.r_psw,
                
            };
            
            return Datbase.insert (idata);
        }
    },



});
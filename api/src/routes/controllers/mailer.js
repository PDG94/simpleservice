const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "simple.service.pf@gmail.com",
    pass: "wvsmorpxwlaxrdmk"
  }
});
/*
const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "16c8f7d8bfcb23",
    pass: "2f714e0001fa3b"
  }

});
*/

const mailActivateAccount = async (name, email) => {
  await transport.sendMail({
    from: "simple.service.pf@gmail.com",
    to: email,
    subject: "Account activated at Simple Service ",
    html: `
            <h2>Hi! ${name}</h2>
            <h4>Thank you for registering.</h4>
            <hr />            
            <div>                        
              <p>Cordialy</p>
              <p>Your friends at Simple Service</p>
            </div>        
          `,
  });
};

const pago = async (name, email) => {
  await transport.sendMail({
    from: "Simple Service <simple.service.pf@gmail.com>",
    to: email,
    subject: "Succesful Payment",
    html: `
            <h2>Hi! ${name}</h2>
            <h1>Thank you for your purchase.</h1>
            <hr />            
            <div>                        
              <p>Cordialy</p>
              <p>Your friends at Simple Service</p>
            </div>        
         `,
  });
};

const datos = async (name, email) => {
  await transport.sendMail({
    from: "Simple Service <simple.service.pf@gmail.com>",
    to: email,
    subject: "Information Updated",
    html: `
            <h2>Hi! ${name}</h2>
            <h1>Your info has been updated.</h1>
            <hr />            
            <div>                        
              <p>Cordialy</p>
              <p>Your friends at Simple Service</p>
            </div>        
         `,
  });
};


const baja = async (name, email) => {
  await transport.sendMail({
    from: "Simple Service <simple.service.pf@gmail.com>",
    to: email,
    subject: "Account Cancelled",
    html: `
            <h2>Hi! ${name}</h2>
            <h1>Your account has been successfully cancelled.</h1>
            <hr />            
            <div>                        
              <p>Cordialy</p>
              <p>Your friends at Simple Service</p>
            </div>        
         `,
  });
};

module.exports = { mailActivateAccount, pago, datos, baja };


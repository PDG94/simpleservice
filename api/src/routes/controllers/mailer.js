const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "simple.service.pf@gmail.com",
    pass: "Simpleservice12345",
  },
});

const mailActivateAccount = async (name, email) => {
  await transport.sendMail({
    from: "Simple Service <simple.service.pf@gmail.com>",
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

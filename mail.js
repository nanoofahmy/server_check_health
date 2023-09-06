var nodemailer = require("nodemailer");

getTransporter  = () =>  {
  return nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.emailFrom,
          pass: process.env.gmailPassword
      }
  });
}

async function sendMail({ to, subject, html }) {
  const emailObject = {
      from: process.env.emailFrom, // sender address
      to, // list of receivers
      subject, // Subject line
      html, // plain text body
  };

  const response = { status: 'success' };

  try {
    await this.getTransporter().sendMail(emailObject);
  } catch (error) {
    response.status = 'failed';
    if (error.response) {
        response.error = error.response.body;
    } else {
        response.error = error.toString();
    }
  }

  return response;

}

module.exports = {
  sendMail,
};



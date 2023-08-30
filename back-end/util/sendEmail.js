const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  // const transporter = nodemailer.createTransport({
  //     host: "smtp.forwardemail.net",
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
  //       user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
  //       pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD'
  //     }
  //   });

  // const transporter = nodemailer.createTransport({
  //     host: 'smtp.ethereal.email',
  //     port: 587,
  //     auth: {
  //         user: 'ansel16@ethereal.email',
  //         pass: '9RtkwKNYrYmjzSD2bR'
  //     }
  // });

  /** testing account */
  let testAccount = await nodemailer.createTestAccount();
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  var message = {
    from: "sender@server.com",
    to: "receiver@sender.com",
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>User is Registered Successfully...❤️❤️❤️</p>",
  };

  const info = await transporter.sendMail(message).then((info) => {
        return res.status(201)
        .json({ 
            msg: "you should receive an email",
            info : info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    }).catch(error => {
        return res.status(500).json({ error })
    });
//   res.send(info);
};
module.exports = sendEmail;

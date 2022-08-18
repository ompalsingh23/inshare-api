
const nodemailer = require("nodemailer");

module.exports = async ({from,to, subject, text , html}) => {
    let transporter= nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        secure: false,
        auth:{
            user: "deoraompal23@gmail.com",
            pass:"CxrSbt2FGNnh0ZXK"
        },
    });
    let info = await transporter.sendMail({
        from: from,
        to: to,
        subject: subject ,
        text: text,
        html:html
    });
}




const nodemailer = require("nodemailer");

module.exports = async ({from,to, subject, text , html}) => {
    let transporter= nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth:{
            user: "deoraompal23@gmail.com",
            pass:"CxrSbt2FGNnh0ZXK"
        },
    });
    let info = await transporter.sendMail({
        from: `inshare <${from}>`,
        to,
        subject ,
        text,
        html
    });
}



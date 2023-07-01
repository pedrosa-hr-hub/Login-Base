const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.E_MAIL_USER,
        pass: process.env.E_MAIL_PASSWORD,
    },
});

export function sendEmail(destEmail, content) {
    const mailOptions = {
        from: process.env.E_MAIL_USER,
        to: destEmail,
        subject: 'Acesso E-mail!',
        text: content,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject({ status: 400, result: error });
            } else {
                resolve({ status: 200, result: true });
            }
        });
    });
}

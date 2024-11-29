const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.sendEmail = async (to, otp) => {
    try {
        await transporter.sendMail({
            to,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otp}. It is valid for 1 hour.`,
        });
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'matespatagonicos@gmail.com',
        pass:'yyoqzxkwkdeddsit'
    },
    from:   'Matespatagonicos@gmail.com'
});

export const sendEmail= async(to: string, code: string): Promise<void> => {

    const mailOptions = {
        from: '"Mates Patagonicos" matespatagonicos@gmail.com',
        to,
        subject: 'Código de verificación',
        text:`
            Bienvenid@ a Mates Patagonicos! 
            Tu codigo de verificacion es ${code}`,
    
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email enviado');
        
    } catch (error) {
        console.error(error);
        
    }

};
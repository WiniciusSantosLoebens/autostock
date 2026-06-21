const nodemailer = require("nodemailer");

exports.handler = async (event) => {
    const { nome, email, mensagem } = JSON.parse(event.body);
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Novo contato AutoStock - ${nome}`,
            text:`
            Nome: ${nome}

            Email: ${email}

            Mensagem: ${mensagem}
            `,
        });

        return{
            statusCode: 200,
            body: JSON.stringify({
                message: "Email enviado com sucesso",
            }),
        };   
    } catch (error) {

        return{
            statusCode: 500,
            body:JSON.stringify({
                error: error.message,
            }),
        };
    }

};
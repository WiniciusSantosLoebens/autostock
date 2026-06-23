const nodemailer = require("nodemailer");

exports.handler = async (event) => {
    
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Método não permitido. Use POST." }),
        };
    }

    let nome, email, mensagem;

    
    try {
        const body = JSON.parse(event.body || "{}");
        nome = body.nome;
        email = body.email;
        mensagem = body.mensagem;

        
        if (!nome || !email || !mensagem) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Campos obrigatórios ausentes (nome, email ou mensagem)." }),
            };
        }
    } catch (jsonError) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "JSON inválido ou corpo da requisição vazio." }),
        };
    }
    
    
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
            text: `
            Nome: ${nome}
            Email: ${email}
            Mensagem: ${mensagem}
            `,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Email enviado com sucesso!",
            }),
        };   
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message,
            }),
        };
    }
};

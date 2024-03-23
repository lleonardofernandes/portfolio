from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message
import modules.config as config
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.secret_key = config.SECRET_KEY

email = os.getenv("email")
senha = os.getenv("senha")

mail_settings = {
    "MAIL_SERVER": "smtp.gmail.com",
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": email,
    "MAIL_PASSWORD": senha 
}

app.config.update(mail_settings)
mail = Mail(app)


class Contato:
    def __init__(self, nome, email, mensagem) -> None:
        self.nome = nome
        self.email = email
        self.mensagem = mensagem


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/send', methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        formContato = Contato(
            request.form["nome"],
            request.form["email"],
            request.form["mensagem"],
        )
        msg = Message(
            subject = f'Email enviado do portfólio de {formContato.nome}',
            sender = app.config.get("MAIL_USERNAME"),
            recipients = ["contato@btools.com.br", app.config.get("MAIL_USERNAME")],
            body= f'''
                {formContato.nome} te enviou a seguinte mensagem:  :
                Email: {formContato.email}
                
                Mensagem: 
                {formContato.mensagem}
            ''',
        )
        mail.send(msg)
        flash('Mensagem enviada com sucesso!')
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=False)
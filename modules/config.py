from dotenv import load_dotenv
import os

load_dotenv()


#================= mysql local =================#
DATABASE = os.getenv("mysql_db")
HOST = os.getenv("mysql_host")
USERSERVER = os.getenv("mysql_user")
PASSWORD = os.getenv("mysql_password")
PORT = os.getenv("mysql_port")


SECRET_KEY = 'super_admin_secret'


email = os.getenv("email")
password = os.getenv("senha")


mail_settings = {
    "MAIL_SERVER": "smtp.gmail.com",
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": email,
    "MAIL_PASSWORD": password   
}
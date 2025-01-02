from flask import Flask
from extensions import db, bcrypt, cors, migrate  # Import from extensions.py

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db.init_app(app)
bcrypt.init_app(app)
cors.init_app(app)
migrate.init_app(app, db)  # Initialize Flask-Migrate

# Import and register blueprints
from routes.auth_routes import auth_bp
app.register_blueprint(auth_bp, url_prefix='/auth')

if __name__ == '__main__':
    app.run(debug=True)

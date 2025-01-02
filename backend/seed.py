from app import app, db
from models import User

# Initialize the app context
with app.app_context():
    # Drop all tables and recreate them (for fresh seed)
    db.drop_all()
    db.create_all()

    # Sample data
    users = [
        {"username": "user1", "email": "user1@example.com", "password": "password1"},
        {"username": "user2", "email": "user2@example.com", "password": "password2"},
        {"username": "user3", "email": "user3@example.com", "password": "password3"},
    ]

    # Insert users into the database
    for user_data in users:
        user = User(username=user_data["username"], email=user_data["email"])
        user.set_password(user_data["password"])
        db.session.add(user)

    # Commit changes to the database
    db.session.commit()

    print("Database seeded successfully!")

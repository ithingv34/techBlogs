from .models import User


def get_all(*, db_session):
    """Get all users"""
    return db_session.query(User).all()

from sqlalchemy.orm import Session

from .models import Post


def get_all(*, db_session: Session):
    """Get all users"""
    return db_session.query(Post).all()

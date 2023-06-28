from sqlalchemy.orm.session import Session

from .models import Category


def get_all(*, db_session: Session):
    """Get all users"""
    return db_session.query(Category).all()

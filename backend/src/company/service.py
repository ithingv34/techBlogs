from sqlalchemy.orm import Session

from .models import Company


def get_all(*, db_session: Session):
    """Get all companies"""
    return db_session.query(Company).all()

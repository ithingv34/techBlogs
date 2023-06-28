from .core import Base, get_class_by_tablename


def get_all(*, db_session, model):
    """Fetches a query object based on the model class name."""
    return db_session.query(get_class_by_tablename(model))

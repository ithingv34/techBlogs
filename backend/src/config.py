import logging

from pydantic import BaseModel

from starlette.config import Config

log = logging.getLogger(__name__)


class BaseConfigurationModel(BaseModel):
    """Base configuration model used by all config options."""

    pass


config = Config(".env")

# App environment e.g) dev, prod
APP_ENV = config("APP_ENV", default="dev")

# logging
LOG_LEVEL = config("LOG_LEVEL", default=logging.INFO)

# database -> postgreSQL
DB_USERNAME = config("DB_USERNAME")
DB_PASSWORD = config("DB_PASSWORD")
DB_HOST = config("DB_HOST", default="localhost")
DB_PORT = config("DB_PORT", default="5432")
DB_NAME = config("DB_NAME", default="dev")

SQLALCHEMY_DATABASE_URI = (
    f"postgresql+psycopg2://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
)

# Alembic

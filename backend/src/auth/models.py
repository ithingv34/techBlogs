from typing import Optional

from pydantic import Field
from pydantic.networks import EmailStr

from sqlalchemy import Column, Integer, String, LargeBinary
from sqlalchemy.orm import relationship

from src.post.models import assoc_user_post
from src.company.models import assoc_user_company
from src.database.core import Base
from src.models import TimeStampMixin, PrimaryKey, AppBase


class User(Base, TimeStampMixin):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True)
    password = Column(LargeBinary, nullable=False)

    # relationships
    posts = relationship("Post", secondary=assoc_user_post, back_populates="users")
    companies = relationship("Company", secondary=assoc_user_company, back_populates="users")


# Pydantic Model
class UserBase(AppBase):
    email: EmailStr


class UserResponse(UserBase):
    pass

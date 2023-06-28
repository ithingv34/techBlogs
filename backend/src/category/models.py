from sqlalchemy import Column, Integer, String, ForeignKey, func, Table
from sqlalchemy.orm import relationship

from src.models import TimeStampMixin, PrimaryKey, AppBase
from src.database.core import Base
from src.models import TimeStampMixin


class Category(Base, TimeStampMixin):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True)
    category_name = Column(String(255))

    post_id = Column(Integer, ForeignKey("posts.id"))
    post = relationship("Post", back_populates="categories")


class CategoryBase(AppBase):
    id: int
    category_name: str


class CategoryCreate(CategoryBase):
    pass

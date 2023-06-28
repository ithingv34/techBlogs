from sqlalchemy import Column, Integer, String, ForeignKey, Table, PrimaryKeyConstraint
from sqlalchemy.orm import relationship

from src.models import TimeStampMixin, PrimaryKey, AppBase
from src.database.core import Base
from src.models import TimeStampMixin

assoc_user_post = Table(
    "assoc_user_post",
    Base.metadata,
    Column("user_id", Integer, ForeignKey("users.id", ondelete="CASCADE")),
    Column("post_id", Integer, ForeignKey("posts.id", ondelete="CASCADE")),
    PrimaryKeyConstraint("user_id", "post_id"),
)


#
class Post(Base, TimeStampMixin):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True)
    title = Column(String(255))

    company_id = Column(Integer, ForeignKey("companies.id"))
    company = relationship("Company", back_populates="posts")

    users = relationship("User", secondary=assoc_user_post, back_populates="posts")

    categories = relationship("Category", back_populates="post")


class PostBase(AppBase):
    id: int
    title: str
    company_id: int


class PostCreate(PostBase):
    pass

from sqlalchemy import Column, Integer, String, ForeignKey, func, Table, PrimaryKeyConstraint
from sqlalchemy.orm import relationship

from src.models import TimeStampMixin, PrimaryKey, AppBase
from src.database.core import Base
from src.models import TimeStampMixin

assoc_user_company = Table(
    "assoc_user_company",
    Base.metadata,
    Column("user_id", Integer, ForeignKey("users.id", ondelete="CASCADE")),
    Column("company_id", Integer, ForeignKey("companies.id", ondelete="CASCADE")),
    PrimaryKeyConstraint("user_id", "company_id"),
)


class Company(Base, TimeStampMixin):
    __tablename__ = "companies"

    id = Column(Integer, primary_key=True)
    name = Column(String(255))

    users = relationship("User", secondary=assoc_user_company, back_populates="companies")
    posts = relationship("Post", back_populates="company")


class CompanyBase(AppBase):
    id: int
    name: str


class CompanyCreate(CompanyBase):
    pass

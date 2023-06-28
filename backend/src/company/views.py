from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm.session import Session

from src.database.core import get_db

from .models import Company, CompanyBase
from .service import get_all

router = APIRouter()


@router.get("", response_model=List[CompanyBase])
def get_companies(db_session: Session = Depends(get_db)):
    return get_all(db_session=db_session)

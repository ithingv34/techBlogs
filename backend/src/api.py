from typing import List, Optional

from fastapi import APIRouter

from pydantic import BaseModel
from starlette.responses import JSONResponse

from src.auth.views import router as user_router
from src.post.views import router as post_router
from src.company.views import router as company_router
from src.category.views import router as category_router


class ErrorMessage(BaseModel):
    msg: str


class ErrorResponse(BaseModel):
    detail: Optional[List[ErrorMessage]]


api_router = APIRouter(
    default_response_class=JSONResponse,
    responses={
        400: {"model": ErrorResponse},
        401: {"model": ErrorResponse},
        403: {"model": ErrorResponse},
        404: {"model": ErrorResponse},
        500: {"model": ErrorResponse},
    },
)

api_router.include_router(user_router, prefix="/users", tags=["user"])
api_router.include_router(post_router, prefix="/posts", tags=["post"])
api_router.include_router(company_router, prefix="/companies", tags=["company"])
api_router.include_router(category_router, prefix="/categories", tags=["category"])


@api_router.get("/healthcheck")
def healthcheck():
    return {"status": "ok"}


@api_router.on_event("startup")
async def startup_event():
    from src.database.core import engine, Base

    Base.metadata.create_all(bind=engine)

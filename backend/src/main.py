from fastapi import FastAPI

from .api import api_router

app = FastAPI()
app.include_router(api_router)


# For API Documentation Setting

# api = FastAPI(
#     title="techBlogs",
#     description="Welcome to techBlogs's API documentation!",
#     root_path="/api/v1",
#     docs_url=None,
#     openapi_url="/doc/openapi.json",
#     redoc_url="/docs",
# )

# api.include_router(api_router)
# app.mount("/api/v1", app=api)


# For Exception Handling
# async def not_found(request, exc):
#     return JSONResponse(
#         status_code=status.HTTP_404_NOT_FOUND, content={"detail": [{"msg": "Not Found."}]}
#     )
# exception_handlers = {404: not_found}
# app = FastAPI(exception_handlers=exception_handlers, openapi_url="")

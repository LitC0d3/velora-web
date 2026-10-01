from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import FileResponse
from starlette.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pathlib import Path
import os
import hashlib
import logging

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

APK_PATH = Path(os.environ.get('APK_PATH', ROOT_DIR / 'apk' / 'velora.apk'))
APP_VERSION = os.environ.get('APP_VERSION', '2.4.0')

app = FastAPI()
api_router = APIRouter(prefix="/api")


@api_router.get("/")
async def root():
    return {"message": "Velora API"}


@api_router.get("/download/status")
async def download_status():
    if APK_PATH.exists():
        size = APK_PATH.stat().st_size
        sha = hashlib.sha256(APK_PATH.read_bytes()).hexdigest()
        return {"available": True, "version": APP_VERSION, "size_bytes": size, "sha256": sha}
    return {"available": False, "version": APP_VERSION}


@api_router.get("/download/apk")
async def download_apk():
    if not APK_PATH.exists():
        raise HTTPException(status_code=404, detail="APK not uploaded yet")
    return FileResponse(
        APK_PATH,
        media_type="application/vnd.android.package-archive",
        filename=f"velora-v{APP_VERSION}.apk",
    )


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

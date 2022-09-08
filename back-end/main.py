from fastapi import FastAPI, Depends
from database import Base, engine, get_db
from schemas import Link
from models import LinkCreate

Base.metadata.create_all(bind=engine)
app = FastAPI()

@app.get("/api/health")
def read_root():
    return "Hello World!"

links: list[Link] = []

@app.post("/api/link")
def create_link(link: LinkCreate, db = Depends(get_db)) -> Link:
    db_link = Link(display_name = link.display_name, url = link.url)
    db.add(db_link)
    db.commit()
    db.refresh(db._link)
    return db_link

@app.get("/api/links")
def get_links(db = Depends(get_db)):
    return db.query(Link).all()
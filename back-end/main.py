from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/api/health")
def read_root():
    return "Hello World!"

class Link: 
    display_name: str
    url: str

links: list[Link] = []

link1 = Link()
link1.display_name = "Youtube"
link1.url = "https://youtube.com"

link2 = Link()
link2.display_name = "CoStar"
link2.url = "https://costarastrology.com"

links.append(link1)
links.append(link2)

@app.get("/api/links")
def get_links():
    return links

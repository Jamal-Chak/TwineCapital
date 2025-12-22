from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import json
import os

router = APIRouter(prefix="/testimonials", tags=["testimonials"])

DATA_FILE = "data/testimonials.json"

# Ensure data directory and file exist
if not os.path.exists("data"):
    os.makedirs("data")
if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w") as f:
        json.dump([], f)

class TestimonialBase(BaseModel):
    name: str
    feedback: str
    rating: int
    email: Optional[str] = None

class Testimonial(TestimonialBase):
    pass

def load_testimonials():
    try:
        with open(DATA_FILE, "r") as f:
            return json.load(f)
    except Exception:
        return []

def save_testimonials(data):
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=4)

@router.get("/", response_model=List[Testimonial])
async def get_testimonials():
    return load_testimonials()

@router.post("/", status_code=201)
async def create_testimonial(testimonial: Testimonial):
    try:
        current_data = load_testimonials()
        new_entry = testimonial.dict()
        current_data.insert(0, new_entry) # Add to top
        save_testimonials(current_data)
        return {"message": "Testimonial added", "data": new_entry}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

import os
import sys

# Ensure current directory is in python path
current_dir = os.path.dirname(os.path.abspath(__file__))
if current_dir not in sys.path:
    sys.path.insert(0, current_dir)

try:
    from app.main import app
except ImportError as e:
    print(f"Error importing app: {e}")
    # Print sys.path for debugging logs if it fails again
    print(f"sys.path: {sys.path}")
    raise

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

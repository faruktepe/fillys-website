import os
import io
import time
import replicate
from rembg import remove
from PIL import Image

TOKEN = os.environ.get("REPLICATE_API_TOKEN")
OUT = "/Users/yikargecer/Desktop/fillys-website/public/media"

items = [
    ("vanilya-il3",        "minimalist watercolor illustration of a vanilla orchid flower with one vanilla bean pod, isolated on white background, loose soft brush strokes, warm cream golden palette, botanical food art, no shadow"),
    ("pistachio-il3",      "minimalist watercolor illustration of three pistachio nuts cracked open showing vibrant green interior, isolated on white background, loose soft brush strokes, fresh green beige palette, botanical food art, no shadow"),
    ("matcha-il3",         "minimalist watercolor illustration of matcha powder heap with two green tea leaves, isolated on white background, loose soft brush strokes, deep moss green palette, botanical food art, no shadow"),
    ("karamel-il3",        "minimalist watercolor illustration of caramel sauce drizzle drops with three coffee beans, isolated on white background, loose soft brush strokes, warm amber brown palette, botanical food art, no shadow"),
    ("beyaz-cikolata-il3", "minimalist watercolor illustration of two broken white chocolate squares with a small cocoa flower, isolated on white background, loose soft brush strokes, ivory warm cream palette, botanical food art, no shadow"),
]

client = replicate.Client(api_token=TOKEN)

def run_with_retry(model, input_data, retries=5, wait=15):
    for attempt in range(retries):
        try:
            return client.run(model, input=input_data)
        except Exception as e:
            if '429' in str(e) and attempt < retries - 1:
                print(f"  rate limit — {wait}s bekleniyor...", flush=True)
                time.sleep(wait)
            else:
                raise

for slug, prompt in items:
    print(f"\n▶ {slug}", flush=True)
    try:
        # Step 1: Flux-schnell ile üret
        print("  generating...", flush=True)
        gen_output = run_with_retry(
            "black-forest-labs/flux-schnell",
            {
                "prompt": prompt,
                "num_outputs": 1,
                "aspect_ratio": "1:1",
                "output_format": "png",
                "output_quality": 95,
            }
        )
        # FileOutput'tan bytes oku
        file_output = gen_output[0] if isinstance(gen_output, list) else gen_output
        img_bytes = file_output.read()
        print("  ✓ generated", flush=True)

        # Step 2: Lokal rembg ile arka planı kes
        print("  removing background (local rembg)...", flush=True)
        input_img = Image.open(io.BytesIO(img_bytes)).convert("RGBA")
        output_img = remove(input_img)
        print("  ✓ background removed", flush=True)

        # Step 3: Kaydet
        filepath = f"{OUT}/{slug}.png"
        output_img.save(filepath, "PNG")
        print(f"  ✓ saved → {slug}.png", flush=True)

        # Rate limit koruma
        time.sleep(12)

    except Exception as e:
        print(f"  ✗ error: {e}", flush=True)

print("\n✅ Done!")

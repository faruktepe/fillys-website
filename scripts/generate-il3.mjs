import fs from 'fs/promises';
import path from 'path';

const TOKEN = process.env.REPLICATE_API_TOKEN;
const OUT = '/Users/yikargecer/Desktop/fillys-website/public/media';

const items = [
  {
    slug: 'vanilya-il3',
    prompt: 'minimalist watercolor illustration of a vanilla orchid flower with one vanilla bean pod, isolated on white background, loose soft brush strokes, warm cream and golden palette, botanical food art, no shadow, no text',
  },
  {
    slug: 'pistachio-il3',
    prompt: 'minimalist watercolor illustration of three pistachio nuts cracked open showing vibrant green, isolated on white background, loose soft brush strokes, fresh green and beige palette, botanical food art, no shadow, no text',
  },
  {
    slug: 'matcha-il3',
    prompt: 'minimalist watercolor illustration of a small heap of matcha powder with two green tea leaves beside it, isolated on white background, loose soft brush strokes, deep moss green palette, botanical food art, no shadow, no text',
  },
  {
    slug: 'karamel-il3',
    prompt: 'minimalist watercolor illustration of caramel sauce drizzle drops with three whole coffee beans, isolated on white background, loose soft brush strokes, warm amber and dark brown palette, botanical food art, no shadow, no text',
  },
  {
    slug: 'beyaz-cikolata-il3',
    prompt: 'minimalist watercolor illustration of two broken white chocolate squares with delicate cocoa flower, isolated on white background, loose soft brush strokes, ivory and warm cream palette, botanical food art, no shadow, no text',
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function post(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      Prefer: 'wait=90',
    },
    body: JSON.stringify(body),
  });
  return res.json();
}

async function poll(id) {
  for (let i = 0; i < 200; i++) {
    await sleep(3000);
    const res = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    const d = await res.json();
    if (d.status === 'succeeded') return d;
    if (d.status === 'failed') throw new Error('Failed: ' + d.error);
    process.stdout.write('.');
  }
  throw new Error('Timeout');
}

async function save(url, filepath) {
  const res = await fetch(url);
  const buf = await res.arrayBuffer();
  await fs.writeFile(filepath, Buffer.from(buf));
}

async function main() {
  for (const item of items) {
    console.log(`\n▶ ${item.slug}`);

    // 1. Generate with Flux-dev
    let gen = await post('https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions', {
      input: {
        prompt: item.prompt,
        num_outputs: 1,
        aspect_ratio: '1:1',
        output_format: 'png',
        output_quality: 95,
      },
    });
    if (gen.status !== 'succeeded') {
      console.log('  polling generation...');
      gen = await poll(gen.id);
    }
    const imgUrl = Array.isArray(gen.output) ? gen.output[0] : gen.output;
    console.log(`\n  ✓ generated`);

    // 2. Remove background with rembg
    let bg = await post('https://api.replicate.com/v1/models/cjwbw/rembg/predictions', {
      input: { image: imgUrl },
    });
    if (bg.status !== 'succeeded') {
      console.log('  polling rembg...');
      bg = await poll(bg.id);
    }
    const finalUrl = bg.output;
    console.log(`  ✓ background removed`);

    // 3. Save
    const filepath = path.join(OUT, `${item.slug}.png`);
    await save(finalUrl, filepath);
    console.log(`  ✓ saved → ${item.slug}.png`);
  }
  console.log('\n✅ All done!');
}

main().catch(console.error);

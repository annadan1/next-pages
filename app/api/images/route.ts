import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const imagesDirectory = path.join(process.cwd(), 'public/images');

  const filenames = fs.readdirSync(imagesDirectory);

  const images = filenames.map((name) => ({
    name,
    url: `/images/${name}`,
  }));

  return NextResponse.json(images);
}

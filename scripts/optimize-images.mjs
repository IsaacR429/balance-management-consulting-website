import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

const images = [
  {
    input: "src/assets/images/impact/impact-hero.jpg",
    output: "src/assets/images/impact/impact-hero.webp",
    width: 1920,
    quality: 82,
  },
  {
    input: "src/assets/images/about/about-hero.jpg",
    output: "src/assets/images/about/about-hero.webp",
    width: 1920,
    quality: 82,
  },
  {
    input: "src/assets/images/about/noida.jpg",
    output: "src/assets/images/about/noida.webp",
    width: 1400,
    quality: 82,
  },
  {
    input: "src/assets/images/about/mohali.jpg",
    output: "src/assets/images/about/mohali.webp",
    width: 1400,
    quality: 82,
  },
  {
    input: "src/assets/images/about/edmonton.jpg",
    output: "src/assets/images/about/edmonton.webp",
    width: 1400,
    quality: 82,
  },
];

for (const image of images) {
  const inputPath = path.join(root, image.input);
  const outputPath = path.join(root, image.output);

  await sharp(inputPath)
    .rotate()
    .resize({
      width: image.width,
      withoutEnlargement: true,
    })
    .webp({
      quality: image.quality,
      effort: 6,
    })
    .toFile(outputPath);

  const before = (await fs.stat(inputPath)).size;
  const after = (await fs.stat(outputPath)).size;

  console.log(
    `${image.input} -> ${image.output} | ` +
      `${(before / 1024 / 1024).toFixed(2)} MB -> ` +
      `${(after / 1024 / 1024).toFixed(2)} MB`,
  );
}

console.log("\nImage optimization complete.");

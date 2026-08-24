import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = path.resolve("assets-source/images/expertise");
const outputDir = path.resolve("src/assets/images/expertise");

await fs.mkdir(outputDir, { recursive: true });

const images = [
  {
    input: "expertise-hero.jpg",
    output: "expertise-hero.webp",
    width: 1800,
  },
  {
    input: "strategy-transformation.jpg",
    output: "strategy-transformation.webp",
    width: 1200,
  },
  {
    input: "operations-governance.jpg",
    output: "operations-governance.webp",
    width: 1200,
  },
  {
    input: "technology-cybersecurity.jpg",
    output: "technology-cybersecurity.webp",
    width: 1200,
  },
  {
    input: "ai-data-automation.jpg",
    output: "ai-data-automation.webp",
    width: 1200,
  },
];

for (const image of images) {
  const inputPath = path.join(sourceDir, image.input);
  const outputPath = path.join(outputDir, image.output);

  await sharp(inputPath)
    .resize({
      width: image.width,
      withoutEnlargement: true,
    })
    .webp({
      quality: 82,
      effort: 6,
    })
    .toFile(outputPath);

  console.log(`Optimized: ${image.output}`);
}

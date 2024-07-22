import OpenAI from "openai";
import dotenv from "dotenv";
import path from "path";
import base64Img from "base64-img";
import { fileURLToPath } from "url";

// Define __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
    // set the path to the local image
    const imagePath = path.join(__dirname, 'images', 'base64Image.jpg');

    // convert the image to base64
    const base64Image = base64Img.base64Sync(imagePath);

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "user",
                content: [
                    { type: "text", text: "What is in this image?" },
                    {
                        type: "image_url",
                        image_url: {
                            url: `data:image/jpeg;base64,${base64Image.split(',')[1]}`,
                        },
                    },
                ],
            },
        ],
    });
    console.log(response.choices[0].message.content);
}

main();

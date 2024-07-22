import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

// declare a constant that will contain new OpenAI object 
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateNewImage(description) {
    try {
        if (!process.env.OPENAI_API_KEY) {
            throw new Error("Please, create .env file and set your OPENAI_API_KEY there")
        }

        // declare a constant that will store the result of the api request
        const response = await openai.images.generate({
            model: "dall-e-3", // indicate which model should be used when generating the image
            prompt: description, // a variable that is passed as an argument to a function generateNewImage that contains a description based on which the image will be generated
            n: 1, // specify how many images need to be generated
            size: "1024x1792", // set the extension of the generated image
        });

        const image_url = response.data[0].url; // declare a constant that will contain the url of the image
        console.log("Generated image url:", image_url);
    } catch (error) {
        console.error("Error generating:", error.message);
    }
}

generateNewImage("Big waterfall at sunrise")
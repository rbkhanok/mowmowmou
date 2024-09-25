const fs = require('fs');
const { promisify } = require('util');
const fetch = require('node-fetch');
const { createReadStream, unlink } = require('fs');
const path = require('path');

const writeFile = promisify(fs.writeFile);
const deleteFile = promisify(unlink);

module.exports = {
    config: {
        name: "flux4",
        aliases: ["flux3", "img2"],
        version: "1.0.0",
        author: "Rahad",
        role: 0,
        category: "Image",
        shortDescription: {
            en: "Fetches images from Rahad API.",
            vi: "Lấy hình ảnh từ Rahad API."
        },
        longDescription: {
            en: "This command fetches images from Rahad API based on the provided query.",
            vi: "Lệnh này lấy hình ảnh từ Rahad API dựa trên truy vấn được cung cấp."
        },
        guide: {
            en: "Use the command followed by your query to get images from Rahad API.",
            vi: "Sử dụng lệnh sau đó là truy vấn của bạn để nhận hình ảnh từ Rahad API."
        }
    },
    onStart: async ({ event, args, message, api }) => {
        if (args.length < 2) {
            await message.reply("Please provide a query to fetch images.");
            return;
        }

        const query = args.slice(1).join(" ");
        const apiUrl = `https://rahad-api.netlify.app/image?q=${query}`;

        try {
            const response = await fetch(apiUrl);
            
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();

            if (data.success && data.image_urls && data.image_urls.length > 0) {
                const imageUrls = data.image_urls;
                let messageContent = "Here are the images:\n";
                
                const attachments = [];
                const tempFilePaths = [];
                
                for (let i = 0; i < imageUrls.length; i++) {
                    const imageUrl = imageUrls[i];

       
                    const imageResponse = await fetch(imageUrl);
                    const buffer = await imageResponse.buffer();
                    
      
                    const imagePath = path.join('/tmp', `${i + 1}.jpg`);
                    await writeFile(imagePath, buffer);

                  
                    attachments.push(createReadStream(imagePath));
                    tempFilePaths.push(imagePath);

                  
                    messageContent += `${imageUrl}\n`;
                }
                
       
                await api.sendMessage({ body: messageContent, attachment: attachments }, event.threadID);

            
                for (const imagePath of tempFilePaths) {
                    await deleteFile(imagePath);
                }
            } else {
                await message.reply("No images found for your query.");
            }
        } catch (error) {
            console.error(`Error fetching images: ${error.message}`);
            await message.reply("An error occurred while fetching the images. Please try again later.");
        }
    }
};

const fs = require('fs');
const path = require('path'); // Import 'path' module
const ImageDownloader = require('image-downloader');

module.exports = {
  config: {
    name: "girl",
    version: "1.0.0",
    author: "Replit AI",
    countDown: 5,
    role: 0,
    description: {
      vi: "Gửi ảnh gái xinh",
      en: "Send cute girl images"
    },
    category: "Fun",
    guide: {
      vi: "Dùng lệnh -girl để gửi ảnh gái xinh",
      en: "Use command -girl to send cute girl images"
    }
  },

  langs: {
    vi: {
    },
    en: {
    }
  },

  onStart: async function ({ message, args, getLang }) {
    const imageUrls = fs.readFileSync('image_urls.txt', 'utf8').split('\n');
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const imageUrl = imageUrls[randomIndex].trim();

    try {
      const tempImagesDir = path.join(__dirname, 'temp_images'); // Dynamic path
      fs.mkdirSync(tempImagesDir, { recursive: true }); // Create the folder if it doesn't exist
      const { filename } = await ImageDownloader.image({
        url: imageUrl, 
        dest: tempImagesDir
      });
      await message.reply({ files: [{ url: `${tempImagesDir}/${filename}` }] });
    } catch (error) {

      console.error('Error downloading image:', error);
      console.error('Image URL:', imageUrl); // Log the specific URL
      await message.reply("Couldn't find an image right now. Try again later.");
    }
  }
};
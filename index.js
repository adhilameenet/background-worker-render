const axios = require("axios");
const makeApiRequest = async () => {
    try {
        console.log("Sending API request...");
        const response = await axios.get("https://task-manager-f5dx.onrender.com/api/tasks");  
        console.log("API Response:", response.data);
    } catch (error) {
        console.error("Error making API request:", error.message);
    }
};

setInterval(makeApiRequest, 10 * 60 * 1000);
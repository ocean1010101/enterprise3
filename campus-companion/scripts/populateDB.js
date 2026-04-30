const fs = require('fs');
const path = require('path');

function initDatabase() {
    console.log("--- Boreal University Database Initialization ---");

    // 1. Get the current folder path
    const currentDir = process.cwd();
    console.log(`Checking in: ${currentDir}`);

    // 2. Define the target paths
    const dataFolderPath = path.join(currentDir, 'data');
    const seedFilePath = path.join(dataFolderPath, 'seedData.json');

    // 3. Debug: List files in the data folder to check for typos
    if (fs.existsSync(dataFolderPath)) {
        const files = fs.readdirSync(dataFolderPath);
        console.log(`Files found in /data: [${files.join(', ')}]`);
    } else {
        console.error("❌ Error: The 'data' folder was not found in this directory.");
        return;
    }

    // 4. Final check for the JSON file
    if (!fs.existsSync(seedFilePath)) {
        console.error(`❌ Error: 'seedData.json' not found at ${seedFilePath}`);
        console.log("Tip: Check if the file is accidentally named seedData.json.txt or SeedData.json");
        return;
    }

    try {
        const rawData = fs.readFileSync(seedFilePath, 'utf8');
        const data = JSON.parse(rawData);
        
        console.log("------------------------------------------------");
        console.log("✅ DATABASE POPULATION SUCCESSFUL");
        console.log(`Records Loaded: ${data.events.length} Events, ${data.courses.length} Courses.`);
        console.log("------------------------------------------------");
    } catch (err) {
        console.error("❌ Error processing JSON:", err.message);
    }
}

initDatabase();
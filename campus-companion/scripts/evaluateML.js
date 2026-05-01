const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/seedData.json'), 'utf8'));
const events = data.events;

console.log("--- DATABASE SCANNER ---");
console.log(`Total events found: ${events.length}`);

// Let's look at the first 5 events specifically
events.slice(0, 5).forEach(e => {
    console.log(`ID: ${e.id} | Title: ${e.title} | Tags: ${JSON.stringify(e.tags)}`);
});

function calculateDistance(vecA, vecB) {
    if (!vecA || !vecB) return 999;
    return Math.sqrt(vecA.reduce((sum, val, i) => sum + Math.pow(val - (vecB[i] || 0), 2), 0));
}

console.log("\n--- RUNNING EVALUATION ---");
const testEvent = events[0]; 

const recommendations = events
    .filter(e => e.id !== testEvent.id)
    .map(e => ({ 
        title: e.title, 
        cat: e.category, 
        hasTags: !!e.tags,
        dist: calculateDistance(testEvent.tags, e.tags) 
    }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, 3);

recommendations.forEach((res, i) => {
    console.log(`${i+1}. ${res.title} | Tags Found: ${res.hasTags} | Distance: ${res.dist}`);
});
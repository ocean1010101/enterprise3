const fs = require('fs');
const path = require('path');

// Load Data
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/seedData.json'), 'utf8'));
const events = data.events;

/**
 * ML Logic: Simple k-Nearest Neighbors (k-NN) using Euclidean Distance
 * We calculate how "far" every event is from the one the user likes.
 */
function calculateDistance(vecA, vecB) {
    return Math.sqrt(vecA.reduce((sum, val, i) => sum + Math.pow(val - vecB[i], 2), 0));
}

function recommendEvents(likedEventId, k = 3) {
    const targetEvent = events.find(e => e.id === likedEventId);
    if (!targetEvent) return [];

    console.log(`\nTarget Event: "${targetEvent.title}" [${targetEvent.category}]`);

    // Calculate distances to all other events
    const recommendations = events
        .filter(e => e.id !== likedEventId)
        .map(e => ({
            ...e,
            distance: calculateDistance(targetEvent.tags, e.tags)
        }))
        .sort((a, b) => a.distance - b.distance) // Smallest distance = most similar
        .slice(0, k);

    return recommendations;
}

// Basic Evaluation: Qualitative Inspection
console.log("--- Qualitative Inspection (Evaluation) ---");
const results = recommendEvents(1); // Recommend based on Volleyball (Sports)
results.forEach((res, i) => {
    console.log(`${i + 1}. ${res.title} (Distance: ${res.distance.toFixed(2)})`);
});
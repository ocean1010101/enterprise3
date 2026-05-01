1 - Define Features

So for the recommendation feature to work, I took each event from the database and gave them a numerical vector based on their category.
So a sports event will have a vector like [1, 0, 0] and an academic event will have one that looks like [0, 1, 0].
The model looks at these to understand what event its looking at.

2 - Explanation of Model Choice

The model I chose is the k-Nearest Neighbours algorithm. The k-NN will calculate the distance between an event thats been clicked on and all the others and will recommend the closest neighbouring event. 
So it just finds the shortest distance between the vectors and returns a recommendation based off that. 

3 - Basic Evaluation

So to make sure the code worked, I created and ran a test script called "evaluateML.js" to test if the models calculations was working. This simulated a student signing up for a sports event and the algorithm returned a distance of 0 for all sports events showing that it filtered out the other categories.

4 - Fictional Data

All data is completely fictional, I asked Google Gemini to generate all the events for me including their dates, times and locations. This data was put inside a JSON file which acted as the database.


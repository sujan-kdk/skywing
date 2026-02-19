// ai-config.js

// API configuration for AI travel recommendations

// Claude API setup
const CLAUDE_API_URL = 'https://api.claude.com/v1/recommendations';
const CLAUDE_API_KEY = 'YOUR_CLAUDE_API_KEY'; // Replace with your actual API key

// Mock recommendations database
const mockRecommendations = [
    { id: 1, destination: 'Paris', advice: 'Visit the Eiffel Tower!', rating: 5 },
    { id: 2, destination: 'Tokyo', advice: 'Explore the cherry blossoms.', rating: 4 },
    { id: 3, destination: 'New York', advice: 'Check out Times Square.', rating: 5 }
];

// Utility functions
const fetchRecommendations = async () => {
    try {
        const response = await fetch(CLAUDE_API_URL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${CLAUDE_API_KEY}`
            }
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        return mockRecommendations; // fallback to mock data
    }
};

export { fetchRecommendations, mockRecommendations };
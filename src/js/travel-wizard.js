// travel-wizard.js

class TravelWizard {
    constructor() {
        this.steps = [
            { question: 'Where do you want to travel?', answer: '', validated: false },
            { question: 'What type of activities are you interested in?', answer: '', validated: false },
            { question: 'What is your budget range?', answer: '', validated: false },
            { question: 'What dates are you planning to travel?', answer: '', validated: false }
        ];
        this.apiEndpoint = 'https://mock-api.com/recommendations';
    }

    validateStep(stepIndex, answer) {
        if (stepIndex < this.steps.length) {
            this.steps[stepIndex].answer = answer;
            this.steps[stepIndex].validated = true;
            return true;
        }
        return false;
    }

    async getRecommendations() {
        const validatedSteps = this.steps.filter(step => step.validated);
        const response = await fetch(this.apiEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: validatedSteps })
        });
        return response.json();
    }
}

// Usage Example:
const travelWizard = new TravelWizard();

// Validate the first step
travelWizard.validateStep(0, 'Hawaii');

// Get recommendations after validating necessary steps
travelWizard.getRecommendations().then(results => { 
    console.log('Travel Recommendations:', results);
});

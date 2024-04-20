import "bootstrap"
const testimonials = [
  {
    name: "John Doe",
    role: "Frequent Flyer",
    text: "Great service! I always choose this airline for my travels.",
    image: "./images/first.jpg"
  },
  {
    name: "Jane Doe",
    role: "Business Traveler",
    text: "Smooth flights and excellent customer service. Highly recommend!",
    image: "./images/second.jpg"
  },
  {
    name: "Alice Smith",
    role: "Vacationer",
    text: "Comfortable seats, on-time flights. Will fly with them again.",
    image: "./images/third.jpg"
  }
];

function createTestimonialCard(testimonial) {
  return `
        <div class="col-md-4">
          <div class="card">
            <div class="card-footer bg-transparent border-0 text-center">
              <img src="${testimonial.image}" class="testimonial-img img-fluid" alt="${testimonial.name}">
            </div>
            <div class="card-body">
              <h3 class="card-title">${testimonial.name}</h3>
              <p class="card-text">${testimonial.role}</p>
              <p class="card-text">"${testimonial.text}"</p>
            </div>
          </div>
        </div>
      `;
}

function displayTestimonials() {
  const testimonialContainer = document.getElementById("testimonialContainer");
  testimonialContainer.innerHTML = testimonials.map(testimonial => createTestimonialCard(testimonial)).join("");
}

const flights = [
  {
    imgSrc: "./images/flight-1.jpg",
    title: "Flight to Paris",
    description: "Explore the city of love with our special offer on flights to Paris.",
  },
  {
    imgSrc: "./images/flight-2.jpg",
    title: "Beach Getaway",
    description: "Escape to the beach with our discounted flights to tropical destinations.",
  },
  {
    imgSrc: "./images/flight-3.jpg",
    title: "City Break",
    description: "Discover a new city with our affordable flights to top destinations.",
  },
];

function createFlightCard(flight) {
  return `
        <div class="col-md-4">
          <div class="card">
            <img
              src="${flight.imgSrc}"
              class="card-img-top img-fluid featured-img"
              alt="Flight Image"
            />
            <div class="card-body">
              <h5 class="card-title featured-title">${flight.title}</h5>
              <p class="card-text featured-text">${flight.description}</p>
            </div>
          </div>
        </div>
      `;
}

const featuredFlightsContainer = document.getElementById("featuredFlights");
flights.forEach((flight) => {
  const flightCardHTML = createFlightCard(flight);
  featuredFlightsContainer.innerHTML += flightCardHTML;
});


displayTestimonials();
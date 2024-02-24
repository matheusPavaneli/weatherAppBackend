# WeatherApp Backend

The WeatherApp Backend serves as a comprehensive solution for retrieving extensive weather-related information by leveraging the power of various external APIs. Designed with a focus on security and architectural best practices, this application ensures the secure handling of environment variables and API keys while delivering precise weather forecasts, city images, UV indices, and more.

## Getting Started

### Prerequisites

Ensure you have Git installed on your machine to clone the repository. For detailed installation instructions, visit [Git's official site](https://git-scm.com/downloads).

### Clone the Repository

To get a local copy up and running, follow these simple steps:

```
git clone https://github.com/matheusPavaneli/weatherAppBackend.git
```

Navigate to the project directory:

```
cd weatherAppBackend
```

### Setting Up Environment Variables

Before running the application, configure the necessary environment variables. Create a `.env` file in the root directory and include the following variables as per your API credentials:

```
OPENWEATHER_API_KEY=your_openweather_api_key_here
TIMEZONEDB_API_KEY=your_timezonedb_api_key_here
CURRENT_UV_INDEX_API_KEY=your_currentuvindex_api_key_here
UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
```

Changing cors origin in `config`:
```
origin: 'your_origin_url',
```

### Installing Dependencies

Install the required dependencies by running:

```
npm install
```

### Running the Application

To start the server, execute:

```
npm start
```

## Features

- **Current Weather and Forecasts:** Get up-to-the-minute weather conditions and future forecasts for any specified city.
- **Geolocation Conversion:** Converts city names into precise geographical coordinates.
- **City Imagery:** Fetches stunning images related to the city name from Unsplash.
- **UV Index Information:** Provides the current UV index for added health and safety awareness.
- **City, State, and Country Details:** Retrieves detailed naming information including city, state, and country.

## Technologies Used

- **Axios:** For making HTTP requests.
- **Cors:** Implements security protocols to enable cross-origin requests.
- **Express:** A web development framework for Node.js.
- **Express-async-errors:** Middleware for handling exceptions inside of async express routes.
- **Helmet:** Helps secure your apps by setting various HTTP headers.
- **Moment:** A library for parsing, validating, manipulating, and displaying dates and times.
- **SOLID Principles:** Architectural design pattern for writing maintainable and scalable code.

## External APIs

- **OpenWeather:** Provides current weather, forecasts, and geolocation services.
- **Timezonedb:** Offers city, state, and country names along with current time information.
- **CurrentUVIndex:** Delivers real-time UV index data.
- **Unsplash:** Sources city-related images.

## Final Observations

This project was developed with a focus on adhering to architectural standards such as the SOLID principles, simplifying the build process and enhancing maintainability. Intended primarily for portfolio purposes, it demonstrates a comprehensive approach to application development while emphasizing the importance of environment variable security.
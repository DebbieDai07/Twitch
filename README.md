# Twitch Personalized Resources Recommendation Engine

A Full-Stack application that recommends Twitch resources (streams, videos, etc.) to users based on their preferences and history. This project is designed to offer a personalized experience by utilizing recommendation algorithms and real-time Twitch API data.

Check out the deployed version of the app here: [Twitch Recommendation Engine](https://igu28nfzwq.us-east-2.awsapprunner.com/)


## Tech Stack

### Front-End:
- **React.js**: For building the interactive user interface.
- **Ant Design**: For creating a rich and user-friendly experience.

### Back-End:
- **Spring Boot**: For building a full-stack application and RESTful API services.
- **Spring Data JDBC**: For performing CRUD operations on the MySQL database.
- **Caffeine**: For implementing caching to improve performance.

### Database:
- **MySQL**: For storing user data and Twitch resource information.
- **AWS RDS**: For hosting the MySQL database.

### Other Tools:
- **Twitch API**: For retrieving Twitch resources like streams, videos, and clips via OpenFeign.
- **AWS App Runner**: For containerizing and deploying the application.
- **Spring Boot Caching**: For optimized data retrieval and response times.



## Installation

To run this project locally, navigate to the front-end directory:
```
cd twitchfe
```
install the dependencies:
```
npm install
```
run the app:
```
npm start
```


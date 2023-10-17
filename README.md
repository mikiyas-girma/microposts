# Microposts

Microposts is a simple web application built with Vanilla JavaScript and the Bootstrap framework. It showcases a basic social media platform for creating, editing, and deleting microposts. Webpack is used for bundling, and a fake REST API is created using JSON-Server to simulate the back-end.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create new microposts with a title and content.
- Edit existing microposts.
- Delete microposts.
- Simulated back-end using JSON-Server.
- Webpack for bundling and managing project dependencies.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (v14 or higher).
- NPM (Node Package Manager) installed.

### Installation

1. Clone the repository:

bash
git clone https://github.com/yourusername/Microposts.git
cd Microposts
Install project dependencies:
bash
Copy code
npm install
Start JSON-Server (simulated REST API) and the development server:
bash
Copy code
# Start JSON-Server (simulated REST API)
npm run json:server

# Start the development server
npm start
Open your browser and visit http://localhost:3000 to access the application.

## Usage


- Create microposts by filling out the form.
- Edit or delete microposts using the provided options.

## Development

To build and bundle the project for production, use:

bash
Copy code
npm run build

### Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them with descriptive messages.
Push your changes to your fork.
Open a pull request to the main repository.

### License

This project is licensed under the MIT License.

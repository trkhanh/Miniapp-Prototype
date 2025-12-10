# Micro-Frontend Monorepo

This project is a micro-frontend architecture that includes a shell application and multiple mini-apps. The design allows for framework agnosticism and independent deployment of each mini-app.

## Project Structure

```
micro-frontend-monorepo
├── packages
│   ├── shell          # Shell application that integrates mini-apps
│   ├── mini-app-1     # First mini-app
│   ├── mini-app-2     # Second mini-app
│   └── shared         # Shared utilities and types
├── package.json       # Root configuration for the monorepo
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd micro-frontend-monorepo
   ```

2. Install dependencies for all packages:
   ```
   npm install
   ```

### Running the Applications

- To run the shell application:
  ```
  cd packages/shell
  npm start
  ```

- To run Mini-App 1:
  ```
  cd packages/mini-app-1
  npm start
  ```

- To run Mini-App 2:
  ```
  cd packages/mini-app-2
  npm start
  ```

### Architecture Overview

- **Shell Application**: Acts as the main entry point and orchestrates the loading and rendering of mini-apps.
- **Mini-Apps**: Independent applications that can be developed, tested, and deployed separately.
- **Shared Package**: Contains common utilities and types used across the shell and mini-apps to promote code reuse.

### Deployment

Each mini-app can be deployed independently. Ensure that the shell application is aware of the deployed mini-apps' URLs for proper integration.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
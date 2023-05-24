# Pokedex Application

This is a Pokedex application that consists of a backend API built with FastAPI and a frontend UI built with React.

## Getting Started

To run the application, make sure you have Docker and Docker-Compose installed on your system. Then, follow the steps below:

1. Clone this repository:

```git clone https://github.com/thiago-allue/app_pokedex.git```

2. Navigate to the **app_pokedex** directory:

```cd app_pokedex```

3. Build and run the containers using Docker Compose:

```docker-compose up -d```

This command will build the backend and frontend images and start the containers in detached mode.

4. Access the application:
- Backend API: http://localhost:8000
- Frontend UI: http://localhost:3000

## Backend development:

The backend component of the Pokedex application is built with FastAPI. It provides a RESTful API for retrieving Pokemon information.

The backend API provides the following endpoint:

  `GET /pokemon?id={pokemon_id}`: Retrieves information about a specific Pokemon based on its ID. Returns a JSON response with the Pokemon's ID, name, description, and picture.




### Getting Started

To run the backend locally, make sure you have Python and pip installed on your system. Then, follow the steps below:

1. Navigate to the **app_pokedex/backend** directory:

```cd app_pokedex/backend```


2. Install the dependencies:

```pip install -r requirements.txt```


3. Start the backend server:

```uvicorn main:app --reload```

This command will start the backend server and automatically reload it whenever there are code changes.

4. Access the backend API:

[http://localhost:8000](http://localhost:8000)

### Folder Structure

The project structure of the backend is as follows:

- **main.py**: Contains the main application code.
- **test_main.http**: Contains the test cases for the API endpoint.
- **requirements.txt**: Specifies the Python dependencies for the project.

### Customization and Development

 If you make any changes to the backend code, the server will automatically reload and reflect the changes.

### Dependencies

The backend application has the following main dependencies:

- **FastAPI**: A modern, fast (high-performance) web framework for building APIs with Python.
- **requests**: A library for making HTTP requests in Python.
- **uvicorn**: A lightning-fast ASGI server for running the FastAPI application.



## Frontend development:
The frontend component of the Pokedex application, built with React and Typescript. It provides a user-friendly interface where users can search for Pokemon and view their information.

### Getting Started

To run the frontend locally, make sure you have Node.js and npm (Node Package Manager) installed on your system. Then, follow the steps below:

1. Navigate to the **app_pokedex/frontend** directory:  

```cd app_pokedex/frontend```


2. Install the dependencies:

```npm install```


3. Start the development server:

```npm npm start```


This command will start the development server and automatically open the application in your default browser. Any changes you make to the code will trigger hot reloading and be reflected in the browser.

4. Access the frontend UI:

[http://localhost:3000](http://localhost:3000)

### Folder Structure

The project structure of the frontend is as follows:

- **public**: Contains the HTML template and static assets.
- **src**: Contains the source code of the React application.
- **components**: Contains reusable components used in the UI.
- **App.js**: The entry point of the application.
- **index.js**: The main file that renders the App component.

### Customization and Development

- To customize the frontend UI, you can modify the existing components or create new components in the **src/components** directory.

- For styling, you can edit the CSS stylesheets located in the **src/App.css**.

- If you make any changes to the frontend code, the development server will automatically reload the application and reflect the changes in the browser.

## License

This project is licensed under the [MIT License](../LICENSE).


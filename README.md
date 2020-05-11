# List of GitHub Repos

This is a simple app which lists all GitHub repositories according to a search term.

It uses the [Github v3 Search API](https://developer.github.com/v3/search/#search-repositories) which allows you to request a sorted list from the API, and retrieve a watcher count for each result item in a single request (something that the [Repository API](https://developer.github.com/v3/repos/) does not do).

You can see further explanation of each step in the commit history. I've linked the main commits here for ease of reading.

1. Simple Setup – the first commit after the initial commit. I set up the app, request data from the github API, and display it as a crude list with the required pieces of data.

It was built with [Create React App](https://github.com/facebook/create-react-app), all default scripts that apply to it also apply to this project.

## How to run

In the project directory, you can run:

### `yarn install`

Installs all dependencies for this application. 

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

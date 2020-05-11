# List of GitHub Repos

This is a simple app which lists all GitHub repositories according to a search term.

It uses the [Github v3 Search API](https://developer.github.com/v3/search/#search-repositories) which allows you to request a sorted list from the API, and retrieve a watcher count for each result item in a single request (something that the [Repository API](https://developer.github.com/v3/repos/) does not do).

You can see further explanation of each step in the commit history. I've linked the main commits here for ease of reading.

1. [Simple Setup]() – the first commit after the initial commit. I set up the app, request data from the github API, and display it as a crude list with the required pieces of data.
2. [Debouncer]() – I debounce the function that retrieves the search results from the GitHub API to 300ms when the user changes the input. I implement this with throttle-debounce to save time – I avoid lodash since I have no need for all the features it brings. Also contains a critical [bugfix]() as I didn't get the implementation right the first time.
3. [Styling updates]() – some minor styling changes to make the results look a bit easier to read. Needs a lot more work!

## Future features
### Pagination
The API sends 30 results back, but the response headers have the request URLs for the next 30, previous 30 etc.

## Sorting
The Request URL has options for defining sorting and ordering. The URL passed to axios can be broken down further, and the sort and ordering variables retrieved from state.

## Error handling
Currently the implementation for the API request is pretty simplistic. I will implement handling of error responses from the API. Also, unit tests and general test coverage would be nice to implement.

### Responsiveness
I've created a fluid UI for this, and it should be viewable on mobile as well as desktop. An option to view this in a grid view, as well as possibly implementing the grid as the default view on desktop could make for a better UX.

# More Info

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

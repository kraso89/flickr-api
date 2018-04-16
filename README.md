This App is a photo grid consuming the flickr rest api.
The Photo grid is build with lazy loading and infinite scroll (loading more images as you scroll to the bottom of the page)
with an option for searching by photo.
Clicking on a tag makes a search request with the raw tag value.  

It uses React for a View Layer and Redux for state container.

The UI is build with the help of [React-Semantic-UI](https://react.semantic-ui.com/) modules.

Methods used on the api are: 
```
flickr.photos.search
flickr.photos.getRecent
flickr.photos.getInfo
```
Please find the full documentation here : [Flickr Api](https://www.flickr.com/services/api/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Project Structure

```
flickrApi/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
      /actions
        index.js
      /reducers
        index.js
      /utils
        post_api_utils.js
      /views
        Home.js
        SearchComponent.js
        PostComponent.js
        PostDetails.js
    App.css
    App.js
    App.test.js
    index.js
    registerServiceWorker.js
    
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.


## How to get it running
To install the dependencies run `npm install`

After installation is complete run the script `npm start`

This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm test a`

Launches 2 suites of tests, included in App.test.js.
The tests are build using Jest and Enzyme.


  

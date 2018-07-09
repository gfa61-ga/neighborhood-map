# Neighborhood Map
---
This ([demo version here](https://gfa61-ga.github.io/neighborhood-map/)) is a single page application, featuring a map of a neighborhood the user you would like to visit. When a neighborhood address is entered a neighborhood’s map appears, including recommended locations, provided by [FourSquare Places API](https://developer.foursquare.com/).

## Installation and Run

To run the app in production mode:
1. Clone this GitHub repository.
2. Go in the repository folder
3. Install all project dependencies with `npm install`
4. Start the development server with `npm start`
5. With your server running, visit the app in your browser at: `http://localhost:3000/`

## Offline-First Considerations

If you need run a build version of the app, in order to test your offline-first service worker locally:
1. Install a simple http server with `npm install -g serve` (this step is required only once)
2. Remove the "homepage" line from package.json file, if any
3. Build the application with `npm run build`
4. Copy the 'service-worker.js' file and paste it into the 'build' folder to override the default serviceWorker
5. Run the simple http server from your build application with `serve -s build`
6. With your server running, visit the app in your browser at: `http://localhost:5000/`

## Github pages deployment

To deploy the app on gitHub pages:
1. Add `"homepage": "https://gfa61-ga.github.io/neighborhood-map"` in package.json file
2. Deploy the app with `npm run deploy`
3. Copy 'service-worker.js' file's content and paste it into the 'service-worker.js' file, in gh-pages branch of github, to override the default serviceWorker

## App Functionality

The app initially displays:
* the **map** of “Pl. Ipsilon Alonion, Patras, Greece” neighborhood
* a list of up to **50 recommended places** for the neighborhood, provided by the _FourSquare Places API_ and
* **markers** on the map for these places
* **if Geolocation** is available the App will **try to locate user's current location** and **almost instantly will update** the neighborhood

The user
1. Can **choose a place filter** from the top left drop down menu and then **places** in the list and their  markers **update** accordingly.
2. Can **select a place** from the  place list or a marker from the map and then an info window **is shown** with the **title, photo, short user review and address** of this place. (Due to Foursquare API  [limit]( https://developer.foursquare.com/docs/api/troubleshooting/rate-limits) of 50 API Calls per day for place photo and short user review (tip), when the user exceeds this daily limit, only the title and addres of selected places will be displayed for the rest of this day)
3. Can **write the address of a new neighborhood** he wants to visit and **press the `Go` button** and then the map and the recommended places are updated for this new neighborhood
4. Can press the top left button to **toggle the visibility of the place list**.
5. If Geolocation is available, can **reload** the App, **when he moves** to another neighborhood, **to get updated information**.

## Dependencies
This app is created using [create-react-app](https://www.npmjs.com/package/create-react-app) npm package, and is using the following additional packages:
* [google-maps-react](https://www.npmjs.com/package/google-maps-react) - a helper to wrap around the Google maps API
* [gh-pages](https://www.npmjs.com/package/gh-pages) - to publish the app to a gh-pages branch on GitHub. This package needs to add the following lines to the "scripts" key of package.json file:
    >"predeploy": "npm run build",
     "deploy": "gh-pages -d build"

* [prop-types](https://www.npmjs.com/package/prop-types) - for runtime type checking for React props
* [sweetalert](https://www.npmjs.com/package/sweetalert) - a beautiful replacement for JavaScript's "alert"
* [webpack 3.11.0"](https://www.npmjs.com/package/webpack) - to build app for local usage in a browser (versions higher than 3.11.0 don't work),
* [serve](https://www.npmjs.com/package/serve) - to serve the built version of the app locally


## License
This code is distributed under the [MIT license](https://opensource.org/licenses/MIT).

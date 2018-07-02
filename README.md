# Neighborhood Map
---
This ([demo version here](https://gfa61-ga.github.io/neighborhood-map/)) is a single page application, featuring a map of a neighborhood the user you would like to visit. When a neighborhood address is entered a neighborhood’s map appears, including recommended locations, provided by [FourSquare Places API](https://developer.foursquare.com/).

## Installation and Run

1. Clone this GitHub repository.
2. Go in the repository folder
3. Install all project dependencies with `npm install`
4. Start the development server with `npm start`
5. With your server running, visit the app in your browser at: `http://localhost:3000/`

## Offline-First Considerations

If you need to test your offline-first service worker locally:
1. Build the application with `npm run build`
2. Run a simple http server from your build application with `serve -s build`
3. With your server running, visit the app in your browser at: `http://localhost:5000/`

## App Functionality
The app initially displays:
* the **map** of “Pl. Ipsilon Alonion, Patras, Greece” neighborhood
* a list of up to **30 recommended places** for this neighborhood, provided by the _FourSquare Places API_ and
* **markers** on the map for these places

The user
1. Can **choose a place filter** from the top left drop down menu and then **places** in the list and their  markers **update** accordingly.
2. Can **select a place** from the  place list or a marker from the map and then an info window **is shown** with the **title, photo, short user review and address** of this place. (Due to Foursquare API  [limit]( https://developer.foursquare.com/docs/api/troubleshooting/rate-limits) of 50 API Calls per day for place photo and short user review (tip), when the user exceeds this daily limit, only the title and addres of selected places will be displayed for the rest of this day)
3. Can **write the address of a new neighborhood** he wants to visit and **press the `Go` button** and then the map and the recommended places are updated for this new neighborhood
4. Can press the top left button to **toggle the visibility of the place list**.

## License
This code is distributed under the [MIT license](https://opensource.org/licenses/MIT).

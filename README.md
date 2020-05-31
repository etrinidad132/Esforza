# **ESFORZA**


[ESFORZA](https://esforza.herokuapp.com/) is an application that is specialized for tracking outdoor activities such as cycling and running. It is based on the app [Strava](https://www.strava.com/). Due to ten day time constraint, it was not viable to clone every feature from [Strava](https://www.strava.com/). I focused on a few cornerstone features. It has the functionality to create routes by placing markers on a map, give the user the best route between the points, and give the user useful information. Information such as estimated time, distance, and elevation. I will come back to this project in order to add even more features.

## Technologies
------------------------------------------------------------
[ESFORZA](https://esforza.herokuapp.com/) leverages the awesome Ruby on Rails backend framework using PostgreSQL as the database. Also uses the JavaScript React-Redux in order to interface with the frontend.

This project also used the Google Maps JavaScript API. As well as other sub-API that enchance the funtionality of the Maps API. Thse were the Maps Directions API, Maps Elevation API, Static Maps API, and a couple others.

## Features
------------------------------------------------------------
- User authentication
    - Using BCrypt
    - ![Session](https://i.imgur.com/n1CRQ6W.png)


- Dashboard Activity Feed
    - ![Activities](https://i.imgur.com/YE9gxmb.png)
    - Users can click on items in the activity and view their stats

    - An accumulation of all the stats of the user's activities 

- Create, Update, Delete Route
    - Users can create routes

    - Renders an interactive Google map where users can place markers and render the best route between points

    - ![Builder](https://i.imgur.com/7Ir3vN8.png)

    - Estimates that average time it will take to complete the route

    - Estimates the average elevation that will be climbed during the route

    - Measures an approximate distance that will be traveled along the route

    - Each route has a page where users can see more information about each route

    - ![Show](https://i.imgur.com/tLzfZWE.png)

    - Saves the route and displays on the My Routes section of the page, as well as the main dashboard

    - ![Routes](https://i.imgur.com/UnQXf0f.png)


    - Users can edit their own routes, as well as delete them

## Calculating Total Distance
------------------------------------------------------------

- A challenge that I faced for a bit while creating this project was how to calculate the distance that will be traveled during the route. I tried to look through the docs to see if there was a way to just extract this information from one of the google map objects to no avail. 

- I then noticed that the route property on the directions object had some other properties that could be useful. The one that I used was the legs property which was an array of different points along the path. These points all have a distance value which I then iterated over and added them all up in order to figure out the distance. Then I also used a custom time function is order to estimate how long a route would take to navigate.

```JavaScript
calcTotalTime(directions) {
        let distance = 0;
        const route = directions.routes[0];

        for (let i = 0; i < route.legs.length; i++) {
            distance += route.legs[i].distance.value;
        }

        distance /= 1000;
        distance /= 1.60934;
        const distanceString = distance.toFixed(2); // to limit and converts float into a string

        const time = (60 * distanceString / 4.43).toFixed(2);
        this.setState({
            time: time,
            distance: distanceString
        })

        const distanceElement = document.getElementById("distance")
        const timeElement = document.getElementById("time");

        distanceElement.innerHTML = distanceString + " " + "mi";
        timeElement.innerHTML = this.timeConverter(time); // formats time so that it appears nicer in the browser
    }
```

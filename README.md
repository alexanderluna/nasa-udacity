# NASA Udacity

Our project repository for the `Google Mobile Web Challenge 2017`.

> Pairing on Monday 10am CET

We decided to start a new project, in order to solidify our knowledge about Progressive Web Apps and Service Workers and decided to use these core technologies for our project:

- Firebase (Backend & Database)
- ReactJS (Front End)
- Service Workers
- crontab (cron job)

## Installation instructions

```bash
git clone git@github.com:alexanderluna/nasa-udacity.git
cd nasa-udacity

yarn install
yarn start
```

Please read the next section on crontab.


## Crontab

The reason we have to use Crontab is because we are using Firebase and the Spark plan (free tier) only allows for Google API requests not third party ones. We are using NASA's API to get the `Image of Day` thus I created a small node app that gets once a day the `Image of the Day` and posts it via the Command line to our Firebase Database.

The node app itself requires only 1 module: `request-json`:

``` javascript
let request  = require('request-json');

let nasa     = request.createClient('https://api.nasa.gov/planetary/');
let firebase = request.createClient('https://nasa-udacity.firebaseio.com/');

nasa.get('apod?api_key=DEMO_KEY', (err, res, body) => {

  let copyright = body.copyright ? body.copyright : 'Public Domain';

  let data = {
    date: body.date,
    explanation: body.explanation,
    media_type: body.media_type,
    title: body.title,
    url: body.url,
    copyright: copyright
  };

  firebase.post('Images.json', data, (err, res, body) => {
    if (err) return console.log("Error posting new image");
    console.log("Saved Images successfully");
  });
});
```

As you can see, it does a `GET` request to NASA's API, parses the response and creates a `POST` request to our database effectively bypassing our problem.

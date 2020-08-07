# Patient Pre-visit Screening Dashboard
This is a dashboard website project I did as part of an interview process. The prompt was to create a dashboard based on a mockup screenshot, implementing a backend server, database connection, and a fully-featured datatable with dropdowns, column sorts, search (filtering), pagination, and custom formatting.

## Screenshot
You can take a peek at the app [here](https://github.com/joshuaandrewhoffman/readmeImages/blob/master/patientScreening.PNG)

## Dependencies
This application assumes the presence of a `.env` file with a connection string to a mongodb database. No data needs to be present for the application to run; it will check for the presence of test data, and bootstrap itself with the necessary data if it isn't already present. Your connection string variable should be called `DB_CONN_STRING`.

## Available Scripts

In the project directory, you should run:
### `node src/server.js`
To start the express server.<br />
### `yarn start`
To runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

## Future Work
The original mock has some red styling for any patients in the "Unconfirmed" state -- this turns out to be a bit tricky. It necessitates a custom formatter (similar to Date/Phone number), but is a bit more complex because it's a dropdown.
<br />
Additionally, the Date of Birth filtering currently doesn't understand month abbreviations; it is driven off of the numeric representation. This works fine when filtering on Day or Year, but breaks when typing alphabetical months.

## Choice of Library
I did a fair amount of research on table libraries before digging into this project. While older and certainly not the most popular option, Tabulator had by far the most fully-featured offering. Their React support was solid and I didn't struggle much with their documentation. Overall I think this was a good choice and one I would make again!
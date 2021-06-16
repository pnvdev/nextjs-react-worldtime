# TIMEZONES SEARCH
## A timezones search made with React over Next.js

DEMO: https://nextjs-react-worldtime.vercel.app/

First, install dev dependences

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

### The project does
* Has a search box with auto complete. 
* Below are all the selected timezones, each with its respective delete button.
* To obtain the data we use the API of http://worldtimeapi.org/
* The chosen timezones are updated every five seconds
* Keeps the list items when I return to the app after closing it, using localStorage.


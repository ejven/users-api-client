# Client application for users-api

This is a sample web application consuming [users-api](https://github.com/ejven/users-api).

### Pre-requisites
Edit configuration file **js/config.js** to setup your URL of API.

```javascript
app.Config = {
	api_url: "http://localhost:8000/users/"
};
```

### Getting started
The application is powered by JavaScript therefore you can use any webserver to serve static files. However it will not work locally by opening file with browser(file://...), you must use a webserver.
For Node.js you can use [serve](https://www.npmjs.com/package/serve).

```
git clone <this repo>
# Now edit js/config.js to setup correct API URL

# Install serve
npm install serve -g

# Run serve webserver
serve .
```

Now the application should be running on http://localhost:3000

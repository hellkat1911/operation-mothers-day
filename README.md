# Operation: MOTHERS-DAY

#### [React](https://reactjs.org/) / [Express](https://expressjs.com/) / [VonageSDK](https://dashboard.nexmo.com/getting-started/sms)

Our best-looking undercover operative has gone missing and we have to act fast to find her, confirm her identity, and extract her from danger! 😎

<hr />

### Development

`npm run start` &ndash; serve the React app with hot reload + start the Node server. There are also separate commands to run just one or the other (`npm run front` and `npm run back`)

`npm run build` &ndash; build the React app for production

`npm run server` &ndash; start the Node app with `node` instead of `nodemon`

`npm run eject` &ndash; if you're not happy with the default configuration from [create-react-app](https://create-react-app.dev/), this command will give you finer-grained access to it

By default, the React app is served at `localhost:3000` and the Node server at `localhost:7777/api`. This can be customized by updating the .env files (`.env.development`, `.env.production`, `api.env`).

<hr />

### Deployment

Copy `api.env.example` to `api.env`:

```bash
$ cp api.env.example api.env
```

Replace the example values with the correct information for your environment.

Install dependencies:

```bash
$ npm i
```

Build the React app:

```bash
$ npm run build
```

Start the Node app with any process server (such as [pm2](https://pm2.keymetrics.io/)):

```bash
$ pm2 start npm --name omd-api -- run server
```

If you want to serve requests to both ends of the app over one domain, make sure you proxy API requests to the port where the Node server is running. In Apache, add this to your VirtualHost:

```conf
ProxyPass /api http://localhost:7777/api
ProxyPassReverse /api http://localhost:7777/api
ProxyPreserveHost On
```

<hr />

### VonageSDK for sending SMS from the browser

Create an account with [Vonage](https://dashboard.nexmo.com/sign-in?redirect=sms) in order to get the necessary `API_KEY` and `API_SECRET`, and your `FROM` number. You'll only be able to send test messages until you create a new "Brand", at which point you can send SMS messages to a single number (the one you signed up with). The number can be changed but requires a 2FA code to prove ownership.

During development, you can set the `DISABLE_APIS` flag in `api.env` to enable / disable calls to the Vonage API.

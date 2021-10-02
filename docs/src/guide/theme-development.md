# Theme Development

If you have knowledge in web development and want to make deeper changes in the theme or if you want to create a theme based on Galerie you can follow this guide to learn how to setup a development environment easily.

## Development Mode

The following steps will guide you so that you can have a development environment on your machine without having to install Ghost locally:

1. Install [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/).

2. Install [Nodejs](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm).

3. Make a backup of the theme folder, just in case.

4. Open a terminal and change to the `galerie/src` directory.

5. Run `npm install`.

6. Run `npm run get-database` to get the Ghost database dump.

7. From Ghost 4 onwards you need to pass your Stripe Webhook Secret as an environment variable which you can get from the [Webhooks page](https://dashboard.stripe.com/webhooks) in your dashboard.

8. Open the file `src/docker-compose.yml` with a text/code editor and search for the following piece of code:

```
WEBHOOK_SECRET=
```

9. Copy the **Signing Secret** from your Stripe Webhook and paste it in that line of code, it should look something like this:

```
WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxx
```

10. Save your changes.

For more information on how to set up your Stripe account please go to [this link](https://ghost.org/help/setup-members/).

11. Start Docker.

12. Run `npm run docker-watch`.

If all goes well, a tab will open in your browser with this URL: `http://localhost:3000`. From that moment on you can start making changes in the templates, stylesheets and Javascript files and your changes will be automatically reflected in the browser, cool right?

To access the Ghost Admin just enter this URL in your browser: `http://localhost:3000/ghost`. The credentials are:

```
Email address: galerie@example.com
Password: 0123456789
```

You might need to run `docker-compose restart` after adding new files, this is because (from Ghost documentation):

> If you add any new files to your theme during development, you'll need to restart Ghost to see the changes take effect.

::: warning
Please ignore the following error if it appears after running `npm install`:
```
fatal: not a git repository (or any of the parent directories): .git
husky > Failed to install
```
:::

::: warning
If after a few seconds the page does not load, please wait a little longer or refresh the page several times, it will load ;)
:::

## Production Mode

When you are done making all your changes you can run `npm run production` ( within the `src` directory) to build your theme in production mode.

`npm run production` will concatenate, minify, optimize and compress all your files and finally will generate the file `galerie.zip` in the root of the theme folder.

Now you can upload this file in the Ghost Admin and you're ready to go!

# Theme Development

If you have knowledge in web development and want to make deeper changes in the theme or if you want to create a theme based on Galerie you can follow this guide to learn how to setup a development environment easily.

## Development Mode

The following steps will guide you so that you can have a development environment on your machine without having to install Ghost locally:

1. Install [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/)

2. Install [Nodejs](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm)

3. Make a backup of the theme folder, just in case

4. Open a terminal and change to the `galerie/src` directory

5. Run `npm install`

6. Run `npm run get-database` to get the Ghost database dump

7. From Ghost 4 onwards you need to pass your Stripe Webhook Secret as an environment variable which you can get from the [Webhooks page](https://dashboard.stripe.com/webhooks) in your dashboard

8. Open the file `src/docker-compose.yml` with a text/code editor and search for the following piece of code:

```
WEBHOOK_SECRET:
```

9. Copy the **Signing Secret** from your Stripe Webhook and paste it in that line of code, it should look something like this:

```
WEBHOOK_SECRET: whsec_xxxxxxxxxxxxxxxxxxxxxxx
```

10. Save your changes

For more information on how to set up your Stripe account please go to [this link](https://ghost.org/help/setup-members/)

11. Start Docker

12. Run `npm run docker-watch`

**IMPORTANT**: You probably will need to wait a little bit, even if a browser’s tab is opened, please keep waiting since the whole image and database will be created from scratch, probably it would take a few minutes, this will happen only the first time, the next time it should be faster.

If everything goes well you should see this page in your browser:

![](https://user-images.githubusercontent.com/1477503/185713373-bd05eb67-cb19-4f8d-b65b-877aab3471f5.png)

After you enter your own credentials you still need to activate the theme in the Ghost Admin: Settings —> Design —> Themes —> Advanced

![](https://res.cloudinary.com/edev/image/upload/v1661973905/galerie/CleanShot_2022-08-31_at_21.24.18.png)

You only need to do this once, the next time you run the command everything should be ready automatically.

Now you should have an instant development setup and when you make changes you will see them right into the browser (hot-reloading).

You can see your blog in the following URL: `http://localhost:3000`

To access the Ghost Admin just enter this URL in your browser: `http://localhost:3000/ghost`

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

### Credentials

As of version 2.1.0 of the theme you must provide your own credentials when accessing Ghost Admin for the first time, otherwise, if you are using an earlier version, you must enter the following credentials to gain access:

Email address: `galerie@example.com`
<br>
Password: `0123456789`

## Production Mode

When you are done making all your changes you can run `npm run production` ( within the `src` directory) to build your theme in production mode.

`npm run production` will concatenate, minify, optimize and compress all your files and finally will generate the file `galerie.zip` in the root of the theme folder.

Now you can upload this file in the Ghost Admin and you're ready to go!

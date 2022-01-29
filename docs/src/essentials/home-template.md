# Home Template

Galerie offers two ways to present the first section of the home page: **Featured Articles Slider** and **Hero Section**.

## Featured Articles Slider

![Home slider](https://res.cloudinary.com/edev/image/upload/v1633266388/galerie/home-slider.jpg)

The first section of the home page is displayed this way by default. The first slide shows the title and description of the publication as well as the cover image.

### Change Featured Articles Limit

If you mark some articles as **featured** they will appear individually on the following slides, the slider will show up to **5** featured articles.

If you wish to change the featured articles limit follow these steps:

1. Unzip the theme folder.

2. Open the file `partials/home-slider.hbs` with a text/code editor and look for the following line of code:

```hbs
limit="5" as |featured|
```

3. Replace the number `5` with the number yo prefer and save your changes.

4. Zip the theme folder and upload it again.

### Restore Featured Articles Slider

If you decided to use the Hero Section instead of the Slider and now you want to return it to the way it was, you can choose this section in the theme design settings as shown below:

![](https://res.cloudinary.com/edev/image/upload/v1643469408/galerie/CleanShot_2022-01-29_at_16.15.45.png)

If you are not using Ghost 4.20.0 or later and Galerie 1.1.0 or later you can do the following instead:

1. Unzip the theme folder.

2. Open the file `index.hbs` with a text/code editor and look for the following line of code:

```hbs
{{> home-hero}}
```

3. Replace that line with the following code:

```hbs
{{> home-slider}}
```

4. Save your changes.

5. Zip the theme folder and upload it again.
## Hero Section

![Home hero](https://res.cloudinary.com/edev/image/upload/v1633266389/galerie/home-hero.jpg)

The Hero Section is a simpler representation that does not show featured articles, it simply shows a single section with the title, description and cover image of the publication.

### Activate Hero Section

If you do not want to show featured articles in the first section of the home page you can use the Hero Section instead, you can choose this section in the theme design settings as shown bellow:

![](https://res.cloudinary.com/edev/image/upload/v1643469780/galerie/CleanShot_2022-01-29_at_16.22.28.png)

If you are not using Ghost 4.20.0 or later and Galerie 1.1.0 or later you can do the following instead:

1. Unzip the theme folder.

2. Open the file `index.hbs` with a text/code editor and look for the following line of code:

```hbs
{{> home-slider}}
```

3. Replace that line with the following code:

```hbs
{{> home-hero}}
```

5. Save your changes.

6. Zip the theme folder and upload it again.

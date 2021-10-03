# Light & Dark Mode

Galerie has three appearance modes: **Automatic** (default), **Light** and **Dark**. The user can set the preferred mode from the main menu.

![Theme mode](https://res.cloudinary.com/edev/image/upload/v1633199586/galerie/theme-mode.png)

## Automatic

The Automatic mode is selected by default, it adapts automatically according to the user's operating system preferences.

## Light

The Light mode is used when the user explicitly selects this mode from the menu or if the Automatic mode is enabled and the user's operating system has the light mode enabled. If the user selects this mode from the menu, this mode will remain activated regardless of the operating system mode unless the user selects another mode.

The color palette of the Light mode is as follows:

```html
<style>
  :root {
    --foreground: hsl(0, 0%, 7%);
    --background: hsl(0, 0%, 100%);
    --header-background: rgba(255, 255, 255, 0.5);
    --light-background: hsl(0, 0%, 91%);
    --light-secondary-background: hsl(0, 0%, 98%);
    --accent-color: hsl(0, 0%, 7%);
    --border: hsl(0, 0%, 91%);
    --light-text: hsl(0, 0%, 36%);
  }
</style>
```

Changing the colors of the Light mode is very easy, for example, if you want to change the background color you can inject the following code in the Ghost Admin (Settings --> Code injection --> Site Header):

```html
<style>
  :root {
    --background: #fff1e6; /* You can use any color you want */
  }
</style>
```

## Dark

The Dark mode is used when the user explicitly selects this mode from the menu or if the Automatic mode is enabled and the user's operating system has the dark mode enabled. If the user selects this mode from the menu, this mode will remain activated regardless of the operating system mode unless the user selects another mode.

The color palette of the Dark mode is as follows:

```html
<style>
  [theme-mode="dark"] {
    --foreground: hsl(240, 25%, 98%);
    --background: hsl(245, 17%, 12%);
    --header-background: rgba(27, 26, 37, 0.5);
    --light-background: hsl(225, 13%, 18%);
    --light-secondary-background: hsl(225, 13%, 8%);
    --accent-color: hsl(240, 25%, 98%);
    --border: hsl(257, 15%, 20%);
    --light-text: hsl(240, 25%, 78%);
  }
</style>
```

The process to change the colors of the dark mode is the same, for example, if you want to change the background color you should inject the following code:

```html
<style>
  [theme-mode="dark"] {
    --background: #14213d; /* You can use any color you want */
  }
</style>
```

::: tip
You can of course change any color you want to adapt the color palettes to your needs, feel free to play with the color values, just remember not to change the name of the variables.
:::

# Comments

## Disqus

Galerie integrates perfectly with [Disqus](https://disqus.com/), all you have to do is the following:

1. After creating an account in Disqus, you have to create a new site in the [admin](https://disqus.com/admin) of that platform.

2. You must copy the **shortname** of your brand new site, this can be found in the preferences of your site.

3. Unzip the theme folder.

4. Open the file `partials/comments.hbs` with a code/text editor and remove these two lines to uncomment the code (line 5 and line 24):

```hbs
{{!--
```

```hbs
--}}
```

5. Then look for the following line of code:

```js
s.src = 'https://CHANGE_THIS.disqus.com/embed.js';
```

Replace `CHANGE_THIS` with the **shortname** you got in step 2.

6. Finally save the file, zip the theme folder and upload it again.

## Cove

[Cove](https://cove.chat/) is an alternative comment platform that allows you to embed fully functional comment threads from your subscribed members, allowing you to build a community for your membership audience on Ghost. In other words, Cove lets subscribers of your content log in and comment on your content.

There is an [official guide](https://ghost.org/integrations/cove-comments/) on how to integrate Cove with Ghost, the only difference is step 4 (Add the code to your theme), the difference is that you have to replace all the content of `partials/comments.hbs` with the following piece of code:

```html
{{#if @labs.members}}
  <section class="g-post-comments">
    <div class="g-post-comments__wrapper">
      <h2><span id="cove-count"></span> Comments</h2>
      <div id="cove"></div>

      {{#if @member}}
        <p>Signed in as {{@member.email}} · <a href="javascript:" data-members-signout>Sign out</a></p>
      {{else}}
        <p>Become a {{@site.title}} member below to join the conversation (it's free!). As a member, you will also receive new posts by email (you can unsubscribe at any time).</p>
        <form data-members-form="signin" id="cove-login">
          <input class="cove-input" data-members-email type="email" required="true" placeholder="your@email.com" />
          <button type="submit" class="cove-button">Sign in to comment</button>
          <span class="signin-success" style="display:none">Great! Please check your inbox for a log in link.</span>
          <span class="signin-error" style="display:none">Something didn't work. Please try again.</span>
        </form>
      {{/if}}

      <script>
      const Cove = {
        publication: "your_site_id",
        contentId: "{{id}}",
        memberId: "{{@member.uuid}}",
        memberEmail: "{{@member.email}}"
      }
      </script>
    </div>
  </section>
{{/if}}
```

Finally save the file, zip the theme folder and upload it again.

For more detailed info please refer to their [official documentation](https://cove.chat/help/install-cove-in-ghost/).

::: warning
To install Cove you need to enable first the Members feature in the Ghost Admin, including setting up the email system.
:::

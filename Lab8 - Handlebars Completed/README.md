# Web Lab &ndash; Handlebars
In this lab, we take a look at Handlebars. Handlebars is a *templating engine* for nodejs / Express webapps, which lets us dynamically create HTML to send back to the client (browser), without lots of messy JavaScript code.

## Obtaining the code
Now that you've obtained a copy of this repository through GitHub Classroom's invite, you have your own private version of this repository (i.e. the one you're looking at now)! To clone this repository onto your machine, click the green `Code` button, make sure `HTTPS` is selected, then click the `copy` button to the right of the web URL to copy its value. Then, clone onto your local machine from a terminal, using the `git clone` command.

If this is the first time you've ever cloned a repository on the current machine, you may be asked to enter your GitHub credentials. The "sign in with your browser" option should work just fine. You may need to enter your GitHub username and password, and / or authorize "git credential manager" to access your account. Perform these steps if asked.

Now, you should have a clone of your repository on your local machine, ready to develop!

Remember to commit and push your work regularly for backup purposes. It's also really good practice to create new branches for each exercise, and merge these into `main` using a Pull Request (PR) when they're complete (as opposed to simply pushing directly to `main` each time). This will get you used to a collaborative workflow style that will come in really handy when working on the final team project this semester!

**Note:** Whenever this lab mentions opening a "terminal window", any terminal *should* work. However, the work has only been tested using `git bash`.

**Note 2:** Remember to run `npm install` for each webapp, to make sure all necessary packages (including Express and Handlebars) are installed.


## Exercise One &ndash; My first Handlebars webapp
The [`exercise-01`](./exercise-01) folder contains an Express webapp which is configured to use the Handlebars view engine. Currently, the webapp is configured with a single route handler, as can be seen in `exercise-01.js` - whenever it receives a `GET` request to `/` (the root path), the `home` view will be *rendered*.

To *render* a view means to take the contents of the view, configure it, add any data to it, and turn it into the HTML code which is sent back to the browser. In the case of Handlebars, views are located within the `views` folder. The *name* of a view (as you should reference it within your code) is the same as the name of the file, minus the `.handlebars` extension. For example, the line `res.render("home")` refers to the `home.handlebars` file, located in the `views` folder.

This simple example doesn't pass any data to the view - the contents of `home.handlebars` is completely valid HTML with no Handlebars-specific markup at this point.

Run the webapp and browse to <http://localhost:3000/> - you should see the contents of `home.handlebars` appear within your browser.

To complete this exercise, add an additional route handler to your webapp for `/about`. Users navigating to this route should cause the `about` view to be rendered. In addition, add a link to this new page (i.e. `<a>`) within the `home` view.


## Exercise Two &ndash; Sending data to your views
Continuing on from Exercise One, modify the default route handler (`/`) by first adding the following code before the call to `res.render("home")`:

```js
res.locals.title = "Supplying data to views";
```

Now, any properties of `res.locals` will be available for access within `home.handlebars`. To test this, replace the `<h1>` on the page with the following:

```handlebars
<h1>{{title}}</h1>
```

When the view is rendered, `{{title}}` will be replaced with the value of the supplied context object's `title` property (i.e. "Supplying data to views", in this case). Verify this works by viewing the result in your browser. Check out the actual HTML supplied to the browser by using your browser's "view source" feature. Notice the replacement which has taken place.

- **Note:** If you make a change to one of the `.handlebars` files, or any file in the `public` folder, you should be able to view the change simply by refreshing the page in your browser. However, if you make a change to the `node.js` code (i.e. `exercise-01.js`), you'll need to *restart* the webapp.

- **Note 2:** If you do make a change to a handlebars file, or a public file, that you can't see simply by refreshing the page, then you may have run into a browser caching issue. To fix this, on Chrome / Edge, have the dev console open (`F12`), then *right-click* the *"reload / refresh"* button - some extra options will appear that wouldn't normally be there. Click *"Empty cache and hard refresh"*. Other browsers have similar mechanisms - Google their associated documentation to see how you can do this.

Next, modify your `/about` route handler, by adding a at least three pieces of information about you to `res.locals` (for example, name, address, and phone number). Then, modify `about.handlebars` to display the information you've supplied.


## Exercise Three &ndash; Handlebars *if*s and *loop*s
Open the [`exercise-03`](./exercise-03) folder. There, you'll see several files. The webapp is currently set up with an `index.html` file containing links to two other routes: `/favoriteThings` and `/articleSummaries`. Partial route handlers for these two routes are defined within `exercise-03.js`.

Currently, the route handler for `/favoriteThings` has a "favorites" array saved to `res.locals.favorites`. Currently, this array is empty. We can see that this array is simply displayed in the `favorites.handlebars` view with this line: `{{favorites}}`. If you like, you can add some data to the array and test that this data appears on the view. As written, it should appear as a comma-separated list (that's the default way that arrays are rendered in a Handlebars view).

Open `favorites.handlebars` and, at the marked location within the file, replace `{{favorites}}` with some logic using the `{{#if}}` / `{{else}}` helper. *If* `favorites` is defined and contains some data, a message should be displayed to the user such as:

```html
<p>I have favorites!</p>
```

Otherwise (*else*), a message should be displayed to the user such as:

```html
<p>I have no favorites 😭</p>
```

Verify this works by running `exercise-03.js` both with and without some favorites added to the favorites array. The correct message should appear accordingly.

Next, rather than displaying a message such as "I have favorites" when the array contains data, we will instead display an `<ol>`, which will contain one `<li>` for each favorite in the array. To do this, use the `{{#each}}` helper as demonstrated in lectures.


## Exercise Four &ndash; An article summary page
Continuing on from Exercise Three, we'll now gain some further practice with `{{#if}}` and `{{#each}}`, by displaying a list of articles on a page.

The `/articleSummaries` route handler is currently set up to create a list of articles, and send them to the `articles` view for rendering. Within `articles.handlebars`, examine the provided `articles` array. If there are no articles, an error message such as "There are no articles" should be displayed. Otherwise, a `<div>` with the `grid-3` CSS class should be created. Inside that `<div>`, each article should be rendered as a `card`. An example structure of a card is given here (you can see how each of these CSS classes will be rendered by examining `/public/css/site.css`):

```html
<div class="card">
    <img class="card-header card-img" src="IMAGE URL GOES HERE">
    <div class="card-body">
        <h3>ARTICLE TITLE GOES HERE</h3>
        <p>ARTICLE CONTENT GOES HERE</p>
    </div>
</div>
```


## Exercise Five &ndash; Handlebars Layouts
Take a look at the contents of the [`exercise-05`](./exercise-05) folder. Here, we can see a webapp similar to that in Exercise One, but with a few key differences. Running the webapp and viewing it in our browser, we can see that the contents looks similar to Exercise One, except that the `home` view (seen when navigating to <http://localhost:3000/>) contains a nav bar. However, there is a key structural difference in the organization of this webapp: the use of a **layout**.

In Handlebars, a *layout* refers to part of a webpage which can be replicated between different *views*. Layouts are always stored in the `/views/layouts` folder. Layouts may contain parts of a webpage which are common amongst multiple pages - for example, any `<head>` information, `CSS` and `JavaScript` links, etc. In this exercise, the file `main.handlebars` is a layout which does exactly this.

Examining `exercise-05.js`, we can see that the Handlebars configuration code has been slightly modified from previous exercise. Now, we're specifying a default layout, as follows:

```js
app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));
```

This means, that whenever we render a view (using `res.render()`), unless we override this default, a layout called `main` will be used (corresponding to a file named `main.handlebars`, located in the `/views/layouts` folder).

To build the final HTML page, Handlebars will first load the given *layout* file. It will then replace the `{{{body}}}` declaration with the contents of the specified *view* file. For example, the following line of code will replace `{{{body}}}` with the contents of `/views/home.handlebars`:

```js
res.render("home");
```

Visualize what's happening by running the provided webapp, and viewing it in your browser. Look at the page source (i.e. generated HTML), for both the `/` and `/about` routes. Notice that the contents of `main.handlebars` is shared between them.

Once you've verified this, move the `<nav>` that's defined in `home.handlebars`, into an appropriate location within `main.handlebars`. Once you've done this, the navbar should be visible in both the `/` and `/about` pages. Check that this functions as expected.


## Exercise Six &ndash; Dynamic layouts
Continuing on from Exercise Five, we'll further modify the `main.handlebars` view so that whichever page is currently being displayed, that page's nav link will appear "active" (i.e. have the `active` CSS class applied).

To begin, examine the two links within the navbar. You'll see that the "Home" link currently has the `active` CSS class. This class makes it appear darker in color compared with the "About" link (see `site.css` for details). We want to apply the `active` class to whichever link corresponds to the current page, and not any of the others. This would be trivial if we would copy / paste the navbar into each separate Handlebars view. We could then slightly modify each one as we needed. However, we also want to make use of Handlebars layouts to reduce code duplication where possible. Since the majority of the navbar is identical (only the CSS classes applied to the links are different), we will keep it defined within `main.handlebars` and use the `{{#if}}` helper to achieve the desired functionality.

To start with, we need a way to tell Handlebars what page we're currently on. We can do this by supplying appropriate data when rendering the views. Within the `/` handler, define a `res.locals` property called `homePage`, and set it to `true`. Similarly, define a `res.locals` property called `aboutPage` and set it to `true` within the `/about` handler. For example:

```js
res.locals.homePage = true;
```

Once we've supplied this data to our view engine, we can then use the values we've defined. Modify each of the links in `main.handlebars` such that it is only `active` if the corresponding property has been declared (e.g. the "Home" link should appear active if the `homePage` property has been set to true). For example:

```handlebars
<a href="./" class="nav-button{{#if homePage}} active{{/if}}">Home</a>
```

Once this has been completed, test your webapp. When navigating between pages, you should notice that the link corresponding to the current page will appear active, and others will not.

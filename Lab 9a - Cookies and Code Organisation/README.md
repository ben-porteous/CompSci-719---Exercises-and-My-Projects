# Web Lab &ndash; Cookies &amp; Code Organization
In this lab, we gain more practice with the elements of Node.js, Express, and Handlebars which we've already covered in previous modules. Specifically, we look at cookies, and better code organization using modules &amp; routers.

## Obtaining the code
Now that you've obtained a copy of this repository through GitHub Classroom's invite, you have your own private version of this repository (i.e. the one you're looking at now)! To clone this repository onto your machine, click the green `Code` button, make sure `HTTPS` is selected, then click the `copy` button to the right of the web URL to copy its value. Then, clone onto your local machine from a terminal, using the `git clone` command.

If this is the first time you've ever cloned a repository on the current machine, you may be asked to enter your GitHub credentials. The "sign in with your browser" option should work just fine. You may need to enter your GitHub username and password, and / or authorize "git credential manager" to access your account. Perform these steps if asked.

Now, you should have a clone of your repository on your local machine, ready to develop!

Remember to commit and push your work regularly for backup purposes. It's also really good practice to create new branches for each exercise, and merge these into `main` using a Pull Request (PR) when they're complete (as opposed to simply pushing directly to `main` each time). This will get you used to a collaborative workflow style that will come in really handy when working on the final team project this semester!

**Note:** Whenever this lab mentions opening a "terminal window", any terminal *should* work. However, the work has only been tested using `git bash`.

**Note 2:** Remember to run `npm install` for each webapp, to make sure all necessary packages (including Express and Handlebars) are installed.


## Exercise One &ndash; Client-side cookies
In this exercise, we'll investigate how to read and write cookies purely from client-side JavaScript code. While it is less common to want to do this compared with reading and writing cookies from the server, it is useful to know how in case the need arises.

For this exercise, the [`exercise-01.js`](./exercises/exercise-01) node.js app is extremely simple - all it does is make the `public` folder accessible. In the `public` folder, you'll find `index.html` and `js/exercise-01-client.js`, which are the files you'll be using for this exercise. You'll also find `js/client-cookie-helper.js`, which contains the functions presented in lectures. Both JS files have been added to the HTML file in its `<head>`.

Using the functions provided to you in `client-cookie-helper.js`, complete the code in `exercise-01-client.js` so that users can use the `index.html` webpage to add, remove, and get the values of cookies. When adding cookies, set each one to have an expiry time of *one day*.

When you're done, test your application, and answer the following question: What happens when you add a cookie with the same name as one which already exists?

```
Your answer here.
```

**Note:** Even though this exercise just uses a simple HTML file, you'll still need to run the app through node.js. This is because many browsers don't support cookies by default when displaying webpages accessed through the local file system.


## Exercise Two &ndash; Server-side cookies
In this exercise, we'll re-make the application from Exercise Two above, but we'll read and write the cookies on the server this time, using the `cookie-parser` module.

Examine the contents of the [`exercise-02`](./exercises/exercise-02) folder. Here, you'll find a node.js app - `exercise-02.js` - which is set up to render the `home` view when users navigate to `/`. That view contains three HTML forms, intended to allow the user to add, delete, and get cookies.

For this exercise, complete the three route handlers within `exercise-02.js` which are indended to accept submissions from those three forms. As each form is a `GET` form, read the user's inputted values from `req.query`. Then, use the appropriate `cookie-parser` functionality to add / delete / get cookies.

**Hint:** To *get* a cookie with a known name, you can use the *dot* `.` notation as usual, e.g. `req.cookies.myName`, `req.cookies.myAddress`, etc. In this case though, we don't know the name at the start, as it depends on user input. So we'll need to use the *square bracket* `[]` notation instead. For example, if the cookie's name is stored in the `cookieName` constant, then you could access the cookie with that name using `req.cookies[cookieName]`.

Once the cookie has been added / removed / obtained, your route handlers should redirect the user back to `/`. However, you should add a `toastMessage` *query string* with some additional information to  be displayed (e.g. about what cookie was added / removed / obtained). The message will be displayed at the top of the homepage, as can be seen by examining the `home` view. As an example, the following code will result in the message "Hello, World!" being displayed:

```js
res.redirect(`/?toastMessage=Hello, World!`);
```


## Exercise Three &ndash; Toast messages using cookies
In Exercise Two, the user performs any operation, we redirected the user back to the homepage. Along with this redirect, we added a `toastMessage` to the URL's query string, providing a little information that we could then display to the user. In the `/` route handler, we're grabbing the `toastMessage` from the query string (i.e. `req.query`) and adding it to `res.locals` so it's available in the `home` view for rendering (we can see this on line `4` of `home.handlebars`).

This method of using the query string to pass a toast message through a page redirect is functional. However, there are a couple of annoying issues:

1. We can see the toast message to be displayed, in the page's URL in the browser after the redirect. This may be considered ugly!

2. Because the toast message to be displayed is now part of the URL, this means that whenever we refresh the page, the toast message will remain. This may be undesired functionality - the point of toast messages is usually to display a transient notification, rather than something persistant like this.

Ideally then, we would want the following behaviour:

1. The toast messages are not visible in the URL

2. If the user refreshes the page, any currently-displayed toast messages will disappear

Luckily, there are several ways we could achieve this functionality. One of these ways is to use a cookie to store the toast message, rather than adding it to the query string. Essentially, the process works as follows:

1. Whenever we would want to send a toast message, create a cookie with an appropriate name (e.g. `toastMessage`), whose *value* is the message we want to send. We do this before calling `res.redirect(...)`:

```js
res.cookie("toastMessage", "Hello, world! This is my toast message!");
res.redirect("/");
```

2. Whenever we navigate to a page where toast messages should be displayed, we read the value of the cookie created in step 1, and add it to `res.locals`. For example:

```js
res.locals.toastMessage = req.cookies.toastMessage;
```

3. After we read the cookie value in step 2, we should delete the cookie so that if the user refreshes the page, the toast message will no longer appear:

```js
res.clearCookie("toastMessage");
```

For this exercise, modify your code from Exercise Two so that it uses a cookie mechanism as described above instead of passing toast messages around in query strings. Make sure to test your code to ensure it's functioning correctly.


## Exercise Four &ndash; Refactoring our app with modules, routers, and middleware
For this exercise, we will refactor our Exercise Three code by moving our route handlers into separate files. We will then further improve our code by extracting the toast functionality introduced in Exercise Five, into a *middleware* function.

**Note:** The term "refactor" means "to improve the quality and structure of a codebase without changing its functionality". You'll learn more about this in CS718, if you haven't already!

### A) Routers and modules
Firstly, let's move our routes into their own file:

1. To begin, create a new folder, called `routes`, in the [`exercise-02`](./exercises/exercise-02) folder. Within that folder, create a new JavaScript file, which will hold our application routes. You may name it whatever you like (e.g. `application-routes.js`). Within that file, create and export a new Express router, as shown in lecture slides.

2. Once that's done, move your route handlers from `exercise-02.js` into your new routes file. Remember to replace `app.get...` with `router.get...` etc. (assuming you named your router `router` as in the lecture examples - you can actually name it whatever you like).

3. Finally, at an appropriate location within `exercise-02.js`, `require()` your new JS module, and add it to Express using `app.use()`, as shown in lectures (**Hint:** An appropriate location is marked with a `TODO` comment).

At this point, test and make sure everything works correctly, as it did upon completion of Exercise Three.

### B) Middleware
Next, we'll extract our toast message code into its own *middleware function*, so that it can be reused. In Express, middlware are functions which do some processing of incoming requests, *before* passing control to your own route handler functions. Middleware can be configured to run only on specific routes, or they can be configured to run whenever *any* request is made. We have already seen examples of middleware in the labs:

- In the "File uploads" lab, the `POST` handler for `/uploadImage` includes the Multer middleware, `upload.single...`. This is an example of middlware configured to run for a specific route (i.e. a `POST` to `/uploadImage` in this case).

- In any lab exercise requiring us to handle data sent by the browser in the message body (e.g. through a `POST` from a `<form>`),  we need the `express.urlencoded(...)` middleware. This middleware is configured with `app.use` to run on every single request.

- In Exercise Two, we need the `cookieParser` middlware to enable processing of cookies. Again, this was configured to run on every single request.

We can create our own middleware functions too! In this exercise, we'll add a custom middleware function which handles toast message processing for us, on every single request. To do this, perform the following steps:

1. To begin, create a new JS file to hold your middleware function. name it something useful (e.g. `toaster.js`). It might pay to place this file into a `middleware` folder for better code organization, so create this folder also.

2. Create and export the middleware function. You may use the function as given here:

```js
function toaster(req, res, next) {

    res.locals.toastMessage = req.cookies.toastMessage;
    res.clearCookie("toastMessage");

    res.setToastMessage = function (message) {
        res.cookie("toastMessage", message);
    }

    next();
}

module.exports = toaster;
```

This function will take the `toastMessage` cookie value and add it to `res.locals.toastMessage`, before deleting the cookie. It will also add a new function to the `res` object, called `setToastMessage()`. When that function is called, the value of the `toastMessage` cookie will be set to the given value.

You'll then notice a call to `next()`. This is a special function that Express will provide as an argument. Calling it will cause Express to pass control onto the next matching handler (e.g. your own route handlers).

3. `require()` your middleware from within `exercise-02.js`, and then add it to Express with `app.use()`. Do this *before* adding your application routes you created above, but *after* the `cookieParser` middleware is added (because this function depends on cookie parser, and is required by your application routes):

```js
const toaster = require("./middleware/toaster.js");
app.use(toaster);
```

4. Modify your own application's routes to take advantage of your new middleware:

   - In your `/` route handler, you should be able to entirely delete the lines of code which deal with the `toastMessage` cookie (i.e. the entire contents of that route handler can be `res.render("home")`).
   
   - In your other route handlers, anywhere you were setting the `toastMessage` cookie, instead call the `res.setToastMessage()` function which is added by your middleware.

Again, make sure to test your code to ensure it is functional, once you're complete.

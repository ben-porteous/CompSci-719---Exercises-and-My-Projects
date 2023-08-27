# Web Lab &ndash; Intro to JavaScript
In this lab, we begin our coverage of JavaScript. The first few exercises of this lab might be "easy" for you, particularly if you're keeping on top of the CS718 content. However, we still strongly encourage you to complete all the exercises, to cement your understanding of core coding concepts!


## Obtaining the code
Now that you've obtained a copy of this repository through GitHub Classroom's invite, you have your own private version of this repository (i.e. the one you're looking at now)! To clone this repository onto your machine, click the green `Code` button, make sure `HTTPS` is selected, then click the `copy` button to the right of the web URL to copy its value. Then, clone onto your local machine from a terminal, using the `git clone` command.

If this is the first time you've ever cloned a repository on the current machine, you may be asked to enter your GitHub credentials. The "sign in with your browser" option should work just fine. You may need to enter your GitHub username and password, and / or authorize "git credential manager" to access your account. Perform these steps if asked.

Now, you should have a clone of your repository on your local machine, ready to develop!

Remember to commit and push your work regularly for backup purposes. It's also really good practice to create new branches for each exercise, and merge these into `main` using a Pull Request (PR) when they're complete (as opposed to simply pushing directly to `main` each time). This will get you used to a collaborative workflow style that will come in really handy when working on the final team project this semester!


## Note &ndash; Code commenting
When we write code, we might wish to annotate the code with comments so that we (or other developers) can later look at the comments to remember what the code does and / or what our thought processes were while creating it.

To create single-line comments in JavaScript, use the following syntax:

```js
// This is a comment.
```

Everything after the `//` on the same line will be ignored by the JavaScript engine.

To create multi-line comments in JavaScript, use the following syntax:

```js
/*
 * This is a
 * multi-line comment.
 */
```

Everything between the `/*` and `*/` will be ignored by the JavaScript engine.

It is **highly** recommended that as you practice and hone your JavaScript skills, you comment your code well. Your comments will serve as an excellent study / revision guide and reference for later use!


## Exercise One &ndash; JavaScript execution
In this exercise, we will visualize when JavaScript code is executed when your browser loads a website. We will also practice linking an external JavaScript file to our webpages.

To begin, create a new JavaScript file in the [`ex01`](./exercises/ex01) folder. Call it `ex01.js`. Add the following JavaScript code to the file:

```js
alert("Alert #1");
```

Now, add a `<script>` tag into the `<head>` within `ex01.html`. This will cause the browser to load and execute the linked JS file as soon as it reads that `<script>` tag:

```html
<script src="./ex01.js"></script>
```

Once you've done this, load your page in a browser. You should be able to see the alert pop up immediately.

Next, add the following `<script>` tag to the end of `ex01.html`, just before closing the body (`</body>`):

```html
<script>
    alert("Alert #2");
</script>
```

Again, the browser will run this script as soon as it reads that point in the file.

Finally, add the following code to `ex01.js` (after the `alert` that's already there):

```js
window.addEventListener("load", function() {
    alert("Alert #3");
});
```

This time, the browser will *not* run that `alert` function as soon as it's read. This is because, that `alert` has been placed inside an *event handler function*, which will be executed only once the corresponding event occurs (in this case, the `window load` event).

Once all three alerts are in place, (re)load `ex01.html` in your browser, and answer the following questions:

1. In what order do the alerts appear?

```
Your answer here.
```

2. Look at the browser window while each of the alerts are being displayed. What do you notice about when the contents of the webpage become visible? Why do you think this is the case?

```
Your answer here.
```


## Exercise Two &ndash; Variables, numbers, and logging
In this exercise, we'll practice creating variables and assigning values to them. We'll also practice basic JavaScript arithmetic, and console logging.

Begin by creating `ex02.js` inside the [`ex02`](./exercises/ex02) folder. Add the following `window load` event handler, and add an appropriate `<script>` tag to the `<head>` within `ex02.html` so that `ex02.js` is loaded by the browser - just as you did in Exercise One above:

```js
window.addEventListener("load", function() {
    
    // TODO Your code here.

});
```

For the rest of the exercises in this lab, we'll be writing all of our JS code inside a `load` event handler function (see your own answer to the questions asked in Exercise One for details on why we will do this).

Now, at the appropriate location within `ex02.js`, create the following variables, as *constants* (`const`):

- A number, named `myFirstNumber`, with the value 3
- A number, named `mySecondNumber`, with the value 10.25

Next, add `console.log()` statements to log the values of each of these variables to your browser console. Once you've done this, open `ex02.html` in your browser, and open the browser console (`F12` in Chrome, `Ctrl+Shift+K` in Firefox). You should be able to see the appropriate values there.

Now, add the following line, to attempt to add one to `myFirstNumber`:

```js
myFirstNumber++;
```

Once you've done this, (re)load `ex02.html` in your browser and check the console again. What do you see? Why do you think this is the case?

```
Your answer here.
```

Fix your code by making a change to your variable declaration for `myFirstNumber`, so that adding one to it now works as expected.

Now, declare three additional variables with the following values. Give each variable a sensible name:

- `myFirstNumber` plus 7
- `mySecondNumber` minus `myFirstNumber`
- The area of a circle with a radius of `myFirstNumber`. **Hints:**
   - The area of a circle A = Pi.*r*<sup>2</sup>, where *r* is the radius.
   - Investigate the JavaScript [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) object - particularly `Math.PI` and `Math.pow()`.

Log the values of your three new variables to the console to check that everything's working correctly.


## Exercise Three &ndash; Strings
In this exercise, continuing on from Exercise Two, we'll investigate strings and template literals, as well as some useful string functions.

Continuing on from Exercise Two, add the following new variables after your Exercise Two code:

- A string named `strHello`, with the value "Hello"
- A string named `strWorld`, with the value "World"
- A string named `name`, with the value equal to your name
- A number named `age`, with the value equal to your age (which is always 21, right??)
- A string named `favoriteFood`, with the value equal to your favorite food
- A string named `helloWorld`, with the value equal to the *concatenation* of `strHello` and `strWorld`, with a single space in-between (i.e. "Hello World")

If you like, you may log those values to the console to check everything's correct - but you're not required to do this.

Now, create another string named `sentence`. Using a **template literal**, assign to the `sentence` variable a sentence which appropriately uses the `name`, `age`, and `favoriteFood` variables you defined earlier. For example, if `name` is "Andrew", `age` is 21, and `favoriteFood` is "Bacon", then my sentence might be *"Hi there! My name is Andrew. I'm 21 years old and I like bacon."* Log the value of `sentence` to the console to check for correctness.

Finally in this exercise, we'll investigate the use of various string *functions* and *properties*. For this part of the exercise, use the [W3Schools JavaScript string reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) as a reference.

For each of the following, you may choose to create a variable which stores the requested information. Or you may log the information to the console directly. For example:

```js
const test = "Foo";
const length = foo.length;
console.log(`test.length is: ${length}`);
```

is the same as:

```js
const test = "Foo";
console.log(`test.length is: ${test.length}`);
```

Log the following information about the `helloWorld` string to the console:

- Its length (Hint: `length` property)
- Itself, in uppercase (Hint: `toUpperCase()` function)
- The first four characters in the string (Hint: `slice()`, `substring()` or `substr()` functions)
- The character at index 6 (should be "W") (Hint: `charAt()` function)
- The *index* of the first "o" (should be 4) (Hint: `indexOf()` function)


## Exercise Four &ndash; `document.querySelector()`
In this exercise, we'll practice using the `document.querySelector()` function to get HTML elements in a webpage.

Begin by opening and examining `ex04.html`, `ex04.css` and `ex04.js` in your development environment (from the [`ex04`](./exercises/ex04) folder). Then, at the appropriate location in `ex04.js`, create variables referencing each of the following page elements. Log each to the console:

- The first `<p>`
- The `<li>` with the `second` class
- The first `<button>`
- The second `<button>`
- The nested `<li>`

Once you've done this, preview the page in your browser. When you mouse-over each of the elements logged in the console, the appropriate element should be highlighted in the main browser window.


## Exercise Five &ndash; Modifying page elements
In this exercise, we will continue on from Exercise Four to modify some of our elements using JavaScript.

Continuing on from your Exercise Four code, make the following changes to your page using JavaScript:

- Make the first `<p>` red, and change its font style to italics.
- Change the text of the `<li>` with the `second` class to "I am a l33t h4x0r, in ur br0ws3r, ch4ng1n ur p4g3s!!!" (or something else more sensible!)
- Add the `important` CSS class to the nested `<li>` and change its text to the current date and time. **Hint:** Investigate the [JavaScript Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to perform this step - particularly the `toLocaleString()` function.

Preview the changes in your browser as you go, to ensure correctness.


## Exercise Six &ndash; Handling button clicks
In this exercise, we will continue on from Exercise Five to add some functionality to the buttons on our page.

Continuing on from Exercise Five, add functionality to `firstButton` which does the following:
1. Gets the `<img>` element
2. Changes the image's `src` to `t-rex-cry.png`

Then, add functionality to `secondButton` which does the following:
1. Gets the `box` `<div>`
2. Toggles the `animated` CSS class on the `box`

Once these tasks are complete, then clicking the first button should make the T-Rex cry, and clicking the second button should toggle the box's animation.

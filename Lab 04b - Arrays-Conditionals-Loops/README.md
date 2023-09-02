# Web Lab &ndash; Booleans, Arrays, Conditionals, Loops
In this lab, we continue our coverage of JavaScript, looking at booleans, conditionals, arrays, loops, and more advanced ways of manipulating page elements. The first few exercises of this lab might be "easy" for you, particularly if you're keeping on top of the CS718 content. However, we still strongly encourage you to complete all the exercises, to cement your understanding of core coding concepts!


## Obtaining the code
Now that you've obtained a copy of this repository through GitHub Classroom's invite, you have your own private version of this repository (i.e. the one you're looking at now)! To clone this repository onto your machine, click the green `Code` button, make sure `HTTPS` is selected, then click the `copy` button to the right of the web URL to copy its value. Then, clone onto your local machine from a terminal, using the `git clone` command.

If this is the first time you've ever cloned a repository on the current machine, you may be asked to enter your GitHub credentials. The "sign in with your browser" option should work just fine. You may need to enter your GitHub username and password, and / or authorize "git credential manager" to access your account. Perform these steps if asked.

Now, you should have a clone of your repository on your local machine, ready to develop!

Remember to commit and push your work regularly for backup purposes. It's also really good practice to create new branches for each exercise, and merge these into `main` using a Pull Request (PR) when they're complete (as opposed to simply pushing directly to `main` each time). This will get you used to a collaborative workflow style that will come in really handy when working on the final team project this semester!


## Exercise One &ndash; Booleans & conditionals
In this exercise we will revise getting and modifying page elements, in addition to practicing boolean logic and conditional (`if`) statements.

In the [`ex01`](./exercises/ex01) folder, take a look at `leap-year-calc.html` and `leap-year-calc.js`. This is the start of a simple webapp which allows users to calculate whether a particular year is a leap year.

In `leap-year-calc.js`, our standard `window load` function is already setup, and an event handler function has been created which will be run when the user clicks the button. Currently, the program obtains the value the user enters in the `<input>` element. For this exercise, complete the code within this click handler by performing the following steps:

1. Using `if-else` statements and / or boolean logic, calculate whether the value the user typed is a leap year. You may assume that the user always enters a valid year. The algorithm for calculating a leap year is as follows:
   - If the year is not divisible by 4, then it is a non-leap year.
   - Otherwise, if the year is not divisible by 100, then it is a leap year.
   - Otherwise, if the year is not divisible by 400, then it is a non-leap year.
   - Otherwise, it is a leap year.

   For some test values:
   - 2019 is NOT a leap year.
   - 2004 is a leap year.
   - 2100 is NOT a leap year.
   - 2000 is a leap year.
   
   **Hint:** To calculate if one number is divisible by another number, you can use the `%` operator. This will return the *remainder* of a division. For example, `3 / 4` is 0 remainder 3, so `3 % 4` equals 3. Similarly, `2 % 4` equals 2, `4 % 4` equals 0, `5 % 4` equals 1, and so on. You may use this, in combination with `==`, to get a boolean value indicating whether one number is divisible by another. For example, the boolean expression `x % y == 0` will be `true` if `x` is divisible by `y`, and `false` if it is not.

2. Get the `<p>` element with `id=result`. This is where we will write our results.

3. Change the result paragraph's `innerHTML` to an informational message with your results. If the year is a leap year, the paragraph should read *"`YEAR` is a leap year"*. If not, the paragraph should read *"`YEAR` is not a leap year"*. Replace `YEAR` with the actual year the user typed. Use a template literal for this.


## Exercise Two &ndash; Arrays & loops
In this exercise we will use our newfound knowledge of arrays and loops to create a to-do list in JavaScript and display it in an `<ol>`.

Begin by examining the contents of `to-do-list.html` and `to-do-list.js`, located in the [`ex02`](./exercises/ex02) folder. In `to-do-list.js`, you'll see a line as follows:

```js
// TODO part 1: Create your to-do list here with some initial items.
const toDoList = null;
```

Rather than assigning `null` to the `toDoList`, instead make an *array* containing several items in your to-do list. For example, my to-do list might contain such items as *"Revise JavaScript"*, *"Prepare lecture material"*, *"Troll the tutors"*, and *"Rehearse for concert"*.

Once that's done, then at the location marked `TODO part 2`, display the *length* of your array in the `<span>`.

Finally, at the location marked `TODO part 3`, iterate through the array. Normally you could use any of the three methods discussed in the lecture (`for`-loop, `while`-loop, or `forEach()` function). For each item in your to-do list, add that item to the `<ol>`.

**Hint:** You can add items to the `<ol>` by *appending* `<li>` items to its `innerHTML`. For example, the following code will add a single item to the list:

```js
ol.innerHTML += "<li>My item</li>";
```


## Exercise Three &ndash; Clickable CSSmas tree
In this exercise, we'd like to modify our CSSmas tree from previous labs so that, rather than all baubles dropping together when hovering over the image, each bauble drops *individually* when you *click on* that bauble with the mouse.

While CSS animations are very powerful and can accomplish a lot by themselves, we can't respond to mouse clicks within our CSS. For that, we'll need to use JavaScript.

Take note of the files located in the [`ex03`](./exercises/ex03) directory. The CSS file contains a selector for the CSS class `animated` which, when applied to a bauble, will make it drop to the ground. We will write JavaScript code which will add this CSS class to a bauble when it is clicked.

To complete this exercise, follow these steps:
1. At the marked location within `christmas_tree.js`, get an *array* of all baubles on the page. This can be done using the `document.querySelectorAll()` function.

   **Hint:** All baubles have the `bauble` CSS class.

2. Next, write code which iterates through the array. Again you could use any of the three methods discussed in lectures - but this time, try to use the `forEach()` function if you can.

3. Within your loop code from step 2, add an event handler to each bauble which will be executed when that bauble is clicked. As a reminder of how to do this, you may use the provided JS code in Exercise One as a reference.

4. Add code to your click handler from step 3 which will *toggle* the `animated` CSS class for the bauble which was clicked.

   **Hint:** Within the click handler, the HTML element which generated the event (i.e. the bauble which was clicked) can be obtained using `event.target`. For example, the following code will log a button to the console when it is clicked:

   ```js
   button.addEventListener("click", function(event) {
       console.log(event.target);
   });
   ```

Once complete, clicking on a bauble in the tree will cause it to drop. Clicking on a bauble on the ground will cause it to teleport back into the tree.


## Exercise Four &ndash; Adding new elements
In this exercise, we'll dynamically populate an HTML table using JavaScript.

Examine `shopping-list.html` (within the [`ex04`](./exercises/ex04) folder), and you'll see an empty `<tbody>`, which we'll be populating from JavaScript. Open `shopping-list.js`, and you'll see an *array* named `shoppingList` has been declared, containing the information we wish to display in the table.

At the marked location in the code, write a `for`-loop to appropriately iterate through the `shoppingList` array. For each entry in the shopping list, create a `<tr>` representing that entry. The `<tr>` should itself have two `<td>` child elements: the first displaying the *item* (e.g. Puppies), and the second displaying the amount of that item to purchase (e.g. 3). For each `<tr>` you create, append it to the table's `<tbody>`.

To get practice with the lecture content, when creating the `<tr>` elements, use the `document.createElement()` function. Then, append them to the `<tbody>` using the `appendChild()` function.

When creating the `<td>` elements, you may also use the same functions. Or you may use the alternative method of modifying the `<tr>`'s `innerHTML` as you did in Exercise Two.

**Hint:** Using a `for`-loop, we don't have to iterate through an array one-at-a-time. For example, the following code will log all the *even* numbers between 0 and 100.

```js
for (let num = 0; num <= 100; num += 2) {
    console.log(num);
}
```


# Challenges
These exercises are extension material for you to work on once you've completed all other lab exercises. If you don't get round to them during the lab, that's OK. In that case, it's a good idea to come back to them later on in the course, once you're more comfortable with the course content.

**Note:** Support from tutors / instructors on these questions is extremely limited, as their focus will be on assisting students with the preceding exercises.


## Challenge Exercise Five &ndash; Handling input errors
This exercise continues on from Exercise One. In that exercise, we have assumed that the user will always type a valid year into the `<input>`. However, this may not be the case, and we should handle this.

Examining the HTML, the `<input>` is already marked as `type="number"`. This will prevent the user from entering characters which can't be part of numbers. It still allows the decimal point `"."`, and characters such as `"e"` which can be used in some numeric expresisons. Furthermore, the user could simply click the button without typing anything at all! However, the `<input>`'s `value` property will always be the empty string (`""`) if the input does not contain a valid number.

Before trying to parse the input as an integer, we want to check if the input's value is `""`. If it is, then the user hasn't entered a valid year. Furthermore, if the input has a decimal point (e.g. `"3.4"`), then the user also has not entered a valid year.

**Hint:** We can check the *index of* the `"."` character within the input value string. If it is `>= 0`, it means that the character exists somewhere in the string.

Using this information, modify your code to perform error checking. If the value the user typed isn't a valid year, make the output display an appropriate error message, e.g. "The value you typed isn't a year!". Otherwise, perform the leap-year check and display the result as usual.


## Challenge Exercise Six &ndash; Adding and removing to-do-list items
This exercise continues on from Exercise Two. Here, we appended list items to an `<ol>` using the `innerHTML` method.

Modify your code so that instead of doing this, you now use the `document.createElement()` and `appendChild()` functions, as you did in Exercise Four.

Once you've made this change, you should be able to do more complex things when adding HTML elements, such as add event listeners to the newly created elements. To demonstrate this, add a click handler to each new `<li>` you create. When clicked, a `<li>` should remove itself from the page.


## Challenge Exercise Seven &ndash; Refactoring your CSSmas tree code
This exercise continues on from Exercise Three. Currently, you will likely have code which has several layers of *nesting*. For example, see the following pseudocode:

```
window.addEventListener("load", function() {

   // One level of nesting.

   for each bauble on the tree... {

       // Two levels of nesting.

       Add a click event handler to the bauble. When clicked... {

           // Three levels of nesting.

           drop the bauble.

       }

   }

});
```

Multiple levels of nesting can make your code harder to understand - both for yourself and others. We can *refactor* our existing code to remove one of the levels of nesting, by moving the click handler function out of the loop. We can create a *named* function (e.g. `toggleAnimation`), and reference that function from our `addEventListener()` call rather than supply an *anonymous* function as we are currently doing.

For this exercise, refactor your code to remove the innermost level of nesting.

**Hint:** The following two blocks of code do the same thing:

```js
button.addEventListener("click", function(event) {
    console.log(event.target);
});
```

```js
function myFunction(event) {
    console.log(event.target);
}

button.addEventListener("click", myFunction);
```

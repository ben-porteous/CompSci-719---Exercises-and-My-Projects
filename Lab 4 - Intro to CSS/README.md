# Web Lab &ndash; Intro to CSS
In this lab, we begin our coverage of CSS.

## Obtaining the code
Now that you've obtained a copy of this repository through GitHub Classroom's invite, you have your own private version of this repository (i.e. the one you're looking at now)! To clone this repository onto your machine, click the green `Code` button, make sure `HTTPS` is selected, then click the `copy` button to the right of the web URL to copy its value. Then, clone onto your local machine from a terminal, using the `git clone` command.

If this is the first time you've ever cloned a repository on the current machine, you may be asked to enter your GitHub credentials. The "sign in with your browser" option should work just fine. You may need to enter your GitHub username and password, and / or authorize "git credential manager" to access your account. Perform these steps if asked.

Now, you should have a clone of your repository on your local machine, ready to develop!

Remember to commit and push your work regularly for backup purposes.


## Exercise One &ndash; CSS files
From the  the [`ex01`](./exercises/ex01) folder, locate and modify the file [`tim_berners_lee.html`](./exercises/ex01/tim_berners_lee.html) so that it links to the external style sheet [`style1.css`](./exercises/ex01/style1.css) in the same folder. Look at the webpage in your browser, both before and after you do this.

Notice how adding a stylesheet can have a dramatic effect, despite changing only a single element in the original html file through adding the `<link>` tag.

Modify [`grace_hopper.html`](./exercises/ex01/grace_hopper.html) to link [`style2.css`](./exercises/ex01/style2.css). Preview again to see how including the named style file changes this particular page.

Neither style may look particularly attractive, but they do look different. Notice how different both these otherwise basic pages look to each other, merely by adding a different style sheet to each. Compare them both with the unstyled [`charles_babbage.html`](./exercises/ex01/charles_babbage.html) file.


## Exercise Two &ndash; First CSS edits
Carrying on from Exercise One, edit `style2.css` to achieve the following:
- Change the background colour of the entire page to `DarkSalmon` (`#E9967A`)
- Make the font in the paragraph 25% bigger (hint: at present they're at 100% size)
- Make all the headings `OrangeRed`

Preview the updated `grace_hopper.html` page that makes use of `style2.css` and make sure you can see the changes you have made.


## Exercise Three &ndash; Creating a stylesheet from scratch
Before starting this exercise, make sure to close all open HTML and CSS editor tabs in your IDE to avoid confusion. Make sure you create, open and edit only files in the [`ex03`](./exercises/ex03) folder for this exercise.

Now you'll write a CSS style sheet file from scratch. Create a file called `external_style.css` in the `ex03` folder, and link it into all the HTML files in the same folder.

Within your new stylesheet, write the style rules that are necessary to make your pages look as follows (ignore the black outer border of the screenshot, which is merely to indicate where the browser screen ends so you can see the padding whitespace):

![](./spec/ex03-screenshot.png)

Your CSS should define the following:
- All headings, and any bold/strong elements need to be in the colour `Plum`
- Any heading 1 and heading 3 is to be centred (heading 3 is not visible in the above screenshot)
- Any heading 2 is to be right aligned
- Any heading 2 should furthermore have a line underneath of the colour `LightSlateGray`
- Horizontal rules `<hr>` are `LightSlateGray` too, but are dotted and thin, 
- An entire horizontal rule should take up only 50% of the width available
- Paragraph text should be `DarkSlateGray` in colour and should be in the `Georgia` font, but if no `Georgia` is available then paragraphs should fall back on using any `serif` font
- Paragraph text alignment should be *justified*, and the font style should be *italic*.
- `<h1>` headings should be displayed in uppercase. This can be done with the `text-transform` property.
- The left and right of the body should be padded by 20%, and the top and bottom should be padded by `50px`.

Preview all the files. They should all have changed accordingly. This is the advantage of bringing together all your styles into an external style sheet that is linked in from many web pages: you make the change once, and they all update together and retain a consistent look.


## Exercise Four &ndash; `id` selectors
----------
Continuning on from Exercise Three, we want to add a new CSS rule which can be applied to a particular element on a page, which will make it stand out. For example, Babbage's **Difference Engine** is so important that we'd like to grab extra attention for its associated heading.

In [`charles_babbage.html`](./exercises/ex03/charles_babbage.html), locate the `<h3>` element corresponding to the heading above, and give it an `id` attribute. Set its id to `big-achievement`.

Now, in `external_style.css`, add a new CSS rule which sets the text color of any page element with that id to `red`.

Remember, each `id` must be used *only once* per HTML page. But you can use it once on *each* page. So although you're not allowed to use the same `id` twice on the `charles_babbage.html` page, it is perfectly acceptable to add the same `id` once to the `tim_berners_lee.html` page, for example.

Add the same `id` to `grace_hopper.html`'s **"COBOL"** heading element. If you preview both pages, the relevant headings should now appear in red.


## Exercise Five &ndash; `class` selectors
Continuing on from Exercise Four, back in the `charles_babbage.html` page, we'd like to make all the paragraphs under the difference engine heading bold, in order to make the paragraphs stand out too. And we'd further like to do this without inline styling, in order to keep our CSS separate from the HTML. The problem is that there's more than one paragraph under that heading, so we can't use an `id`.

Using CSS, turn all the paragraphs in the "difference engine" section bold with the following constraints:
- You're allowed to create **one** style rule in `external_style.css`
- You're not allowed to add any styling into `charles_babbage.html`, either inline or in an internal style sheet
- You're allowed to add other *attributes* to `charles_babbage.html`'s HTML


## Exercise Six &ndash; Web fonts
For this exercise, we'll be continuing on from Exercise Five. You'll make use of a custom web font hosted by Google, and add it to the front of your font stack in your HTML pages.

1. Go to Google's web fonts page at <https://fonts.google.com/>
2. Pick a font you like, "Merriweather" for instance, and click *"Select this style"*. 
3. On the right-hand menu which appears, copy the given `<link>`. 
4. Paste this `<link>` into the `<head>` of each of your webpages. Alternatively you may experiment with `@import`.

    To learn more about `<link>` versus `@import` see: <http://stackoverflow.com/questions/10036977/best-way-to-include-css-why-use-import>.

5. Open up the `external_style.css` file and set the first font in the font stack to use the Google web font's font-family you have chosen.
Move the `font-family` declaration from the paragraph selector into the body selector, so that the font declaration applies to all the text on your HTML pages, and not just text within paragraph tags.
6. Preview your pages, to check they now use the web font you selected. It may take a moment before the text on the page loads, because it is using the web font.


## Exercise Seven &ndash; Custom fonts
In the previous exercise, Google did the work for you by setting up the necessary `@font-face` declaration behind the scenes, so that you could go ahead and use the web-font in your CSS. Since you may not always be working with Google web fonts, but may be using fonts by other font providers, it's good to practise writing your own `@font-face` declarations.

1. Create a `fonts` subfolder in your [`ex07`](./exercises/ex07) folder.
2. Visit <http://www.fontsquirrel.com/> and select a distinctive font like "Alex Brush" and download it. Unzip the contents into your new fonts directory.
3. Open [`sonnets.css`](./exercises/ex07/sonnets.css), which is the stylesheet associated with [`sonnets.html`](./exercises/ex07/sonnets.html). Create a `@font-face` declaration for the font you downloaded. Make sure to refer to the font file using the name it is stored as in your fonts folder. Make the path to the font file relative to the web page (it should look something like `fonts/AlexBrush_regular.ttf`). The filename extension ".ttf" refers to the fact that this font is specified using the True Type Font format, a format originally developed by Apple and now in wide use across all the main operating system platforms.
4. Next, add the selected font to the front of the font stack used to display the sonnets.
Preview the web page. (You may choose to re-adjust the font size to make it larger or smaller, depending on the font you chose.

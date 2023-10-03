# Web Lab &ndash; File Uploads
In this lab, we gain more practice with the elements of Node.js, Express, and Handlebars which we've already covered in previous modules. This time, we look at accepting file uploads, and displaying images uploaded by the user.

## Obtaining the code
Now that you've obtained a copy of this repository through GitHub Classroom's invite, you have your own private version of this repository (i.e. the one you're looking at now)! To clone this repository onto your machine, click the green `Code` button, make sure `HTTPS` is selected, then click the `copy` button to the right of the web URL to copy its value. Then, clone onto your local machine from a terminal, using the `git clone` command.

If this is the first time you've ever cloned a repository on the current machine, you may be asked to enter your GitHub credentials. The "sign in with your browser" option should work just fine. You may need to enter your GitHub username and password, and / or authorize "git credential manager" to access your account. Perform these steps if asked.

Now, you should have a clone of your repository on your local machine, ready to develop!

Remember to commit and push your work regularly for backup purposes. It's also really good practice to create new branches for each exercise, and merge these into `main` using a Pull Request (PR) when they're complete (as opposed to simply pushing directly to `main` each time). This will get you used to a collaborative workflow style that will come in really handy when working on the final team project this semester!

**Note:** Whenever this lab mentions opening a "terminal window", any terminal *should* work. However, the work has only been tested using `git bash`.

**Note 2:** Remember to run `npm install` for each webapp, to make sure all necessary packages (including Express and Handlebars) are installed.


## Exercise One &ndash; Basic file uploads
Take a look at the [`exercise`](./exercise) folder. This exercise is a complete, basic example of how to handle file uploads using Express, with the **Multer** file upload package.

On line `19`, we can see the setup code for Multer. This code imports the library, and sets up Multer to place uploaded files in the `temp` folder. If this folder doesn't exist, Multer will automatically create it when the code is run.

Examining `home.handlebars` (which is rendered when we navigate to the root path `/`), we can see a `<form>`. This form is very similar to existing forms we've seen in this course, except it has a few unique characteristics:

- This form's `method` is set to `POST`. We **cannot** process file uploads using `GET` requests (just think: how would a file's entire contents be represented in the query string of a URL?).

- This form has an `<input>` element with `type="file"`. This places a control on the webpage which allows the user to browse for, and select, a file to upload. Note that its `name` is `imageFile` (therefore we can reference this input in our server-side code by that name). The file input also has an `accept` attribute, listing the kinds of files which can be uploaded. If we leave this out, then the input will accept any file type.

- This form has an `enctype`, which we've not yet seen. If not specified, the default is `application/x-www-form-urlencoded`. However, when uploading files, we *must* change this to `multipart/form-data`, as shown here.

When the user selects a file and submits the form, a `POST` request will be sent to `/uploadImage` (as specified by the form's `action` and `method`). Taking a look at `app.js`, we can see the corresponding route handler (line 38). This route handler has an extra parameter: `upload.single("imageFile")`. This is an example of *middleware* (more on this in future labs), which tells Multer to handle the actual file upload process for the file specified our `<input name="imageFile">` on the submitted form. Once the file upload is complete, *then* your route handler function will be called as usual. By the time your handler is called, you can assume that the file upload has completed successfully.

In the route handler itself, we can use the request object's `file` property (i.e. `req.file`) to get info about the uploaded file. We obtain this on line 41 and use it throughout the function.

Lines 44 - 46 are *renaming* the file to something more useful, and moving it out of the temp folder. When Multer handles a file upload, it will rename the file to a random string, but it does save the details of the original filename, which we can access through the file's `originalname` property if required.

The remainder of our route handler function sends some info about the uploaded file to Handlebars for rendering within the `uploadDetails` view - in addition to the `caption` typed by the user in the submitted form. This shows we can access all other submitted form values via `req.body` as usual (assuming we've configured the `body-parser` package - see line 17).

For this exercise, simply run the webapp, and test that it functions correctly. Verify that you can see where the uploaded files end up.


## Exercise Two &ndash; Displaying uploaded images
Often, we will want to display images we've uploaded in the browser. Continuing on from Exercise One, we'll modify the webapp to allow this.

For this exercise, simply add an `<img>` element to the `uploadDetails` view, whose `src` property is set appropriately. The image should be displayed *below* the file name, and *above* the caption, within the view.

**Hint:** Use the `fileName` which is already being supplied to the view as context information.

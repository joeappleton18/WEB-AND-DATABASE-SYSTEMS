# Web and Database Systems Notes

These are the notes for the web and database systems module. The notes are written in markdown and can be exported to pdf documents or a static site using pandoc or vuepress.

## Build Process

There are a few different ways to build these notes.

### Using Pandoc

The notes are written in markdown and can be converted to a pdf using pandoc. To get going, you'll need to install pandoc and latex.

- https://pandoc.org/installing.html
- https://www.latex-project.org/get/

To build the notes, run the following command:

```bash
./build_pdfs.sh
```

- The above command will generate pdfs for each markdown file. 

- Currently, I am uploading the pdfs to the files page of Surrey's [LMS](https://surreylearn.surrey.ac.uk/d2l/lp/manageFiles/main.d2l?ou=252843)



### Vuepress

You can also build the notes using vuepress. This will generate a static site that can be hosted on github pages.

- `npm install`
- `npm run dev` - to run the dev server
- `npm run build` - to build the static and deploy the static site. Ensure your branch is set to master and the remote is set to origin.

### Historic Versions

This section of the course is an evolution of courses from previous years. The notes for previous years are available here:

- https://github.com/joeappleton18/web_technologies_notes/tree/master/blocks/section1 - split into blocks
- https://github.com/joeappleton18/web-tech-2019-notes

### Credits

- [Marp](https://marp.app/) - for the slide deck
- [Vuepress](https://vuepress.vuejs.org/) - for the static site
- [Wandmalfarbe](https://github.com/Wandmalfarbe/pandoc-latex-template) - for the pandoc latex template

### License

This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.


The structure of your application should be as follows:

```

├── app
│   ├── index.js
│   ├── package.json
|   ├── views
|   |   ├── index.ejs
|   |   ├ .... other views
|   ├── public
|   |   ├── main.css
|   |   ├── ... other static assets

```


Develop a Frontend using HTML, CSS, and EJS. As explained above, as a minimum, you should have an EJS view for each of the following:

 • the homepage - served on / and may well contain summaries of the data in the database.
• view all - this will display a list of records. 
• view one - displays a single record. 




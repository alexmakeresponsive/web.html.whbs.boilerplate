import bookListingTemplate from "../templates/partials/Body/BodyHome.handlebars";

import NavItemsData from '../data/navitems';
import postsCategoryDefaultData from '../data/posts/categoryDefault/posts';


// import '../hub.js';

// import fse from 'fs-extra';



// var someFile = fse.readFile();




document.addEventListener("DOMContentLoaded", function() {

    var div = document.createElement('div');

    div.innerHTML = bookListingTemplate({
        username: "test",
        books: [
            { title: "A book", synopsis: "With a description" },
            { title: "Another book", synopsis: "From a very good author" },
            { title: "Book without synopsis" }
        ],
        NavItems: NavItemsData,
        postsCategoryDefault: postsCategoryDefaultData
    });

    console.log(div.innerHTML);

    document.body.appendChild(div);
});



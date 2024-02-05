const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

// This code reverses the names of the authors.
const reverseAuthorNames = books.map((bookObj) => {
  return { ...bookObj, author: bookObj.author.split(" ").reverse().join(", ") };
});
// This is how the split, reverse and join methods are working in the above code
//? split(" ")
// ["Don", "Norman"]
//? reverse()
// ["Norman", "Don"]
//? join(", ")
// Norman, Don

// This code sorts the book objects based on the last names of the authors. The authors names were reversed in the above code so it is easier now to sort them based on their last names.
reverseAuthorNames.sort((a, b) => (a.author < b.author ? -1 : a.author > b.author ? 1 : 0));

// The body is selected using the document method
const body = document.querySelector("body");

// The ul in the html is also selected using the document method and selecting with the class name.
const bookList = document.querySelector(".book-list");
bookList.classList.add("book-list"); // the "book-list" class in the main.css file is added to the ul in the html file.

// A forEach is used to iterate through the array of books objects.
reverseAuthorNames.forEach((book) => {
  const newLi = document.createElement("li"); // a new li element is created using the createElement() method.
  newLi.classList.add("book"); // the "book" class in the main.css is added to the li element just created.
  newLi.style.listStyleType = "none"; // since it is an li element, we can remove the list style type.

  const newImg = document.createElement("img"); // a new image element is created using the createElement() method
  newImg.src = book.img; // we can set an attribute on an element by just writing the name of the attribute and assigning it to a value. In this case, we set the src attribute on the image element and then assign it to img property from each book object.
  newImg.classList.add("book-cover"); // the "book-cover" class in the main.css is added to the img element just created.
  newImg.style.width = "100%"; // a width property is added to the image through the style property.
  newImg.style.height = "100%"; // a height property is added to the image through the style property.
  newImg.style.marginBottom = "1rem"; // a marginBottom property is added to the image through the style property.

  const newH4 = document.createElement("h4"); // a new h4 element is created using the createElement() method.
  newH4.innerText = book.title; // The h4 element uses innerText property to assign the value from the title property of the book object.

  const newP = document.createElement("p"); // a new p element is created using the createElement() method.
  newP.innerText = book.author; // The p element uses innerText property to assign the value from the author property of the book object.

  const newButton = document.createElement("button"); // a new button element is created using the createElement() method.

  // this condition checks if the alreadyRead property of each book is true or false. Based on the boolean value, the code is applied to the button element created.
  if (book.alreadyRead === true) {
    newButton.innerText = "Read";
    newButton.style.backgroundColor = "green";
    newButton.style.color = "white";
  } else {
    newButton.innerText = "To read";
    newButton.style.backgroundColor = "grey";
    newButton.style.color = "white";
  }

  // These are extra styles that are added to the button element/
  newButton.classList.add("status");
  newButton.style.borderRadius = "0.4rem";
  newButton.style.border = "none";
  newButton.style.float = "right";

  // The new elements created are then appended to the li element.
  newLi.append(newImg);
  newLi.append(newH4);
  newLi.append(newP);
  newLi.append(newButton);

  // The li element is the appended to the ul element which is already in the html file.
  bookList.append(newLi);
});

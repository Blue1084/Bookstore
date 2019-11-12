let books;

fetch("https://api.myjson.com/bins/zyv02", {
    method: "Get",
    headers: {}
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    books = data.books;
    bookscover(data.books);



    // addEventListener al search input pasandole todos los books
    addEventListener("keyup", function () {
      research(books)
    });
  })
  .catch(function (error) {
    console.log(error);
  });

function bookscover(array) {
  let covers = document.getElementById("coversimg");
  //   let flip = document.querySelector("coversimg").toggleClass("flipper");
  covers.innerHTML = ""
  for (let i = 0; i < array.length; i++) {
    let image = document.createElement("img");
    let tbooks = document.createElement("h3");
    let dbooks = document.createElement("p");
    let boton = document.createElement("button")




    image.src = array[i].cover;
    tbooks.innerHTML = array[i].title;
    dbooks.innerHTML = array[i].description;





    let flipcontainer = document.createElement("div");
    let flipper = document.createElement("div");
    let front = document.createElement("div");
    let back = document.createElement("div");



    // Para que el css funcione debemos "crear" las clases que hemos incluido en el css
    // igual que hariamos en el html
    flipcontainer.className = "flip-container";
    flipper.className = "flipper";
    front.className = "front";
    back.className = "back";
    boton.className = "button"



    front.append(image);

    flipper.append(front, back);
    flipcontainer.append(flipper);
    covers.append(flipcontainer);
    // flip.append(covers);
    // covers.append(image);

    let links = document.createElement("a");

    let href = document.createAttribute("href");
    let datafancybox = document.createAttribute("data-fancybox")
    let caption = document.createAttribute("data-caption")

    datafancybox.value = "images"
    href.value = array[i].detail;
    caption.value = array[i].description;

    links.setAttributeNode(href);
    links.setAttributeNode(datafancybox);
    links.setAttributeNode(caption);


    links.append(boton);
    back.append(tbooks, dbooks, links);







  }






}

function research(array) {

  console.log("fif");


  let search = document.querySelector("input[type=search]").value
  let titlebooksfilters = [];

  console.log(titlebooksfilters);
  console.log(search);






  for (let i = 0; i < array.length; i++) {


    if ((array[i].title.toLowerCase().includes(search.toLowerCase())) || (array[i].description.toLowerCase().includes(search.toLowerCase()))) {
      console.log(array[i]);

      titlebooksfilters.push(array[i])

    }




  }

  bookscover(titlebooksfilters)


}
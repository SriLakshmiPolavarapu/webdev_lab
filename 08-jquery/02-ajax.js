document.body.style.backgroundColor = "skyblue";
const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#book");
app.style.paddingLeft = 0;
const loading = document.querySelector("#loader");

const addBookToDOM = (item) => {
  console.log(item);
  let element = document.createElement("div");
  let heading = document.createElement("h3");
  let publisher = document.createElement("p");
  let published = document.createElement("p");
  let pages = document.createElement("p");

  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.alignItems = "center";
  element.style.marginTop = "20px";

  heading.textContent = item.name;
  publisher.textContent = item.authors[0];
  published.textContent = item.released.substr(0, 4);
  pages.textContent = `${item.numberOfPages} pages`;

  element.append(heading);
  element.append(publisher);
  element.append(published);
  element.append(pages);
  app.append(element);
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.forEach((item) => {
        console.log(item.name, item.authors[0]);
        addBookToDOM(item);
      });
    })
    .catch((error) => {
      console.log(error);
      let div = document.createElement("div");
      div.textContent = `Please try again later`;
      app.append(div);
    })
    .finally(() => {
      let loading = document.querySelector("#loader");
      app.removeChild(loading);
    });
};

fetchData(url);

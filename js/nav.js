function change(index) {
  var p = document.getElementById("section");
  switch (index) {
    case 1:
      p.innerHTML = "<iframe width=100% height=100% src='./w01/Intro.html'>";
      p.style.backgroundColor = "azure";
      break;

    case 2:
      p.innerHTML = "<iframe width=100% height=100% src='./w01/Pokemon.html'>";
      p.style.backgroundColor = "azure";
      break;

    case 3:
      p.innerHTML =
        "<iframe width=100% height=100% src='./w02/imageGallery.html'>";
      p.style.backgroundColor = "azure";
      break;

    case 4:
      p.innerHTML = "<iframe width=100% height=100% src='./w02/Blog.html'>";
      p.style.backgroundColor = "azure";
      break;

    case 5:
      p.innerHTML = "<iframe width=100% height=100% src='./w03/Div.html'>";
      p.style.backgroundColor = "azure";
      break;

    case 6:
      p.innerHTML = "<iframe width=100% height=100% src='./w04/tku60.html'>";
      p.style.backgroundColor = "azure";
      break;
  }
}

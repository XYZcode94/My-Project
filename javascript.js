let link = document.getElementsByClassName('page-link');

let currentValue = 1;


function backwardBtn() {
  if (currentValue > 1) {
    for (l of link) {
      l.classList.remove('current');
    }
    currentValue--;
    link[currentValue - 1].classList.add('current');
  }

}


function currentpage() {

  for (l of link) {
    l.classList.remove('current');
  }
  event.target.classList.add('current');
  currentValue = event.target.value;

}

function forwardBtn() {
  if (currentValue < 3) {
    for (l of link) {
      l.classList.remove('current');
    }
    currentValue++;
    link[currentValue - 1].classList.add('current');
  }

}


function filter() {
  // Get input value and convert to lowercase
  var searchValue = document.getElementById("search").value.toLowerCase();

  // Get gallery items
  var galleryItems = document.getElementsByClassName("mini-container");

  // Loop through all gallery items and hide those that don't match the search query
  for (var i = 0; i < galleryItems.length; i++) {
    var galleryItem = galleryItems[i];
    var text = galleryItem.getElementsByTagName("p")[0].textContent.toLowerCase();

    if (text.indexOf(searchValue) > -1) {
      galleryItem.style.display = "";
    } else {
      galleryItem.style.display = "none";
    }
  }
}



// Get filter buttons
var filterButtons = document.getElementsByClassName("filter-button");

// Add click event to each filter button
for (var i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function() {
    // Get quality value of clicked button
    var quality = this.getAttribute("data-quality");

    // Get movies
    var movies = document.getElementsByClassName("movie");

    // Loop through all movies and show those that match the selected quality
    for (var j = 0; j < movies.length; j++) {
      var movie = movies[j];
      var movieQuality = movie.getAttribute("data-quality");

      if (quality === "all" || quality === movieQuality) {
        movie.style.display = "";
      } else {
        movie.style.display = "none";
      }
    }
  });
}

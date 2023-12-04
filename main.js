const popup = document.getElementById("popup")
const selected = document.getElementById("selected")

let thumbnails = document.querySelectorAll('#artbox img'); // get all image thumbnails
    thumbnails.forEach(x => { // when you click a thumbnail, run expandImage()
        x.onclick = function() { expandImg(x) }
    })

function expandImg(img) {
    selected.src = img.src // change image src
    popup.removeAttribute("style") // remove 'display: none'
}

popup.onclick = function(event) {
  // close the popup if you click OUTSIDE the image, e.g. on the parent popup div
  if (event.target.id == popup.id) popup.style.display = "none"
}
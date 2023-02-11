//your code here
const imagesContainer = document.getElementById("images-container");

const imageUrls = [
  "https://picsum.photos/id/123/200/300",
  "https://picsum.photos/id/124/200/300",
  "https://picsum.photos/id/125/200/300",
];

for (let i = 0; i < imageUrls.length; i++) {
  const img = document.createElement("img");
  img.src = imageUrls[i];
  img.alt = `Random Image ${i+1}`;
  imagesContainer.appendChild(img);
}
This JavaScript code selects the images-container element and creates 3 img elements, sets their src attributes to the URLs provided, and their alt attributes to "Random Image 1", "Random Image 2", and "Random Image 3" respectively. The images are then appended to the images-container element, along with a heading "Random Images".




Regenerate response

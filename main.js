//////////////////////////
// ToolSky Main JS File //
//////////////////////////

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000, // animation duration in ms
  once: true      // animate only once on scroll
});

// Sidebar toggle for mobile
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

// Future Tool Functions (Placeholder)
// You can add tool-specific JS here

// Example: Word Counter (already inline in HTML)
// function countWords() {
//   let text = document.getElementById("textInput").value.trim();
//   let count = text.split(/\s+/).length;
//   document.getElementById("result").innerText = "Word Count: " + count;
// }

// Example: Image Resizer placeholder
function resizeImage(fileInputId, widthId, heightId, resultId) {
  let file = document.getElementById(fileInputId).files[0];
  if (!file) {
    document.getElementById(resultId).innerText = "Please select an image";
    return;
  }
  let w = document.getElementById(widthId).value;
  let h = document.getElementById(heightId).value;
  document.getElementById(resultId).innerText = `Selected image: ${file.name}\nNew Size: ${w || 'auto'} x ${h || 'auto'} px`;
}

// Example: Background Remover placeholder
function removeBackground(fileInputId, resultId) {
  let file = document.getElementById(fileInputId).files[0];
  if (!file) {
    document.getElementById(resultId).innerText = "Please select an image";
    return;
  }
  document.getElementById(resultId).innerText = `Background removal placeholder for: ${file.name}`;
}

// Example: Image Compressor placeholder
function compressImage(fileInputId, resultId) {
  let file = document.getElementById(fileInputId).files[0];
  if (!file) {
    document.getElementById(resultId).innerText = "Select an image";
    return;
  }
  document.getElementById(resultId).innerText = `Compressing placeholder: ${file.name}`;
}

// Add more tools functions here as needed...
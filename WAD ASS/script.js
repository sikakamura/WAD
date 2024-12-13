// Function to fetch and render external HTML
async function fetchAndRender(component, url) {
  try {
    // Fetch the content from the HTML file
    const response = await fetch(`/WAD ASS/sections/${url}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${url}: ${response.statusText}`);
    }
    const content = await response.text();

    // Define the custom element
    customElements.define(
      component,
      class extends HTMLElement {
        connectedCallback() {
          this.innerHTML = content; // Insert the fetched content
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
}

// Render components dynamically
fetchAndRender("what-is-tiktok", "what-is-tiktok.html");
fetchAndRender(
  "getting-started-with-tiktok",
  "getting-started-with-tiktok.html"
);
fetchAndRender(
  "exploring-tiktok",
  "exploring-tiktok.html"
);
fetchAndRender(
  "duet-stich",
  "duet-stich.html"
);
fetchAndRender(
  "earning-in",
  "earning-in.html"
);
fetchAndRender(
  "growing-audience",
  "growing-audience.html"
);
fetchAndRender(
  "understand-tik",
  "understand-tik.html"
);


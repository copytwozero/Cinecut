async function searchMovie() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const listContainer = document.getElementById("movieList");
  listContainer.innerHTML = "";

  try {
    const response = await fetch("movies.json");
    const movies = await response.json();

    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(input)
    );

    if (filtered.length === 0) {
      listContainer.innerHTML = "<li>No movies found</li>";
    } else {
      filtered.forEach(movie => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = movie.link;
        a.textContent = movie.title;
        li.appendChild(a);
        listContainer.appendChild(li);
      });
    }
  } catch (error) {
    console.error("Error loading movies:", error);
  }
}
  <script>
  const url = "Tamil Movies.html";
  if (window.location.hostname === "yourdomain.com") {
    window.location.href = url;
  } else {
    alert("This link only works on the correct domain.");
  }
</script>
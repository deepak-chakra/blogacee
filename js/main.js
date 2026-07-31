const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

const grid = document.getElementById("posts-grid");

if (grid) {
  fetch("posts.json")
    .then((res) => res.json())
    .then((posts) => {
      if (!posts.length) {
        grid.innerHTML = '<p class="empty-state">No posts yet — check back soon.</p>';
        return;
      }

      const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

      grid.innerHTML = sorted
        .map(
          (post) => `
          <a class="post-card" href="posts/${post.slug}.html">
            <span class="date">${formatDate(post.date)}</span>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
          </a>`
        )
        .join("");
    })
    .catch(() => {
      grid.innerHTML = '<p class="empty-state">Couldn\'t load posts right now.</p>';
    });
}

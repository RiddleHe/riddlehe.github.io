// Render cards from data.js and wire up the swipeable rows.

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function repoCard(r) {
  const dot = LANG_COLORS[r.lang] || "#bbb";
  return `
    <a class="card repo-card" href="${esc(r.url)}" target="_blank" rel="noopener">
      <div class="repo-top">
        <span class="repo-owner">${esc(r.owner)} /</span>
        <span class="repo-name">${esc(r.name)}</span>
      </div>
      <p class="repo-desc">${esc(r.desc)}</p>
      <div class="repo-meta">
        <span class="lang"><i class="dot" style="background:${dot}"></i>${esc(r.lang)}</span>
        <span class="stars">&#9733; ${r.stars.toLocaleString()}</span>
      </div>
    </a>`;
}

function paperCard(p) {
  const badge = [p.venue, p.status].filter(Boolean).join(" &middot; ");
  return `
    <a class="card paper-card" href="${esc(p.url)}" target="_blank" rel="noopener">
      <div class="thumb"><img src="${esc(p.thumb)}" alt="" loading="lazy" /></div>
      <div class="paper-body">
        <span class="badge">${badge}</span>
        <h3 class="paper-title">${esc(p.title)}</h3>
      </div>
    </a>`;
}

function render(id, items, fn) {
  document.getElementById(id).innerHTML = items.map(fn).join("");
}

render("repos", REPOS, repoCard);
render("papers", PAPERS, paperCard);

// Arrow controls: scroll a track by roughly one card width.
document.querySelectorAll(".arrows").forEach((group) => {
  const track = document.getElementById(group.dataset.for);
  group.querySelectorAll(".arrow").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = track.querySelector(".card");
      const step = card ? card.offsetWidth + 18 : track.clientWidth * 0.8;
      track.scrollBy({ left: step * Number(btn.dataset.dir), behavior: "smooth" });
    });
  });
});

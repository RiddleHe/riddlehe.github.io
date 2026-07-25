// Render the blog index list from POSTS (data.js).

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const fmtDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${months[m - 1]} ${d}, ${y}`;
};

function postRow(p) {
  return `
    <a class="post-row" href="${esc(p.slug)}">
      <span class="post-date">${fmtDate(p.date)}</span>
      <span class="post-info">
        <span class="post-title">${esc(p.title)}</span>
        <span class="post-blurb">${esc(p.blurb)}</span>
      </span>
    </a>`;
}

document.getElementById("post-list").innerHTML = POSTS.map(postRow).join("");

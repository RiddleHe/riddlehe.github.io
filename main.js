// Render the page from data.js — 2x2 grids with bullets, resume-matched chips.

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Inline SVG icons (viewBox preserved; sized via CSS by height).
const ICON = {
  github: '<svg viewBox="0 0 16 16"><path class="ico-ink" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',
  x: '<svg viewBox="0 0 1200 1227"><path class="ico-ink" d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6904H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path class="ico-star" d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.401 8.169L12 18.896l-7.335 3.867 1.401-8.169L.132 9.21l8.2-1.192z"/></svg>',
  scholar: '<svg viewBox="0 0 640 512"><path class="ico-ink" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.2-2.1s5.8-6.2 6.5-10.5c8.7-52.8 8.9-116.8 .6-176.6c-.4-2.6-.8-5.2-1.2-7.7l99.6-36c10.4-3.8 21.9 1.6 25.6 12s-1.6 21.9-12 25.6L122 351.6c2.6 13.7 4.6 27.9 5.9 42.4L243.7 351.9c7.6 2.7 15.6 4.1 23.7 4.1l52.6 0c8.1 0 16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.5 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314.5c-11.1 4-22.8 6.1-34.5 6.1s-23.5-2-34.5-6.1L143.3 262.6 128 408z"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><path class="ico-ink" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  book: '<svg viewBox="0 0 448 512"><path class="ico-ink" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm64-240H320c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H320c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>',
  doc: '<svg viewBox="0 0 384 512"><path class="ico-ink" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>',
};

const bulletList = (items) =>
  `<ul class="bullets">${items.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`;

function repoCard(r) {
  return `
    <a class="card" href="${esc(r.url)}" target="_blank" rel="noopener">
      <div class="card-head">
        <span class="repo-name">${ICON.github}<span class="owner">${esc(r.owner)}/</span>${esc(r.name)}</span>
        <span class="chip">${ICON.star}<span class="count">${r.stars}</span></span>
      </div>
      ${bulletList(r.bullets)}
    </a>`;
}

function paperCard(p) {
  const badge = [p.venue, p.status].filter(Boolean).join(" · ");
  const cite = p.cited > 0 ? `<span class="chip">${ICON.book}<span class="count">${p.cited}</span></span>` : "";
  return `
    <a class="card" href="${esc(p.url)}" target="_blank" rel="noopener">
      <div class="thumb"><img src="${esc(p.thumb)}" alt="" loading="lazy" /></div>
      <div class="paper-meta"><span class="badge">${esc(badge)}</span>${cite}</div>
      <h3 class="paper-title">${esc(p.title)}</h3>
      ${bulletList(p.bullets)}
    </a>`;
}

function profileChips(pf) {
  return [
    `<a class="chip" href="${esc(pf.resume)}" target="_blank" rel="noopener">${ICON.doc}Résumé</a>`,
    `<a class="chip" href="mailto:${esc(pf.email)}">${ICON.mail}</a>`,
    `<a class="chip" href="${esc(pf.x)}" target="_blank" rel="noopener">${ICON.x}</a>`,
    `<a class="chip" href="${esc(pf.github)}" target="_blank" rel="noopener">${ICON.github}${ICON.star}<span class="count">${pf.githubStars}</span></a>`,
    `<a class="chip" href="${esc(pf.scholar)}" target="_blank" rel="noopener">${ICON.scholar}<span class="count">${pf.citations}</span></a>`,
  ].join("");
}

document.getElementById("profile-chips").innerHTML = profileChips(PROFILE);
document.getElementById("repos").innerHTML = REPOS.map(repoCard).join("");
document.getElementById("papers").innerHTML = PAPERS.map(paperCard).join("");

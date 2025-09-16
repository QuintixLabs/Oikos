/**
 * WEBRING.JS
 * -------------------------------------------------------------------------------------------------
 * Handles widget rendering and navigation (next, prev, random) for the webring.
 */

fetch('./members.json')
  .then(response => response.json())
  .then(members => {

    // render members list on index.html
    const membersList = document.getElementById('members');
    if (membersList) {
      members.forEach(member => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = member.site;
        a.textContent = member.name;
        a.target = "_blank";
        li.appendChild(a);
        membersList.appendChild(li);
      });
    }

    // Redirect logic
    const path = window.location.pathname.split('/').pop();
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');

    // only run redirect logic if on next.html, prev.html, or rand.html
    if (['next.html','prev.html','rand.html'].includes(path)) {

      // if a name is provided but does not exist, redirect to hub
      if (name && !members.some(m => m.name === name)) {
        window.location.href = 'index.html';
      } else if (path === 'next.html' && name) {
        const idx = members.findIndex(m => m.name === name);
        const next = members[(idx + 1) % members.length];
        window.location.href = next ? next.site : 'index.html';
      } else if (path === 'prev.html' && name) {
        const idx = members.findIndex(m => m.name === name);
        const prev = members[(idx - 1 + members.length) % members.length];
        window.location.href = prev ? prev.site : 'index.html';
      } else if (path === 'rand.html') {
        if (members.length === 0) {
          window.location.href = 'index.html';
          return;
        }

        let randIndex;
        if (name) {
          const currentIndex = members.findIndex(m => m.name === name);
          do {
            randIndex = Math.floor(Math.random() * members.length);
          } while (randIndex === currentIndex && members.length > 1);
        } else {
          randIndex = Math.floor(Math.random() * members.length);
        }

        window.location.href = members[randIndex].site;
      }

    }

  })
  .catch(err => console.error(":( failed to load members.json:", err));

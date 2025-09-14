/**
 * WEBRING.JS
 * -----------------------------------------------------------------------------------------
 * Primarily used for the functionality of the webring (next.html, rand.html, prev.html).
*/


fetch('./members.json')
  .then(response => response.json())
  .then(members => {
    const membersList = document.getElementById('members');

    // Render members on index.html
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

    if (path === 'next.html' && name) {
      const idx = members.findIndex(m => m.name === name);
      const next = members[(idx + 1) % members.length];
      window.location.href = next ? next.site : 'index.html';
    }

    if (path === 'prev.html' && name) {
      const idx = members.findIndex(m => m.name === name);
      const prev = members[(idx - 1 + members.length) % members.length];
      window.location.href = prev ? prev.site : 'index.html';
    }

    if (path === 'rand.html') {
      if (members.length === 0) {
        window.location.href = 'index.html';
        return;
      }
      
      let randIndex;
      if(name) {
        const currentIndex = members.findIndex(m => m.name === name);
        do {
          randIndex = Math.floor(Math.random() * members.length);
        } while (randIndex === currentIndex && members.length > 1);
      } else {
        randIndex = Math.floor(Math.random() * members.length);
      }

      window.location.href = members[randIndex].site;
    }

  })
  .catch(err => console.error(":( failed to load members.json:", err));

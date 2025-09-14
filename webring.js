/**
 * WEBRING.JS
 * -----------------------------------------------------------------------------------------
 * Primarily used for the functionality of the webring (next.html, rand.html, prev.html).
*/


fetch('./members.json')
  .then(response => response.json())
  .then(members => {

    // Render members if on index.html
    const membersList = document.getElementById('members');
    if (membersList) {
      members.forEach(member => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = member.site;  // Link directly to their website
        a.textContent = member.name; // Only show the name
        a.target = "_blank";  // Open in new tab
        li.appendChild(a);
        membersList.appendChild(li);
      });
    }

    // Redirect logic
    const path = window.location.pathname.split('/').pop(); // filename
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    
    if(path === 'next.html' && name){
      const idx = members.findIndex(m => m.name === name);
      const next = members[(idx + 1) % members.length];
      window.location.href = next ? next.site : 'index.html';
    }

    if(path === 'prev.html' && name){
      const idx = members.findIndex(m => m.name === name);
      const prev = members[(idx - 1 + members.length) % members.length];
      window.location.href = prev ? prev.site : 'index.html';
    }

    if(path === 'rand.html'){
      const rand = members[Math.floor(Math.random() * members.length)];
      window.location.href = rand.site;
    }

  })
  .catch(err => console.error(":( failed to load members.json:", err));

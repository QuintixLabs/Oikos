<h1 align="center">
  <a href="https://oikos-webring.netlify.app/" target="_blank"><img src="https://github.com/user-attachments/assets/8f7989d0-80fc-44f5-bb89-4b289cfffe44" alt="Webring Logo" "></a>
</h1>
<p align="center"><strong>🌐 A webring template for everyone </strong></p>


<p align="center">
<a href="#-what-is-it">What is it?</a> •
<a href="#-how-it-works">How it works</a> •
<a href="#-getting-started">Getting Started</a> •
<!---<a href="#-joining">Joining</a> •-->
<a href="#-contributors">Contributors</a>
</p>

## 🌟 What is it?

This is a **simple webring template** for people who want to link their personal websites together.  

## 💡 How it works

- Each member has their own website.  
- The webring provides links to **Next**, **Previous**, and **Random** sites.  
- You can display the webring widget anywhere on your site.  
- A simple [JSON](https://github.com/fr0st-iwnl/webring/blob/master/members.json) file keeps track of all members.

## 🚀 Getting Started

1. Press **"Use this template"** on GitHub to create your own copy.
2. Clone your new repository locally:
```bash
git clone https://github.com/<yourusername>/Oikos.git
```
3. Open `index.html` in your browser or host it on GitHub Pages / Netlify, or any static site host.
4. Modify `members.json` to add your own members/sites.
5. Customize the **HTML**, **CSS**, **JS** and **branding** to make it your own.

## 🔗 Navigation

There are **three types of links** in the webring:

| Link | What it does |
|------|-------------|
| `prev.html?name=<yourname>` | Goes to the **previous member**.|
| `next.html?name=<yourname>` | Goes to the **next member**. |
| `rand.html` | Goes to a **random member**. |

## 🗺 Navigation Flow (Mermaid Diagram)

Let's say you have **3 members** in the webring (***Alice***, ***Carol*** and ***Bob***):

```mermaid
graph LR
  Prev["Carol - Previous member"] --> Alice["Alice -  Current member"] --> Next["Bob - Next member"]
  Alice --> Random["Random member"]

  %% Styling nodes
  style Alice fill:#4D70B7,stroke:white,stroke-width:1px
```

<!---
## 📝 Joining

1. Have a personal website.  
2. Add the webring links to your site **(they have to be on the main page)**:
```html
<a href="https://webring.fr0st.xyz/prev.html?name=<name>">⬅ Previous</a>
<a href="https://webring.fr0st.xyz/">Webring</a>
<a href="https://webring.fr0st.xyz/rand.html">🎲 Random</a>
<a href="https://webring.fr0st.xyz/next.html?name=<name>">Next ➡</a>
```
3. Add yourself to the `members.json` file:
```json
{ "name": "yourname", "site": "https://yourwebsite.com" }
```
4. That's it! You're in the webring.
--->

## 🤝 Contributors

This webring is open-source.
If you want to improve it, feel free to fork the repo and submit a pull request.

### Thank you!

<a href="https://github.com/fr0st-iwnl/webring/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=fr0st-iwnl/webring" />
</a>


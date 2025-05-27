
# 🚀 Atelier JS n°5 — Programmation Orientée Objet & Interactions DOM

![Banner](https://capsule-render.vercel.app/api?type=waving&color=0:f46b45,100:eea849&height=200&section=header&text=Atelier%205%20JS&fontSize=40&fontAlign=center)

Cet atelier est consacré à la **programmation orientée objet (POO)** en JavaScript, couplée à une manipulation concrète du **DOM**, dans un contexte d’application web interactive centrée sur la gestion de contenus dynamiques.

---

## 🧠 Objectifs pédagogiques

🎯 Maîtriser les concepts suivants :

- Création et instanciation de **classes JavaScript**
- Manipulation avancée des **objets** et des **collections**
- Gestion d'événements dans le **DOM**
- Génération et injection dynamique de contenu HTML
- Structuration d’une mini-application interactive

---

## 🗂️ Contenu par exercice

### ✅ Exercice 1 : Classe `Voiture`

> Objectif : Modéliser une voiture avec ses propriétés essentielles et des méthodes d’interaction.

```js
class Voiture {
  constructor(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
  }

  demarrer() {
    console.log(`${this.marque} ${this.modele} démarre... 🚗`);
  }

  infos() {
    return `${this.marque} - ${this.modele} (${this.annee})`;
  }
}

const maVoiture = new Voiture("Toyota", "Corolla", 2021);
maVoiture.demarrer();
console.log(maVoiture.infos());
```

---

### ✅ Exercice 2 : Classe `Blog` avec gestion des articles

> Objectif : Créer une classe `Blog` qui peut ajouter et supprimer des articles dynamiquement.

```js
class Blog {
  constructor() {
    this.articles = [];
  }

  ajouterArticle(article) {
    this.articles.push(article);
  }

  supprimerArticle(titre) {
    this.articles = this.articles.filter(a => a.titre !== titre);
  }

  afficherArticles() {
    return this.articles.map(a => `📝 ${a.titre}`).join('\n');
  }
}

const monBlog = new Blog();
monBlog.ajouterArticle({ titre: "JS POO", contenu: "..." });
monBlog.ajouterArticle({ titre: "DOM", contenu: "..." });
console.log(monBlog.afficherArticles());
```

---

### ✅ Exercice 3 : Classe `Post` + Affichage DOM

> Objectif : Afficher un post dynamiquement dans la page web via manipulation du DOM.

```js
class Post {
  constructor(titre, contenu) {
    this.titre = titre;
    this.contenu = contenu;
  }

  afficher(containerId) {
    const container = document.getElementById(containerId);
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `<h3>${this.titre}</h3><p>${this.contenu}</p>`;
    container.appendChild(div);
  }
}

const p = new Post("Nouveau Post", "Ceci est un contenu dynamique.");
p.afficher("posts-container");
```

---

### ✅ Exercice 4 : Mini Blog complet (Formulaire + DOM)

> Objectif : Formulaire HTML permettant d’ajouter dynamiquement des posts dans la page.

```html
<form id="form-post">
  <input type="text" id="titre" placeholder="Titre" required />
  <textarea id="contenu" placeholder="Contenu"></textarea>
  <button type="submit">Publier</button>
</form>
<div id="posts-container"></div>
```

```js
document.getElementById("form-post").addEventListener("submit", function (e) {
  e.preventDefault();
  const titre = document.getElementById("titre").value;
  const contenu = document.getElementById("contenu").value;
  const nouveauPost = new Post(titre, contenu);
  nouveauPost.afficher("posts-container");
  this.reset();
});
```

---

### ✅ Exercice 5 : Gestion des élèves (POO + DOM)

> Objectif : Mini application web qui permet d’ajouter, lister et supprimer des élèves.

```js
class Eleve {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  afficherHTML() {
    const li = document.createElement("li");
    li.innerText = `${this.nom} (${this.age} ans)`;
    return li;
  }
}

const liste = document.getElementById("liste-eleves");
const form = document.getElementById("form-eleve");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nom = document.getElementById("nom").value;
  const age = document.getElementById("age").value;
  const eleve = new Eleve(nom, age);
  liste.appendChild(eleve.afficherHTML());
  form.reset();
});
```

---

## 📁 Structure des fichiers

```bash
Atelier_5/
├── README.md
├── ex1-classe-voiture.js
├── ex2-blog.js
├── ex3-post.js
├── ex4-mini-blog.html
├── ex5-eleves.html
└── assets/
    └── style.css
```
![image](https://github.com/user-attachments/assets/c1460ad6-9c61-48fe-a1f3-6ca1537d12f0)


---

## 📸 Capture d’écran 
![image](https://github.com/user-attachments/assets/c0a8507c-d98c-4765-baf4-a76388fb24b5)
![image](https://github.com/user-attachments/assets/9a2aab18-bd59-4558-97a2-3c10868a1844)
![image](https://github.com/user-attachments/assets/e64cf768-eb80-4548-ba42-344a0d68662d)
![image](https://github.com/user-attachments/assets/49412c51-0453-4f3d-8a7f-3c810fd5f0bb)


---
---

## ✍️ Auteurs

- **👨‍💻 AICH Fadi** — **👨‍💻 El Badre Anass**
- **🤖 Programmation Objet JS** — ENSIT  

---

## ✨ Citation Deep du jour

![Quote](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight)

> *"Le code bien structuré est une promesse tenue entre l’esprit du développeur et la machine."*

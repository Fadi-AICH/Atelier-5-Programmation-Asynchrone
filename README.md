
# 🚀 Atelier JS n°5 — Programmation Asynchrone, Uploads & Communication Serveur

![Banner](https://capsule-render.vercel.app/api?type=waving&color=0:008080,100:20c997&height=200&section=header&text=Atelier%205%20JS&fontSize=40&fontAlign=center)

Cet atelier explore des concepts avancés de **programmation web asynchrone** en JavaScript et PHP. Il combine des techniques modernes côté client (fetch API, DOM) avec des traitements serveur (PHP, CRUD, échanges temps réel) pour développer des applications complètes.

---

## 🧠 Objectifs pédagogiques

🎯 Compétences ciblées :

- Requêtes HTTP asynchrones avec `fetch`
- Manipulation de fichiers en front-end et back-end
- Gestion de base de données via API PHP (CRUD)
- Traitement temps réel type WebSocket (polling simplifié)
- Structuration modulaire d’applications Web

---

## 🗂️ Contenu par exercice

### ✅ Exercice 1 — AsyncProfile (Fetch + JSON local)

> Objectif : charger dynamiquement un profil utilisateur depuis un fichier JSON.

**Fichiers :**
- `index.html` : page d'affichage
- `js/app.js` : fetch + injection DOM
- `image.png` : avatar ou photo utilisateur

```js
fetch('data/profile.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('nom').textContent = data.nom;
    document.getElementById('photo').src = data.image;
  });
```

---

### ✅ Exercice 2 — File Upload (PHP côté serveur)

> Objectif : envoyer un fichier vers le serveur et afficher la liste des fichiers existants.

**Structure :**
- `upload.php` : traitement de l’envoi
- `list_files.php` : liste des fichiers
- `public/index.html` : interface utilisateur

```php
// upload.php
move_uploaded_file($_FILES['fichier']['tmp_name'], 'uploads/' . $_FILES['fichier']['name']);
```

```js
// JS
const formData = new FormData();
formData.append('fichier', fileInput.files[0]);
fetch('upload.php', { method: 'POST', body: formData });
```

---

### ✅ Exercice 3 — CRUD Rooms (avec backend PHP + SQL)

> Objectif : gérer dynamiquement des chambres (ajout, suppression, mise à jour, lecture).

**Structure :**
- `backend/` : fichiers PHP pour chaque opération CRUD
- `sql/` : script de création de la table
- `public/index.html` : interface utilisateur

```php
// create.php
$sql = "INSERT INTO rooms (name, capacity) VALUES (?, ?)";
```

```js
fetch('backend/read.php')
  .then(res => res.json())
  .then(data => afficherChambres(data));
```

---

### ✅ Exercice 4 — Stock Temps Réel

> Objectif : modifier et visualiser le stock produit en temps réel (via polling ou long-polling).

**Structure :**
- `backend/` :
  - `read.php` : lit le stock
  - `update.php` : met à jour le stock
  - `broadcast.php` : gère la diffusion
- `public/index.html` : dashboard visuel
- `log.txt` : journal d’activités

```php
// update.php
file_put_contents('log.txt', json_encode($data));
```

```js
setInterval(() => {
  fetch('backend/read.php')
    .then(res => res.json())
    .then(data => updateStockUI(data));
}, 1000);
```

---

## 📁 Arborescence du projet

```bash
Atelier_5/
├── Exercice1_AsyncProfile/
│   ├── css/
│   ├── js/app.js
│   ├── image.png
│   └── index.html
├── Exercice2_FileUpload/
│   ├── public/index.html
│   ├── public/css/, js/
│   ├── upload.php
│   └── list_files.php
├── Exercice3_RoomsCRUD/
│   ├── public/index.html
│   ├── public/css/, js/
│   ├── backend/*.php
│   └── sql/rooms.sql
└── Exercice4_RealTimeStock/
    ├── public/index.html
    ├── public/css/, js/
    ├── backend/*.php
    ├── sql/
    └── log.txt
```
![image](https://github.com/user-attachments/assets/1db5c19b-13d5-4d95-b294-ae883d103680)

---

## 📸 Capture d’écran

 
![image](https://github.com/user-attachments/assets/c0a8507c-d98c-4765-baf4-a76388fb24b5)
![image](https://github.com/user-attachments/assets/e64cf768-eb80-4548-ba42-344a0d68662d)
![image](https://github.com/user-attachments/assets/f5d9e03e-8c51-4a16-9978-40c3de4f6017)
![image](https://github.com/user-attachments/assets/4c1057a2-1dcf-4f1f-b252-7db4f9756058)

---

## ✍️ Auteurs

.👨‍💻AICH Fadi
.👨‍💻ELHAMDOUCHI Ilyasse
.👨‍💻EL BADRE Anas

---

## ✨ Citation Deep du jour

![Quote](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight)

> *"Un système bien pensé n’a pas besoin d’explications — il parle à travers sa structure."*

/* File: Exercice1_AsyncProfile/js/app.js */
const userData = {
    name: 'Aich Fadi',
    email: 'FadiX@gmail.com',
    avatar: 'image.png',
    gender: 'M'
};

const extraUsers = [
    { name: 'Anass', email: 'Web3@gmail.com', login: 'FX', address: '1 Rue Tanger' },
    { name: 'Ilyasse Josha', email: 'Ilyasse@gmail.com', login: 'Josha', address: '456 Avenue cordoue' }
];

// Simule la récupération de données utilisateur
function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(userData);
        }, 1500);
    });
}

// Simule la récupération des commandes (exemple de chaîne de Promises)
function fetchUserOrders(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            const orders = [`Commande1 de ${user.name}`, `Commande2 de ${user.name}`];
            resolve(orders);
        }, 1000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('profile-card');
    const tbl = document.getElementById('users-table');

    // Récupération et affichage du profil
    fetchUser()
        .then(user => {
            document.getElementById('avatar').src = user.avatar;
            document.getElementById('name').textContent = user.name;
            document.getElementById('email').textContent = user.email;
            document.getElementById('gender').textContent = user.gender;
            card.classList.remove('hidden');
            return fetchUserOrders(user);
        })
        .then(orders => {
            console.log('Commandes reçues :', orders);
            // Ici, vous pourriez afficher les commandes si besoin
        })
        .catch(err => console.error(err));

    // Affiche le tableau des utilisateurs supplémentaires
    tbl.classList.remove('hidden');
    const tbody = tbl.querySelector('tbody');
    extraUsers.forEach(u => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>${u.login}</td>
            <td>${u.address}</td>
        `;
        tbody.appendChild(row);
    });
});

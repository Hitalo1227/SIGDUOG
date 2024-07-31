function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function toggleSubMenu(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    closeOtherSubMenus(id);
}

function closeOtherSubMenus(id) {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(sub => {
        if (sub.id !== id) {
            sub.style.display = 'none';
        }
    });
}

function loadContent(content) {
    document.getElementById('dynamic-content').innerHTML = `<h3>${content}</h3>`;
    closeMenu();
}

function closeMenu() {
    const menu = document.getElementById('menu');
    menu.classList.remove('active');
}

function filterMenu() {
    const search = document.getElementById('search').value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(search) ? 'block' : 'none';
    });
}

function clearContent() {
    document.getElementById('dynamic-content').innerHTML = '';
}

function showLogoutConfirmation() {
    document.getElementById('confirmation-dialog').style.display = 'block';
}

function confirmLogout() {
    // Redireciona para a tela de login ou para onde desejar
    window.location.href = 'file:///C:/Users/hital/Downloads/LOGIN%20S.html'; // Substitua pelo caminho da tela de login
}

function cancelLogout() {
    document.getElementById('confirmation-dialog').style.display = 'none';
}

function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    datetimeElement.textContent = now.toLocaleDateString('pt-BR', options).replace(',', ' |');
}

function showAccessPointDialog() {
    document.getElementById('access-point-dialog').style.display = 'block';
}

function cancelAccessPointDialog() {
    document.getElementById('access-point-dialog').style.display = 'none';
}

function selectAccessPoint(accessPoint) {
    let menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.style.display = 'none';
    });

    if (accessPoint === 'ti') {
        document.querySelector('.menu-item[data-id="estoque"]').style.display = 'block';
    } else if (accessPoint === 'consultor') {
        document.querySelector('.menu-item[data-id="operacional"]').style.display = 'block';
    } else if (accessPoint === 'admin') {
        menuItems.forEach(item => {
            item.style.display = 'block';
        });
    }

    cancelAccessPointDialog();
}

// Atualiza data e hora a cada segundo
setInterval(updateDateTime, 1000);

document.addEventListener('DOMContentLoaded', updateDateTime);
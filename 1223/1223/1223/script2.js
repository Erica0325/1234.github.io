function goBack() {
  // 返回上一頁
  history.back();
}

function toggleMenu() {
  const menu = document.getElementById('dropdownMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function toggleSubMenu(event) {
  event.preventDefault();
  const subMenu = document.getElementById('subMenu');
  subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
}
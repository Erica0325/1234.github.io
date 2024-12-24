// 漢堡選單切換
function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// 子選單切換
function toggleSubMenu(event) {
    event.preventDefault();
    const subMenu = document.getElementById('subMenu');
    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
}

// 音頻播放功能
function playAudio(id) {
    // 這裡可以添加實際的音頻播放邏輯
    console.log(`播放公式 ${id} 的音頻`);
    // 例如：
    // const audio = new Audio(`formula${id}.mp3`);
    // audio.play();
}

// 點擊其他地方關閉選單
document.addEventListener('click', function(event) {
    const menu = document.getElementById('dropdownMenu');
    const menuButton = document.querySelector('.menu-button');
    const subMenu = document.getElementById('subMenu');
    
    if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = 'none';
        subMenu.style.display = 'none';
    }
}); 
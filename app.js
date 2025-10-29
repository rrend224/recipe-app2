document.addEventListener('DOMContentLoaded', () => {
  const menuButtons = document.querySelectorAll('.menu-btn');
  const sections = document.querySelectorAll('.section');

  // 左メニュークリックでセクション表示切替
  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sections.forEach(sec => sec.classList.remove('active'));
      const target = document.getElementById(btn.dataset.target);
      target.classList.add('active');
    });
  });

  // 初期表示は「レシピ追加」
  document.getElementById('add-recipe').classList.add('active');

  // レシピ追加機能
  const addBtn = document.getElementById('addBtn');
  const titleInput = document.getElementById('title');
  const recipesList = document.getElementById('recipes');

  addBtn.addEventListener('click', () => {
    const title = titleInput.value.trim();
    if (!title) return;

    const li = document.createElement('li');
    li.textContent = title;
    recipesList.appendChild(li);
    titleInput.value = '';
    // レシピ一覧を表示
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById('recipe-list').classList.add('active');
  });
});

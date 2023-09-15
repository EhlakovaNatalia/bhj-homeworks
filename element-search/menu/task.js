const subMenus = [...document.querySelectorAll(".menu_sub")];
subMenus.forEach((subMenu) => {
  const menuItem = subMenu.closest(".menu__item");
  const subMenuLinks = menuItem.querySelectorAll(".menu__link");
  subMenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (subMenu.contains(e.target)) {
        return;
      }
      e.preventDefault();
      const activeMenu = document.querySelector(".menu_sub_active");
      if (activeMenu && activeMenu !== subMenu) {
        activeMenu.classList.remove("menu_sub_active");
      }
      subMenu.classList.toggle("menu_sub_active");
    });
  });
});
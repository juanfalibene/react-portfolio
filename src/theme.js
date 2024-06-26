const setTheme = (themeName) => {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
};

const keepTheme = () => {
  if (!localStorage.getItem("theme")) {
    setTheme("theme-dark");
  } else {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-dark");
    } else {
      setTheme("theme-light");
    }
  }
};

module.exports = {
  setTheme,
  keepTheme,
};

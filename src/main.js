const themeToggleBtn = document.getElementById("theme-toggle");
const appWrapper = document.getElementById("app-wrapper")

function setWrapperTheme(isDark) {
  if (isDark) {
    appWrapper.classList.add("dark");
  } else {
    appWrapper.classList.remove("dark");
  }
}

const sessionTheme = sessionStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches;

if(sessionTheme === 'dark' || (!sessionTheme && systemPrefersDark)){
  setWrapperTheme(true);
} else {
  setWrapperTheme(false);
}


themeToggleBtn.addEventListener("click", () => {
  const isDarkNow = appWrapper.classList.contains("dark");

  if (isDarkNow) {
    setWrapperTheme(false);
    sessionStorage.setItem("theme", "light");
  } else {
    setWrapperTheme(true);
    sessionStorage.setItem("theme", "dark");
  }
});

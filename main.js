// change color theme
document.getElementsByName('theme')
  .forEach(theme => {
    theme.addEventListener("change", (event) => {
      document.documentElement.setAttribute('color-theme', event.target.value);
    });
  });
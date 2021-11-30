<template>
  <div class="toggle">
    <span aria-hidden="true">☀️</span>
    <input type="checkbox" id="toggle-switch" />
    <label for="toggle-switch">
      <span class="screen-reader-text">Toggle Color Scheme</span>
    </label>
    <span aria-hidden="true">🌙</span>
  </div>
</template>

<script>
export default {
  // setup() {
  //   // Dark mode toggle JS
  //   // Get toggle switch
  //   const toggleSwitch = document.getElementById("toggle-switch");
  //   // Check for previously selected theme or color scheme setting
  //   function checkTheme() {
  //     if (localStorage.getItem("theme")) {
  //       currentTheme = localStorage.getItem("theme");
  //     } else if (
  //       window.matchMedia &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches
  //     ) {
  //       currentTheme = "dark";
  //     } else {
  //       currentTheme = null;
  //     }
  //   }
  //   // Switch theme and store setting
  //   function switchTheme(e) {
  //     if (e.target.checked) {
  //       document.documentElement.setAttribute("data-theme", "dark");
  //       localStorage.setItem("theme", "dark");
  //     } else {
  //       document.documentElement.setAttribute("data-theme", "light");
  //       localStorage.setItem("theme", "light");
  //     }
  //   }
  //   // Listen for switch toggles
  //   toggleSwitch.addEventListener("change", switchTheme, false);
  //   checkTheme();
  //   // Set stored theme
  //   if (currentTheme) {
  //     document.documentElement.setAttribute("data-theme", currentTheme);
  //     if (currentTheme === "dark") {
  //       toggleSwitch.checked = true;
  //     }
  //   }
  //   return {};
  // },
};
</script>

<style>
.toggle {
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: space-around;
  max-width: 140px;
  margin-right: 2em;
}

.toggle span {
  margin: 0 0.5rem;
}

.toggle input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

.toggle input[type="checkbox"]:checked + label {
  background: var(--primary);
}

.toggle input[type="checkbox"]:checked + label:after {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}

.toggle label {
  cursor: pointer;
  width: 50px;
  height: 25px;
  background: var(--base);
  display: block;
  border-radius: 40px;
  position: relative;
  margin-left: -0.5rem;
}

.toggle label:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 21px;
  height: 21px;
  background: var(--bg);
  border-radius: 40px;
  transition: 0.3s;
}
</style>

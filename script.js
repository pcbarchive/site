window.onload = function () {
    const hamburgerMenu = document.querySelector("#hamburgerMenu")
    const menu = document.querySelector("nav")
    const logo = document.querySelector("logo")
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener("click", function () {
            if (menu) {
                menu.classList.toggle("show")
            }
            if (logo) {
                logo.classList.toggle("showLogo")
            }
        })
    }
    const htmlPage = document.documentElement
    const switchBtn = document.getElementById("themeSwitch")
    const theme = document.getElementById("theme")
    let themeValue = localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    theme.setAttribute("href", `./css/${themeValue}.css`)
    if (switchBtn) {
        switchBtn.checked = (themeValue === "dark")
        switchBtn.addEventListener("change", () => {
            const newTheme = switchBtn.checked ? "dark" : "light"
            theme.setAttribute("href", `./css/${newTheme}.css`)
            localStorage.setItem("theme", newTheme)
        })
    }
    document.getElementById("coursesLink").addEventListener("click", function (e) {
        e.preventDefault()
        document.getElementById("coursesHeader").classList.toggle("showCoursesHeader")
    })
}
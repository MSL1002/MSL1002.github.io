document.addEventListener("DOMContentLoaded", () => {
    
    // starting mode will always be dark (as it should be)

    //looks into browser's memory and gets lightmode value
    let lightmode = localStorage.getItem("lightmode");

    const modeswitch = document.getElementById("switch-mode");

    const enableLightmode = () => {
        document.documentElement.classList.add("lightmode")
        localStorage.setItem("lightmode", "active")
        modeswitch.textContent = "Enable Dark Mode"
    }

    const disableLightmode = () => {
        document.documentElement.classList.remove("lightmode")
        localStorage.removeItem("lightmode")
        modeswitch.textContent = "Enable Light Mode"
    }

    // if the lightmode value = active, enables lightmode
    if(lightmode === "active"){
        enableLightmode();
    } else {
        disableLightmode();
    }

    modeswitch.addEventListener("click", () => {
        lightmode = localStorage.getItem("lightmode")
        if(lightmode !== "active") {
            enableLightmode();
        } else {
            disableLightmode();
        }
    });
});
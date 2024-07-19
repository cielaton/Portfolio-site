export const projects = [{
    name: "Personal work", imageFolder: "personal_work", list: [{
        name: "FPGA Image Processing",
        description: "The project utilizes an FPGA to perform some basic image processing methods, then sends the image data through UART to display on a client menu written in Bash script.",
        link: "https://github.com/cielaton/FPGA-Image-Processing.git",
        image_name: "FPGA",
        technologies: ["Verilog", "Quartus", "Shell script"]
    }, {
        name: "Personal Linux desktop",
        description: "My customized Wayland desktop on Arch Linux, an in-depth tuning Hyprland window manager from the status bar, application launcher to some minor utilities.",
        link: "https://github.com/cielaton/Hyprland-dotfiles",
        image_name: "Linux_desktop",
        technologies: ["GNU/Linux", "Shell script", "SCSS"]
    }, {
        name: "No project", description: "Unknown", link: [["none"]], image_name: "unavailable", technologies: ["none"]
    }, {
        name: "No project", description: "Unknown", link: [["none"]], image_name: "unavailable", technologies: ["none"]
    }]
}, {
    name: "Team projects", imageFolder: "team_projects", list: [{
        name: "No project", description: "Unknown", link: [["none"]], image_name: "unavailable", technologies: ["none"]
    }, {
        name: "No project", description: "Unknown", link: [["none"]], image_name: "unavailable", technologies: ["none"]
    }, {
        name: "No project", description: "Unknown", link: [["none"]], image_name: "unavailable", technologies: ["none"]
    }, {
        name: "No project", description: "Unknown", link: [["none"]], image_name: "unavailable", technologies: ["none"]
    }]
}]

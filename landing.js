let aboutTitle = "About us";
let aboutDescription = "Using VR to create different practice environment for visual impaired kids, so they have some sort-of practice before going in the real world.<br><br> Getting to know how sounds are interpreted in different environments, learn composure and confidence even in the most distracted or noisy environment";
let whyTitle = "Why?";
let whyDescription = "Build Confidence <br><br> Learn composure even in the noisy environment<br><br>Start early"
let current = "about"

document.getElementById("currentTitle").innerHTML = aboutTitle;
document.getElementById("description").innerHTML = aboutDescription;

function switchText(){
    if (current === "about"){
        $("#currentTitle").html(aboutTitle);
        $("#description").html(aboutDescription);
        current = "why";
    } else {
        $("#currentTitle").html(whyTitle);
        $("#description").html(whyDescription);
        current = "about";
    }
}
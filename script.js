const prefectures_number = 47
const paths = document.querySelectorAll("#map path");
const classname = document.querySelector(".name")

function hover(){
    for (let i = 0; i < prefectures_number; i++){
        const path = paths[i]
        /*console.log(path.getAttribute("title"))*/
        path.addEventListener("mouseenter", () => {
            classname.textContent = path.getAttribute("title")
        })
    }
}

hover()
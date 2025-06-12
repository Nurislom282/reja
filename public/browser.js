console.log("FrontEnd JS ishga tushdi!")

function itemTemplate (item){
    return ` <li
            class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
            <span class="item-text">${item.reja}</span>
            <div>
                <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Ozgartirish</button>
                <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">ochirish</button>
            </div>
            </li>`;
}

let createFild =document.getElementById('create-fild')

document.getElementById('create-form').addEventListener("submit", function(e){
    e.preventDefault();
    axios.post("/create-item", {reja: createFild.value}).then((response) => {
        document.getElementById("item-list").insertAdjacentHTML("beforeend",itemTemplate(response.data))
        createFild.value = "";
        createFild.focus();
    }),chatch((err)=> {
        console.log("Iltimos qaytatan harakat qiling")
    });
})

document.addEventListener("click",function (e) {
    console.log(e.target);
    //delet oper
    if(e.target.classList.contains("delete-me")){
        if(confirm("Aniq ochirmoqchimisiz?")){
            axios.post("delete-item", {id: e.target.getAttribute("data-id")})
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .chatch((err) => {
                console.log("Iltimos qaytadan harakat qiling!")
            });
        }
    }
    //edit oper
    if(e.target.classList.contains("edit-me")){
        alert("Siz edit tugmasini bostingiz!");
    }
})
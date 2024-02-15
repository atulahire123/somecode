const datas = [
    { name: "Ajay", Profession: "Software Engineer" },
    { name: "Anuj", Profession: "Software Engineer" }
];

function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}



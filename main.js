const btnList = document.querySelectorAll(".btn");
let input = document.querySelector("#input");
let clear = document.querySelector('#clear');
let aux = "";

btnList.forEach((e) => {
    e.addEventListener("click", function main() {
        let btn = e.innerText;

        if(btn === '='){
            input.value = eval(aux);
        } else {
            aux += btn;
            input.value = aux;
        }

        if(btn === 'CLEAR'){
            input.value = "";
            aux = "";
        }
    });
});


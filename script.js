// function mostrarchisteunaparte(data){
//     let contenedor= document.getElementById("contenedor");
//     contenedor.innerHTML =``;
//     contenedor.innerHTML += `${data.setup}`;
// };

function mostrarchistedospartes(data){
    let contenedor= document.getElementById("contenedor");
    contenedor.innerHTML =`
                                <h1>Joke</h1>
                                <p>${data.setup}</p>
                                <p>${data.delivery}</p>
                            `;
};

document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById("random");

    btn.addEventListener('click',function(){
        fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart').then(response => response.json())
        .then(data => {
            // if(data.setup == ""){

            // }else{
            //     mostrarchistedospartes(data);
            // }
            mostrarchistedospartes(data);
        });
    });
}); 
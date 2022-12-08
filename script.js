function converter() {
    let moeda1Select = document.querySelector('.select-01').value;
    let moeda2Select = document.querySelector('.select-02').value;

    let moeda1 = moeda1Select;
    let moeda2 = moeda2Select;
    let moedas = moeda1 + moeda2;
    const url = `https://economia.awesomeapi.com.br/json/last/${moeda1}-${moeda2}`;


    const data = fetch(url).then(response => {
        return response.json()
    }).then(data => {
        let objeto = data[moedas];
        mostrarMoedas(objeto)

    })

    function mostrarMoedas(objeto) {
        let resultados = document.querySelector('.results');
        let qtd = document.querySelector('.input-value').value;
        
        let resultadoFinal = (objeto.bid * qtd).toFixed(2);
    
            resultados.innerHTML = `
    
            <h1>${resultadoFinal}</h1>
            `
        

    }
}






function flag01() {
    let flag1 = document.querySelector('.flag-01');
    let optionValue = document.querySelector('.select-01').value;
    optionValue !== '0' ? flag1.innerHTML = `<span><img src="./imagens/${optionValue}.jpg" alt="bandeira">` : ''




}

function flag02() {
    let flag2 = document.querySelector('.flag-02')
    let optionValue = document.querySelector('.select-02').value;
    optionValue !== '0' ? flag2.innerHTML = `<span><img src="./imagens/${optionValue}.jpg" alt="bandeira">` : ''
}
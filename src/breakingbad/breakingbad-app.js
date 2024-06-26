
/**
 * @returns{Object} quote indormation
 */
const fetchQuotes = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();

    console.log(data[0]);
    return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element) => {
    document.querySelector('#app-title').innerHTML = 'Breakingbad App';

    element.innerHTML = 'Loading...';
    //await fetchQuotes();

    const quoteLabel = document.createElement('blokquote');
    const autoLabel = document.createElement('h3');
    const nexquoteButton = document.createElement('button');
    nexquoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        autoLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, autoLabel, nexquoteButton);
    }

    fetchQuotes().then(renderQuote);

    nexquoteButton.addEventListener('click', async () => {

        // cuando se hace una peticion se pone el elemento en loading
        element.innerHTML = 'Loading...';
        // espera la respuesta de la peticion
        const data = await fetchQuotes();
        // muestra la respuesta
        renderQuote(data);
    });
}
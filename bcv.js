import init ,  { scrape_bcv_website } from 'https://www.unpkg.com/dolar-bcv-wasm@0.1.0/dolar_bcv_wasm.js';

async function get_currency_changes() {
    await init();
    let currency_exchange =  await scrape_bcv_website();
    currency_exchange = currency_exchange.split(";")

    let currency = ''
    let data = {}

    for (let index = 0; index < currency_exchange.length; index++) {
        const element = currency_exchange[index].replaceAll(" ","");

        if (index % 2 == 0  ||  index == 0 ){
            data[element] = ''
            currency = element
        }else{
            data[currency] = element
        }
        
    }
    document.querySelector("#usd").innerText = parseFloat(data['USD'].replace("," , ".")).toFixed(2)
}

setTimeout(()=>{
    get_currency_changes().catch(console.error);
}, 300)
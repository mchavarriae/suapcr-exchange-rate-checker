const axios = require('axios');
const cheerio = require('cheerio');

async function fetchTcCompraValue(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const tcCompraValue = $('#tc-compra').text();
        return tcCompraValue.trim();
    } catch (error) {
        console.error(`Error fetching data from URL: ${error}`);
        return null;
    }
}

// Example usage
const url = 'https://suap.cr';

fetchTcCompraValue(url).then(value => {
    if (value) {
        console.log(`${value}`);
    } else {
        console.log('No value found or an error occurred.');
    }
});
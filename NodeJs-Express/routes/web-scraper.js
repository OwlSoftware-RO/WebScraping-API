var express = require('express');
var router = express.Router();

const cheerio = require('cheerio');
const axios = require('axios');


/* GET webScraping url. */
router.post('/', async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    let data = req.body;
    if(data['targetUrl'] != null || data['targetUrl'] != undefined){
        //res.send(await scrapeWeb(data['targetUrl']))
        res.send(await scrapeWebAxios(data['targetUrl']))
    }else{
        res.send('No founded url key');
    }
})

async function scrapeWeb(targetUrl){
    await fetch(targetUrl)
        .then(async res => {
            if (res.status === 200) {
            return await res.text();
            } else if (res.status === 404) {
            throw new Error('Data not found');
            } else {
            throw new Error('Server error');
            }
        })
    .then(json => console.log(json))
    .catch(err => console.error(err));
}

async function scrapeWebAxios(targetUrl){
    const axiosResponse = await axios.request({
        method: "GET",
        url: targetUrl,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })
    //return axiosResponse.data;
    const $ = cheerio.load(axiosResponse.data)
    return $.text();
    var value = $('#__next').text();
    return value;
}

module.exports = router;

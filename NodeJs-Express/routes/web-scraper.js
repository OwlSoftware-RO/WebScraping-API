var express = require('express');
var router = express.Router();

const cheerio = require('cheerio');
const fetch = require('node-fetch');


/* GET webScraping url. */
router.post('/', async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    let data = req.body;
    if(data['targetUrl'] != null || data['targetUrl'] != undefined){
        res.send(await scrapeWeb(data['targetUrl']))
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

module.exports = router;

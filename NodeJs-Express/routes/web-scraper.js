var express = require('express');
var router = express.Router();

/* GET webScraping url. */
router.post('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    let data = req.body;
    if(data['targetUrl'] != null){
        res.send(data['targetUrl']);
    }else{
        res.send('No founded url key');
    }
})

module.exports = router;

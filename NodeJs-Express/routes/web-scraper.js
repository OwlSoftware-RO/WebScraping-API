var express = require('express');
var router = express.Router();

/* POST webScraping url. */
router.post('/', (req, res) => {
    let data = req.body;
    if(data['targetUrl'] != null){
        res.send(data['targetUrl']);
    }else{
        res.send('No founded url key');
    }
})

module.exports = router;

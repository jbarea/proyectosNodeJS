const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Funciona la ruta /!');
})

module.exports = router;
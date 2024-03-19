const router = require('express').Router();
const DomainsClubs = require('../models/domains.model');

router.route('/').get((req,res)=>{
    DomainsClubs.find()
        .then(domainsclubs => res.json(domainsclubs))
        .catch(err => res.status(400).json('Error:'+err));
});

router.route('/add').post((req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const type = req.body.type;
    const path = req.body.path;

    const newDomainsClubs = new DomainsClubs({
        title,
        description,
        image,
        type,
        path
    });

    newDomainsClubs.save()
        .then(()=>res.json('Domain/Club added!'))
        .catch(err => res.status(400).json('Error:'+err))
});

router.route('/:id').get((req,res)=>{
    DomainsClubs.findById(req.params.id)
        .then(domainclub => res.json(domainclub))
        .catch(err => res.status(400).json('Error:'+err))
})

router.route('/:id').delete((req,res)=>{
    DomainsClubs.findByIdAndDelete(req.params.id)
        .then(()=>res.json("Domain/Club deleted" ))
        .catch(err=>res.status(400).json('Error:' + err));
})

//update domains by Id
router.route('/update/:id').post((req,res)=>{
    DomainsClubs.findById(req.params.id)
        .then(domainclub=>{
            console.log("req",req.body);
            console.log(domainclub,"exe");

            domainclub.title = req.body.title;
            domainclub.description = req.body.description;
            domainclub.save()
                .then(()=> res.json('Domain/Club Updated!'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error:'+err))
})
module.exports = router;
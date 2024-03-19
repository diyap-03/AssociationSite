const {mongoose} = require('mongoose');
const Schema = mongoose.Schema;

const domainclubSchema =  new Schema({
    title: { type: String, required: true },
    description: { type: String, required:true },
    image: { type: String, required:true},
    type: { type: String, required:true},
    path: { type: String, required:true}
},
{
    timestamp: true
})

const DomainsClubs = mongoose.model('DomainClub', domainclubSchema);

module.exports = DomainsClubs;
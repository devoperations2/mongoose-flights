const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
const { redirect } = require('express/lib/response');
module.exports = {
  new: newTicket,
  create
}

function newTicket(req, res) {
    res.render(`tickets/new`, {flightId: req.params.id});

}
function create(req, res){
Flight.findOne({
   _id: req.params.id 
}, function(err, flight) {
    if(err) res.redirect(`/flights/${flight._id}`);
   req.body.flight = flight._id;
   var ticket = new Ticket(req.body); 
   ticket.save();
   res.redirect(`/flights/${flight._id}`);
}); 


}
const Flight =require('../models/flight');
const Ticket =require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        
        Ticket.find({flight: flight._id}, function(err, tickets) {
            // Now you can pass both the flight and tickets in the res.render call
            res.render('flights/show', { flight, tickets });     
          });
      
    })
}

function create(req, res) {
    console.log(req.body)
    const flight = new Flight(req.body);
    flight.save(function(err){
        console.log(err);
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', { flights });
    });
}
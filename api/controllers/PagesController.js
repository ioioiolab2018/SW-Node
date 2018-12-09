exports.home = (req, res) => {
    res.sendFile(__dirname + '/index.html');
    // res.render('home', {
    //     formMessage: req.flash('form')
    // });
};

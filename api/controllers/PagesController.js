exports.home = (req, res) => {
    res.sendFile(__dirname + '/index.html');
};



exports.getShowDashBoard = (req, res) => {

    res.render('admin/dashboard');
};

exports.getLogin = (req, res) => {
    res.render('admin/login');
};

exports.getStep1 = (req, res) => {
    res.render('admin/step1');
};

exports.getStep2 = (req, res) => {
    res.render('admin/step2');
};
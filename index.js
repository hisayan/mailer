var Mailer = require('./lib/mailer');

exports.init = function initMailer(compound) {
    var mailer = new Mailer(compound);
    compound.controllerExtensions.sendEmail = mailer.send;
    compound.on('structure', function() {
        mailer.load(function (err, mailers) {
        });
    });
    compound.__defineGetter__('mailer', function () {
        return mailer;
    });
};

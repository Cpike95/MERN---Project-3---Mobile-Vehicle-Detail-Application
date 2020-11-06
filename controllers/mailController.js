const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails

exports.sendContactMail = function (req, res) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY || SENDGRID_API_KEY);

	//Get Variables from query string in the search bar
	const { sender, topic, text, name, phone, vehicle } = req.query;
	//Sendgrid Data Requirements
	const msg = {
		to: sender, //recipient
		from: 'gerayanez@gmail.com',
		subject: topic,
		text: `
	From:\n
	Name: ${name}\n
	Email: ${sender}\n
	Phone: ${phone}\n
	Vehicle: ${vehicle}\n
	Main Message: ${text}.`,
	};
	//Send Email
	sgMail.send(msg).then(
		() => {},
		(error) => {
			console.error(error);

			if (error.response) {
				console.error(error.response.body);
			}
		}
	);
};
exports.sendClientMail = function (req, res) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY || SENDGRID_API_KEY);

	//Get Variables from query string in the search bar
	const { email, name } = req.query;
	//Sendgrid Data Requirements
	const msg = {
		to: email,
		from: 'gerayanez@gmail.com',
		subject: 'Thank you for booking!',
		text: `
	Thanks ${name}! We'll reach back out to you!`,
	};
	//Send Email
	sgMail.send(msg).then(
		() => {},
		(error) => {
			console.error(error);

			if (error.response) {
				console.error(error.response.body);
			}
		}
	);
};
exports.sendBookedMail = function (req, res) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY || SENDGRID_API_KEY);

	//Get Variables from query string in the search bar
	const { phone, email, address1, name, address2, city, state, zip, makemodel, notes, carlocation, datereq, timereq } = req.query;
	//Sendgrid Data Requirements
	const msg = {
		to: 'Gerasautodetailing@gmail.com',
		from: 'gerayanez@gmail.com',
		subject: name + ' has booked with you.',
		text: `
	From:\n
	Name: ${name}\n
	Email: ${email}\n
    Phone: ${phone}\n
    Address: ${address1 + address2}\n
    City: ${city}\n
    State: ${state}\n
    Zip: ${zip}\n
    Make Model: ${makemodel}\n
    Car Location: ${carlocation}\n
    Date: ${datereq}\n
    Time: ${timereq}\n
	Notes: ${notes}.`,
	};
	//Send Email
	sgMail.send(msg).then(
		() => {},
		(error) => {
			console.error(error);

			if (error.response) {
				console.error(error.response.body);
			}
		}
	);
};

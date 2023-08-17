const request = require('request');

module.exports = (req, res) => {
    let siteURL = process.env.URL_NAME
    let {
        url
    } = req.query;
    let timestamp = new Date().getTime();
    var options = {
        'method': 'GET',
        'url': `${siteURL}/api/websites/${process.env.SITE_ID}/stats?startAt=${process.env.START_TIME}&endAt=${timestamp}&url=${url}`,
        headers: {
            'Authorization': `Bearer ${process.env.API_TOKEN}`,
        },
    }
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.write(response.body);
        res.end();
    });
}
const rp = require("request-promise");

const getCloths = (req, res) => {
    const search = req.body.data;
    getAmazon(search);
    res.send("ok");
};

const getAmazon = async (cloth) => {
    const url = `https://www.amazon.in/s?k=${cloth}`;
    const res = await rp.get(url);
    console.log(res);
};

module.exports = getCloths;

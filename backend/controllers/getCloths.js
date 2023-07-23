const rp = require("request-promise");
const cheerio = require("cheerio");

let results = [];

const getCloths = (req, res) => {
    const search = req.body.data;
    getAmazon(search);
    res.send("ok");
};

const getAmazon = async (cloth) => {
    const url = `https://www.amazon.in/s?k=${cloth}`;
    const res = await rp.get(url);
    const $ = cheerio.load(res);
    $("div[data-component-type='s-search-result']", res).each((i, el) => {
        let product_name = $(el)
            .find("span[class='a-size-base-plus a-color-base a-text-normal']")
            .text();
        let product_img = $(el).find("img[class='s-image']").attr("src");

        results.push({ product_name, product_img });
    });

    console.log(results);
};

module.exports = getCloths;

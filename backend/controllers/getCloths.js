const rp = require("request-promise");
const cheerio = require("cheerio");

const getCloths = async (req, res) => {
    const search = req.body.data;
    try {
        const data = await getAmazon(search);
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getAmazon = async (cloth) => {
    let results = [];
    const url = `https://www.amazon.in/s?k=${cloth}`;
    try {
        const res = await rp(url); // Use rp(url) instead of rp.get(url)
        const $ = cheerio.load(res);
        let count = 0;
        $("div[data-component-type='s-search-result']").each((i, el) => {
            if (count >= 10) return;
            count++;
            let product_name = $(el)
                .find(
                    "span[class='a-size-base-plus a-color-base a-text-normal']"
                )
                .text();
            let product_img = $(el).find("img[class='s-image']").attr("src");
            results.push({ product_name, product_img });
        });

        return results;
    } catch (error) {
        throw new Error("Error while scraping Amazon: " + error.message);
    }
};

module.exports = getCloths;

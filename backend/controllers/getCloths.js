const rp = require("request-promise");
const cheerio = require("cheerio");

const getCloths = async (req, res) => {
    const search = req.body.data;
    try {
        const amazon_data = await getAmazon(search);
        // const myntra_data = await getMyntra(search);

        const data = {
            amazon: amazon_data,
            myntra: [],
        };
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

const getMyntra = async (cloth) => {
    let results = [];
    const url = `https://www.myntra.com/${cloth}`;
    try {
        const res = await rp(url);
        const $ = cheerio.load(res);
        let count = 0;
        console.log(res);
        $("li[class='product-base']").each((i, el) => {
            if (count >= 10) return;
            count++;
            let product_brand = $(el).find("h3[class='product-brand']").text();
            let product_name = $(el).find("h4[class='product-product']").text();
            let product_img = $(el)
                .find("img[class='img-responsive']")
                .attr("src");
            const product = `${product_brand} ${product_name}`;
            results.push({ product, product_img });
        });
        return results;
    } catch (error) {
        throw new Error("Error while scraping Myntra: " + error.message);
    }
};
module.exports = getCloths;

var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
    scrapeHeadlines: function (req, res) {
        console.log("hit");
        // scrape the NYT
        return scrape()
            .then(function (articles) {
                // then insert articles into the db
                return db.scrapedData.create(articles);

            })
            .then(function (dbRes) {
                res.json(dbRes)
            })
    }
};

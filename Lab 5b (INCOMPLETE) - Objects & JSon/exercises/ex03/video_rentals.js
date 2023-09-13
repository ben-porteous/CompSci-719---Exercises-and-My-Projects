
window.addEventListener("load", function () {

    // Note: the data within the 'customerdb.js' file will be within scope
    // for code in this file because it is loaded into the browser document

    // Console log demo to show how to access fields within the JavaScript object
    console.log(`Customer #${2} details --> Name: ${customers[2].name}  Gender: ${customers[2].gender}`);

    // This array has the names of the header rows for the tables
    const headerNames = ["Name", "Gender", "Year born", "Year Joined", "Number of Rentals"];

    // These nested JavaScript objects can be used to store the statistics you calculate for the table.
    // This can be used for Challenge Exercise Four. It is not required for Exercise Two.
    const summaryStatistics = {
        numMales: {
            name: "Number of males",
            value: 0
        },
        numFemales: {
            name: "Number of females",
            value: 0
        },
        thirty_or_younger: {
            name: "0-30 yrs",
            value: 0
        },
        under_65: {
            name: "< 65yrs",
            value: 0
        },
        on_or_over_65: {
            name: "65 <=",
            value: 0
        },
        num_gold: {
            name: "Gold members",
            value: 0
        },
        num_silver: {
            name: "Silver members",
            value: 0
        },
        num_bronze: {
            name: "Bronze members",
            value: 0
        }
    };

    /* TODO: Your code here */

});


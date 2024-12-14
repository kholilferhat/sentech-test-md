// function titleCase(str) {
//     return str
//         .toLowerCase()
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
// }


// console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase("sHoRt AnD sToUt"));
// console.log(titleCase("SHORT AND STOUT"));

// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(), ms);
//     });
// }

// // if tested in terminal
// delay(3000).then(() => console.log('runs after 3 seconds'));

// // if tested on browser
// delay(3000).then(() => alert('runs after 3 seconds'));

async function fetchData(url) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!url) {
        throw new Error("URL is required");
    }

    return `Data from ${url}`;
}


async function processData(data) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!data) {
        throw new Error("Data is required");
    }

    return data.toUpperCase();
}


(async () => {
    try {
        const data = await fetchData("https://example.com");
        console.log("Fetched Data:", data);

        const processedData = await processData(data);
        console.log("Processed Data:", processedData);
    } catch (err) {
        console.error("Error:", err.message);
    }
})();


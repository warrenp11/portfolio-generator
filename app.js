/*

ARROW FUNCTIONS:

const printProfileData = profileDataArr => {
    // !!! THIS CHANGES...
    // for (let i = 0; i < profileDataArr.length; i++) {
    //     console.log(profileDataArr[i]);
    // }
    // !!! TO THIS...
    // profileDataArr.forEach((profileItem) => {
    //     console.log(profileItem);
    // });
    // !!! WHICH CHANGES...
    // !!! TO THIS...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);

*/
const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error (err);

    console.log('Portfoliio complete! Checkout out index.html to see the output!');
});
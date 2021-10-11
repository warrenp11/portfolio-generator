const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);



const printProfileData = profileDataArr => {
    // !!! THIS CHANGES...
    // for (let i = 0; i < profileDataArr.length; i++) {
    //     console.log(profileDataArr[i]);
    // }
    // !!! TO THIS...WHICH CHANGES...
    // profileDataArr.forEach((profileItem) => {
    //     console.log(profileItem);
    // });
    // !!! TO THIS
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
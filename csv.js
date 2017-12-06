// importing node modules.
const fs = require('fs');
const path = require('path');

// declaring the rest of the variables.
let CSV_PATH = './customer-data.csv'; // the file name.
let newJson = '';
let allData = []; // it'll contain all the data from the csv file.

// importing the data from the csv_path file.
fs.readFile(CSV_PATH,'utf-8', function (error, data){
	if(error) console.error(err.message);
	let newJson = data.split('\n');
	let keys = newJson[0].split(','); // keys will contain the keys for all the objects's properties.
	for(i=1; i<newJson.length; i++){
		let arr =newJson[i].split(','); // splitting all the users
		let obj = {}; 
		for(j=0; j<arr.length; j++){
			obj[keys[j]] = arr[j]; // for each user's, its object's properties contain the same keys from the keys array with its approriate values.
		}
		allData.push(obj); // push each new object to the array containing everthing 
	}
	fs.writeFile(path.join(__dirname, 'customer-data.json'), JSON.stringify(allData)) // create a json file containing all the data.
})



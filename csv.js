const fs = require('fs')
const path = require('path')
let CSV_PATH = './customer-data.csv';
let newJson = '';
let allData = [];

fs.readFile(CSV_PATH,'utf-8', function (error, data){
	if(error) console.error(err.message);
	let newJson = data.split('\n');
	console.log(newJson);
	console.log(newJson[0])
	let keys = newJson[0].split(',');
	console.log(keys);
	for(i=1; i<newJson.length; i++){
		let arr =newJson[i].split(',');
		let obj = {}; 
		for(j=0; j<arr.length; j++){
			obj[keys[j]] = arr[j];
		}
		allData.push(obj);
	}
	console.log(allData);
	fs.writeFile(path.join(__dirname, 'customer-data.json'), JSON.stringify(allData))
})



const fs = require ('fs');

// read about json files
const people1 = require ('./people1.json');
const people2 = require ('./people2.json');


// add both arrays
let peopleMerge = people1.concat(people2).sort();
let output = ' ';

for (var i = 0; i < peopleMerge.length; i++) {
	 output += peopleMerge[i] + "\n";
}


fs.writeFile('./sorted_people.txt', output, (err) => {
	if (err) throw err;
});

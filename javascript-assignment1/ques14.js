function compare(a,b){
   return a.age<b.age;
}

var myObj =

[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
for(i=0;i<myObj.length;i++){
	if(myObj[i].occupation=="Programmer"){
		console.log(myObj[i]);
	}
}
console.log("\n");
myObj.sort(compare)
console.log(myObj);
console.log("\n");
const names=myObj.map(myObj=>myObj.name);
console.log(names);
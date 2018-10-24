
myObj = [5, [22], [[14]], [[4]],[5,6]];
for(i=0;i<myObj.length;i++){
	if(Array.isArray(myObj[i])&&myObj[i].length==1){
	 ob=myObj[i];
	 myObj[i]=ob[0];
	 if(Array.isArray(myObj[i])&&myObj[i].length==1){
	 	ob=myObj[i];
	 myObj[i]=ob[0];
	 }
	}
	else if(Array.isArray(myObj[i])&&myObj[i].length>1){
		ob=myObj[i];
		myObj[i]=ob[0];
		for(i=1;i<ob.length;i++){
			myObj.push(ob[i]);
		}
	}
}
console.log(myObj);

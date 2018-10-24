var student=[
{ name:'sachin',marks:80},
{ name:'rahul',marks:60},
{ name:'saurav',marks:50},
{ name:'laxman',marks:90},
{ name:'suresh',marks:83}


];
var sum;
sum=0;
for(i=0;i<student.length;i++){
	sum+=student[i].marks;
}
var avr=sum/5;
console.log(avr);
if(avr<60){
	console.log("F");
}
else if(avr<70){
	console.log("D");
}
else if(avr<80){
	console.log("C");
}
else if(avr<90){
	console.log("B");
}
else if(avr<100){
	console.log("A");
}

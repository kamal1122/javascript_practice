var set1= new Set();
 var arr=new Array();
 arr.push(1);
 arr.push(1);
 arr.push(2);
 arr.push(2);
 arr.push(2);
 arr.push(3);
 arr.push(1);
 arr.push(1);
 arr.push(4);
 arr.push(2);
 arr.push(2);
 arr.push(5);
 for(i=0;i<arr.length;i++){

 	set1.add(arr[i]);
 }
console.log(set1);


for (var it = set1.values(), val= null; val=it.next().value; ) {
    console.log(val);
    
}


var ans=new Array();
ans.push(1);
ans.push(2)
ans.push(3)
ans.push(4)
ans.push(6)
ans.push(6)
ans.push(7);
var res=new Array();
for(i=0;i<ans.length;i++){
	res.push(ans[i]);
	if( i<ans.length-1){
       if(ans[i]%2==0 && ans[i+1]%2==0){
       	   res.push("-");
       }
	}
}
console.log(res);


 function check(x,y){
  var coun=0;
 	for(i=0;i<y.length;i++){
 		if(y.charAt(i)==x){
 			coun++
 		}
 	}
 	return coun;
 }
 var x='m';
var y="ahibiuwbmoljhuvyhnjuvbmjmmhuvv";
  console.log(check(x,y));
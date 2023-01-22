var a=[10,20,30,40,50,60,70,80,90,100];


var res=a.filter(element=>element<50);

console.log(res)

res=a.map(element=>element+9.5)

console.log(res)

for(var x of a){
    console.log(x)
}

a.forEach((element,index)=>console.log(element+" is at index "+index))

var sum=a.reduce((accumulate,element)=>accumulate+element)

console.log(sum)

var isFound=a.find(element=>element==50)
if(isFound==undefined){
    console.log('element not found')
}
else{
    console.log('element found')
}

var index=a.findIndex(element=>element==400)

if(index==-1){
    console.log('element not found')
}
else{
    console.log("element found at : ",index);
}
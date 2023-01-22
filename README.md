# Array Functions

## Filter :

It is used to filter array elements

var a=[10,20,30,40,50,60,70,80,90,100];

var res=a.filter(element=>element<50);

### output:

####  [10, 20, 30, 40]

## Map :

It is used to change every element in the array

var a=[10,20,30,40,50,60,70,80,90,100];

res=a.map(element=>element+9.5)

### output :

#### [19.5, 29.5, 39.5, 49.5, 59.5, 69.5, 79.5, 89.5, 99.5, 109.5]

## For of loop :

var a=[10,20,30,40,50,60,70,80,90,100];
for(var x of a){
console.log(x)
}

### output:

#### 10 20 30 40 50 60 80 90

## For Each loop:

This is mainly used because it also gives us index if second argument is declared
var a=[10,20,30,40,50,60,70,80,90,100];

a.forEach((element,index)=>console.log(element+" is at index "+index))

### output:

#### 10 is at index 0

#### 20 is at index 1

#### 30 is at index 2

#### 40 is at index 3

#### .....

## Reduce

Used to reduce an array to a single element

var sum=a.reduce((accumulate,element)=>accumulate+element)

### Output:

#### 550

## Find

used to find element present or not if present return element else return undefined

var isFound=a.find(element=>element==50)
if(isFound==undefined){
console.log('element not found')
}
else{
console.log('element found')
}

### Output:

#### element found

## findIndex

Used to find if element present or not if present return index else return -1

var index=a.findIndex(element=>element==400)

if(index==-1){
console.log('element not found')
}
else{
console.log("element found at : ",index);
}

### Output:

#### element not found

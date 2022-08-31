// IIFE Function

// Array
let array=[89,2,848,63,22,1,1,2,89,747,89];

// a

(function(array){
    let odd_array=[];
    for(i=0;i<array.length;i++){
        if(array[i]%2!=0){
            odd_array.push(array[i]);
        }
    }
    console.log("the odd number is",odd_array)
})
(array);

// b

var string="i am dhanushvarman from chennai";
(function(string){
    var str=string.split(' ');
        for(var i=0;i<str.length;i++){
            str[i]=str[i].toUpperCase().slice(0,1)+ str[i].slice(1);
        }
    console.log(...str);
})

(string);

// c

var sum=0;
(function(array){
    for (let index in array){
        sum+=array[index];
    }
    return sum
})

(array);
console.log("The sum of the array is",sum );

// d

(function(array){
    for(let j=0;j<array.length;j++){
        var num=array[j];
        let count=0;
        let prime=0;
        for(let i=0;i<=num;i++){
            if(num%i==0){
                count+=1;
            }
            if(count==2){
                console.log(num);
            } 
        }
    }
})

(array);



// e

(function(array){
let temp=0,final=0,rem=0;
for(var i=0;i<array.length;i++){
    temp=array[i];
    final=0,rem=0;
    while(temp>0){
        rem=temp%10;
        temp=parseInt(temp/10);
        final=(final*10)+rem;
   }
   if(final==array[i]){
       console.log(array[i]);
    }
}
})

(array);

// f

let arr1=[1,6,2,8,3];
let arr2=[4,7,5,9,0]; 
let arr3=[...arr1,...arr2];
let arr4=arr3.sort();
(function(arr4){
    let mid=(arr4.length/2);
    let median=((arr4[mid]+arr4[mid-1])/2);
    console.log(median);
})

(arr4);

// g

var uni=array.filter(function(first,sec){
    return array.indexOf(first) == sec;
});
console.log(uni);

// h

 var k=4;

(function (array, k) {
    k = k % array.length; //if rotation is gretaer than array length, then after rotation same array comes.
    let b = [];
    for (let i = 0; i < array.length; i++) {
      if (i < k) {
        b[i] = array[array.length + i - k];
      } else {
        b[i] = array[i - k];
      }
    }
    console.log(b);
  })
(array, k);



// Arrow Function

// Array
let array=[89,2,848,63,22,1,1,2,89,747,89];

// a

var odd_num= ([])=>{
    let odd_array=[];
    for(i=0;i<array.length;i++){
        if(array[i]%2!=0){
            odd_array.push(array[i]);
        }
    }
    console.log("the odd number is",odd_array)
}

odd_num(array);

// b

var string1="i am dhanushvarman from chennai";
var Title_caps=([])=>{
    var str=string1.split(' ');
        for(var i=0;i<str.length;i++){
            str[i]=str[i].toUpperCase().slice(0,1)+ str[i].slice(1);
        }
    console.log(...str);
}
Title_caps(string1);

// c

var add=([])=>{
    for (let index in array){
        sum+=array[index];
    }
    return sum
}
var sum=0;
add(array);
console.log("The sum of the array is",sum );

// d

var prime_number=()=>{
    let count=0;
    let prime=num;
    {
    for(let i=0;i<=num;i++){
        if(num%i==0){
            count+=1;
        }
    }
    if(count==2){
        prime=num;
        console.log(prime);
    }
     
}
  
}

for(let j=0;j<array.length;j++){
    var num=array[j];
    prime_number(num)
}

// e

var palindrome=([])=>{
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
}

palindrome(array);


//Anonymous Function

//array
let array=[89,2,848,63,22,1,1,2,89,747,89];

// a

var odd_num= function(array1){
    let odd_array=[];
    for(i=0;i<array1.length;i++){
        if(array1[i]%2!=0){
            odd_array.push(array1[i]);
        }
    }
    console.log("the odd number is",odd_array)
}

odd_num(array);

// b

var string1="i am dhanushvarman from chennai";
var Title_caps=function(string2){
    var str=string2.split(' ');
        for(var i=0;i<str.length;i++){
            str[i]=str[i].toUpperCase().slice(0,1)+ str[i].slice(1);
        }
    console.log(...str);
}
Title_caps(string1);

// c

var add=function(array1){
    for (let index in array1){
        sum+=array1[index];
    }
    return sum
}
var sum=0;
add(array);
console.log("The sum of the array is",sum );

// d

var prime_number=function(num){
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
    }
}
console.log(prime);   
}

for(let j=0;j<array.length;j++){
    prime_number(array[j])
}

// e

var palindrome=function(array1){
let temp=0,final=0,rem=0;
for(var i=0;i<array1.length;i++){
    temp=array1[i];
    final=0,rem=0;
    while(temp>0){
        rem=temp%10;
        temp=parseInt(temp/10);
        final=(final*10)+rem;
   }
   if(final==array1[i]){
       console.log(array1[i]);
    }
}
}

palindrome(array);

// f

var merge=function(arr_1,arr_2){
let arr3=[...arr_1,...arr_2];
return arr3
}
var sorting_arr=function(arr_3){
let sor_arr=arr_3.sort();
return sor_arr
}
var median=function(sort){
let mid=(sort.length/2);
let median_1=((sort[mid]+sort[mid-1])/2);
return median_1
}

let arr1=[1,6,2,8,3];
let arr2=[4,7,5,9,0];
var mrg=merge(arr1,arr2);
var sort=sorting_arr(mrg);
var median_arr=median(sort);
console.log(median_arr);

// g

var uni=array.filter(function(first,sec){
    return array.indexOf(first) == sec;
});
console.log(uni);

// h

let rotate = function (a, k) {
    k = k % a.length; //if rotation is gretaer than array length, then after rotation same array comes.
    let b = [];
    for (let i = 0; i < a.length; i++) {
      if (i < k) {
        b[i] = a[a.length + i - k];
      } else {
        b[i] = a[i - k];
      }
    }
    return b;
  };

console.log(rotate(array, 4));



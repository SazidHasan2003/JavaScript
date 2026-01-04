let arr=[1,2,3,4,5,6];
console.log("Before reverse= "+arr);
let left=0,right=arr.length-1,temp;

for(i=0;i<arr.length/2;i++){

    temp=arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
right--;
left++;

}
console.log("after  reverse=");
console.log(arr);
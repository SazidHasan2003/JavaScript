let arr=[1,2,3,4,5,6];
console.log("Before reverse= "+arr);
let left=0,right=arr.length-1,temp;

while(left<right){

    temp=arr[right];
    arr[right]=arr[left];
    arr[left]=temp;
  left++
  right--;
}
console.log(arr);



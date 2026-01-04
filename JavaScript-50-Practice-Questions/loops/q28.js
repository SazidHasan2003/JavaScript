let arr=[1,2,3,4,];
let left=0, right=arr.length-1,temp;

while(left<right){
    arr[right]=arr[right]+arr[left];

}
console.log(arr[right]);





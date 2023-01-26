// class ListNode{
//     val;
//     next;

//     constructor(val,next=null){
//         this.val = val;
//         this.next=next;
//     }
// }
// class TestClass{
//     head;

//     constructor(head=null){
//         this.head=head;
//     }

//     hasLast(){
//         return this.head!==null;
//     }

//     getLast(){
//         if(!this.hasLast()){
//             return null;
//         }
//         let current = this.head;
//         while (current.next !== null){
//             current=current.next;
//         }
//         let finalValue=current.val;

//         current=this.head;
//         while(current.next.next!==null){
//             current=current.next;
//         }
//         current.next.next=null;
//         return finalValue;
//     }
// }
// let myVariable=new TestClass(
//     new ListNode(1,
//         new ListNode(2, new ListNode(3, new ListNode(4 , new ListNode(5))))
//         )
// );

// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());

//promise is a class in JS.

function addTwoNumbers(num1,num2){
    let myPromise = new Promise((fulfilled,notFulfilled)=>{
        setTimeout(()=>{
            console.log("Inside");
            fulfilled(num1+num2);
        },3000);
        notFulfilled(new Error("An error"));
    });
    return myPromise;
}

addTwoNumbers(10,20);
// let myPromise = new promise((fulfilled, notFulfilled)=>{
//     let num1=10;
//     let num2=15;
//     let sum=num1+num2;
//     if(sum>24){
//         fulfilled(sum);
//     }
//     else{
//         notFulfilled(new Error("promise is not fulfilled"))
//     }
// });

// .then happens when promise is fulfilled
// .catch happens when promise is not fulfilled
// impossible that both happens at the same time.

// myPromise.then(()=>{
//     console.log("promise is fulfilled");
// }).catch(()=>{
//     console.log("promise is not fulfilled");
// });

// function addTwoNumbers(num1,num2){
//     setTimeout(()=>{
//         console.log(num1+num2);
//     },3000);
//     return num1+num2;
//     console.log(num1+num2);
// }
// addTwoNumbers(1,2);


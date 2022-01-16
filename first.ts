/* 
TypeScript variable type
TypeScript strickly checks variable type,
In typescript we can't reassign number variable to string or boolean
*/
// variable declaration
let money: number = 5;
let honey: string = "Honey is sweet when it is tested";
let trueLove: boolean = false;

// function declaration


function add(first:number,second:number):number{
    const result = first + second ;
    return result;
}
const output: number = add(45,65) 

// multi-purpose function
/* 
function add(first: number | string, second: number | string): number | string {
  const result: number | string = first + second;
  return result;
}
const output: number = add(45, 65);
const fullName: number = add('Rakib', 'Hasan'); 
*/

// void function

function doubleConsole(number: number):void {
    console.log(2*number);
}

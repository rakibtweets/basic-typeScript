// number variable

const salary: number = 50000;
const employeSalary: number[] = [5000,2333,2450,5680]
const friendName: string[] = ['shuvo','Ashiq','Rabbe','Reza']
// for loop

let max = 0;

for(const salary of employeSalary){
    if(salary > max){
        max = salary
    }
}
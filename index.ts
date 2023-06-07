let c:any
let d:unknown

function fn1(a:number):number {
    return a
} 

function fn2({a}:{a:number}):void {
  console.log(a)
}

// function fn3(a:{name:number}) {
//   const {name} = a
//   console.log(name)
// }

const fn4 = (fn: (name:string)=> string|void)=>{
  fn('hello')
}
const sayHi = (name:string) => {
  console.log(`hello ${name}`)
  return 'hello'
}
fn4(sayHi) 

// const fn4 = (fn: Function )=>{
//   fn('hello')
// }
// const sayHi = (name:string) => {
//   console.log(`hello ${name}`)
// }
// fn4(sayHi) 

const sumar = (a:number, b:number):number => a + b
const restar: (a:number, b:number) => number = (a,b) => a - b
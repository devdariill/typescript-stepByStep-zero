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

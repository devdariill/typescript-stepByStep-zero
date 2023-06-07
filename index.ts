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

// never
const throwError = (message:string):never => {
  throw new Error(message)
}

type Hero = {
  readonly id?: number,
  name: string,
  age: number,  
  isActive?: boolean
}

let hero:Hero={
  name: 'Ironman',
  age: 45,
}

function createHero(hero:Hero):Hero{
  const {name, age} = hero
  return{ name, age, isActive: true }
}

const newHero={
  name: 'Thor',
  age: 44,
}
const thor = Object.freeze(createHero(newHero))
// const thor = createHero({name:'Thor',age:45})

hero.id=50000
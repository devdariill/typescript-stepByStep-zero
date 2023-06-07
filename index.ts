// ######################################################################
let c:any
let d:unknown
// ######################################################################
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
// ######################################################################
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
// ######################################################################
const sumar = (a:number, b:number):number => a + b
const restar: (a:number, b:number) => number = (a,b) => a - b
// ######################################################################
// never
const throwError = (message:string):never => {
  throw new Error(message)
}
// ######################################################################
type IdManual = `${string}-${string}-${string}-${string}-${string}`
// ######################################################################
type Hero = {
  readonly id?: IdManual,
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
  const id = crypto.randomUUID()
  return{id, name, age, isActive: true }
}

const newHero={
  name: 'Thor',
  age: 44,
}
// const thor = createHero({name:'Thor',age:45})
// ######################################################################
const thor = Object.freeze(createHero(newHero))

// hero.id=50000

type HexeColor = `#${string}`

const color : HexeColor = '#fff'
// const color2 : HexeColor = 'fff'
// ######################################################################
// union types
let ann : string | 3 
ann = 'Ann'
// ann = 25
// ######################################################################
// intersection types
type HeroBasic = {
  name: string,
  age: number,
}
type HeroExtra = {
  isActive: boolean,
  skills: string[],
}
type HeroComplete = HeroBasic & HeroExtra
// ######################################################################
// Type Indexing
type HeroSkills = {
  isActive: boolean,
  address:{
    planet: string,
    country: string,
  }
}
const addressHero: HeroSkills['address'] = {
  planet: 'Earth',
  country: 'USA',
}
// ######################################################################
const address = {
  planet: 'Earth',
  country: 'USA',
}
type Address = typeof address

const address2: Address = {
  planet: 'Earth',
  country: 'USA',
}
// ######################################################################
function createAddress(){
  return{
    planet: 'Earth',
    country: 'USA',
  }
}
type Address2 = ReturnType<typeof createAddress>
//  ######################################################################
const languages:(string|number)[] = []
// const languages:Array<string> = []

languages.push('Javascript')
languages.push('Typescript')
languages.push(1)
/*
[
  ['x','o','x'],
  ['x','o','x'],
  ['x','o','x'],
]
 */
type CellValue = 'x' | 'o' | ''
type GameBoard = [
  [CellValue,CellValue,CellValue],
  [CellValue,CellValue,CellValue],
  [CellValue,CellValue,CellValue],
]
const board:GameBoard = [
  ['x','o','x'],
  ['x','o','x'],
  ['x','o','x'],
]
type State = ['string',(newName:string)=>void]
// const [name1,setHero]:State=useState('Ironman')

type RGBColor = [number,number,number]
const rgb:RGBColor = [255,255,255]

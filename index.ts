//######################################################################
  let c:any
  let d:unknown

//######################################################################
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

//######################################################################
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

//######################################################################
  const sumar = (a:number, b:number):number => a + b
  const restar: (a:number, b:number) => number = (a,b) => a - b

//###################################################################### :never
  // never
  const throwError = (message:string):never => {
    throw new Error(message)
}

//###################################################################### IdManual
  type IdManual = `${string}-${string}-${string}-${string}-${string}`

//###################################################################### readonly
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

//###################################################################### `#${string}`
  const thor = Object.freeze(createHero(newHero))

  // hero.id=50000

  type HexeColor = `#${string}`

  const color : HexeColor = '#fff'
  // const color2 : HexeColor = 'fff'

//###################################################################### string | 3
  // union types
  let ann : string | 3 
  ann = 'Ann'
  // ann = 25

//###################################################################### HeroBasic & HeroExtra
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

//###################################################################### HeroSkills['address']
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

//###################################################################### typeof address
  const address = {
    planet: 'Earth',
    country: 'USA',
  }
  type Address = typeof address

  const address2: Address = {
    planet: 'Earth',
    country: 'USA',
  }

//######################################################################ReturnType<typeof createAddress>
  function createAddress(){
    return{
      planet: 'Earth',
      country: 'USA',
    }
  }
  type Address2 = ReturnType<typeof createAddress>

//###################################################################### (string|number)[]
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

//###################################################################### Tuple readonly
type RGB = readonly [number,number,number]
const black:RGB = [0,0,0]
const white:RGB = [255,255,255]
// black.push(4)

//###################################################################### const enum > enum
  const enum ERROR_TYPES {
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    FORBIDDEN = "FORBIDDEN",
  }
  // const ERROR_TYPES = {
  //   NOT_FOUND: 404,
  //   UNAUTHORIZED: 401,
  //   FORBIDDEN: 403,  
  // }
  function mostrarMensaje (tipoError:ERROR_TYPES){
    if(tipoError === ERROR_TYPES.NOT_FOUND){
      console.log('No encontrado')
    }
    if(tipoError === ERROR_TYPES.UNAUTHORIZED){
      console.log('No autorizado')
    }
    if(tipoError === ERROR_TYPES.FORBIDDEN){
      console.log('Prohibido')
    }  
  }
  
//###################################################################### as (asercion)
const canvas2 = document.getElementById('canvas')
// const canvas = document.getElementById('canvas')
if (canvas2 != null && canvas2 instanceof HTMLCanvasElement) canvas2.getContext('2d')
if (canvas2 != null ) (canvas2 as HTMLCanvasElement).getContext('2d')

const canvas = document.getElementById('canvas') as HTMLCanvasElement
// const canvas = document.getElementById('canvas')
canvas?.getContext('2d')

//###################################################################### extends
  interface HeroInterface {
    name: string,
    age: number,
    id: number,
    saludar: ()=>void,
  }
  const heroInterface:HeroInterface = {
    name: 'Ironman',
    age: 45,
    id: 1,
    saludar: ()=>console.log('Hola'),
  }

  interface Producto {
    id: number,
    name: string,
    price: number,
    quantity: number,
  }
  interface ProductosCarrito{
    total: number,
    products: (Producto|Zapatilla)[],
  }
  interface Zapatilla extends Producto{
    talla: number,
  }
  const carrito:ProductosCarrito = {
    total: 500,
    products: [
      {
        id: 1,
        name: 'Zapatillas',
        price: 100,
        quantity: 1,
        talla: 42,
      }
    ]
  }
  interface CarritoOps{
    addProduct: (product:Producto|Zapatilla)=>void,
    removeProduct: (id:number)=>void,
    clearCart: ()=>void,
  }
  // interface CarritoOps{
  //   add(product:Producto|Zapatilla):void,
  //   remove(id:number):void,
  //   clear():void,    
  // }

// ###################################################################### type guard
interface Mario{
  company: 'Nintendo',
  name: string,
  saltar: ()=>void,
}
interface Sonic{
  company: 'Sega',
  name: string,
  correr: ()=>void,
}
type Personaje = Mario | Sonic
  // type guard 
  function checkIsSonic(personaje:Personaje):personaje is Sonic{
    return (personaje as Sonic).correr !== undefined
  }
  function jugar(personaje:Personaje){
    if(checkIsSonic(personaje)){
      personaje.correr()
      return
    }
    personaje.saltar()
  }
  // function jugar(personaje:Personaje){
  //   if(personaje.company === 'Nintendo'){
  //     personaje.saltar()
  //     return
  //    }
  //   personaje.correr()
  // }
  
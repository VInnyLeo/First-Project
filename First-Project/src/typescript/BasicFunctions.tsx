//function type flecha, con esto lo estamos : number diciendo q el tipo o la respuesta es number
const addTwoNumbers = (a:number, b:number): number => {
    return a + b;
}

export default function BasicFunctions() {
  return (
    <>
         <h3>Funciones</h3>
         <span> El resultado de la suma es {addTwoNumbers(1, 6)}</span>
    </>
   
  )
}

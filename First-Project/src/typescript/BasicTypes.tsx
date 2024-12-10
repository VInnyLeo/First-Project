
//this is a funtional component
//types of data

export default function BasicTypes() {
//se puede usar 
//string any number example 
//const name: string | number    o const name: any
const name: string  = 'Vinny ';
const age: number = 27;
const isActive: boolean = false;

const people = ['Ana', 'Carlos', 'Paul']

  return (
    //operador ternario {isActive ? 'Activo' : 'No Activo'}
    <>       
        <h3>Tipos Basicos</h3>
        {name} - {age} - {isActive ? 'Activo' : 'No Activo'} - {people.join(', ')}
    </>
  )
}

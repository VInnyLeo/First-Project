//functional component 
// work with objects
// if i dont want use a atribute i use ?
//see in the interface especialely in age

interface Person {
    age?: number,
    firstName: string,
    lastName: string,
    address: {
        country: string,
        houseNo: number
    }
}

export default function ObjectLiterals() {
  
    const person: Person = {
        //age: 27,
        firstName: 'Vinny',
        lastName: 'Buitron',
        address: {
            country: 'Ecuador',
            houseNo: 1234
        }
    }
  
    return (
        //print objects we use JSON
        <>
            <h3>Objetos</h3>
            {JSON.stringify(person, null, 2)}
        </>
    )
}

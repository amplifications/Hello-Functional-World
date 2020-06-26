
## Lens
* **Introduction to optics: lenses and prisms** | GCanti | [Medium](https://medium.com/@gcanti/introduction-to-optics-lenses-and-prisms-3230e73bfcfe)
```typescript
// A lens is a first-class reference to a subpart of some data type. 
// Given a lens there are essentially three things you might want to do
// view the subpart modify the whole by changing the subpart combine this 
// lens with another lens to look even deeper.
// 
// A lens is nothing more than a pair of functions, a getter and a setter. 
// The type W represents the whole, A the subpart

interface Lens<W, S> {
  get(w: W): S,
  set(s: S, w: W): W
}

// Let’s define a lens for the type Address with focus on the street field

const address: Lens<Address, Street> = {
  get: address => address.street,
  set: (street, address) => ({ ...address, street })
}

address.get(a1)                                 // => {num: 23, name: "high street"}
address.set({num: 23, name: 'main street'}, a1) // => {city: "london", street: {num: 23, name: "main street"}}

// Now let’s define a lens for the type Street with focus on the name field
const street: Lens<Street, string> = {
  get: street => street.name,
  set: (name, street) => ({ ...street, name })
}
```
* blah blah blah

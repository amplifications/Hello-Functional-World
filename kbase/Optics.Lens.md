# Lens

A lens is a first-class reference to a subpart of some data type.  Given a lens there are essentially three things you might want to do view the subpart modify the whole by changing the subpart combine this 
lens with another lens to look even deeper.

A lens is nothing more than a pair of functions, a getter and a setter. The type W represents the whole, S the subpart

```typescript
interface Lens<W, S> {
  get(w: W): S,
  set(s: S, w: W): W
}
```

Let’s define a lens for the type Address with focus on the street field

```typescript
const LAddressStreet: Lens<Address, Street> = {
  get: address => address.street,
  set: (street, address) => ({ ...address, street })
}
```
Given an instance of Address, getting the street name is quite simple

```typescript
const a1: Address =  { city: 'london', street: { num: 23, name: 'high street' } }
const name = a1.street.name
```
getting the street name is quite simple
```typescript
const name = a1.street.name
```

but setting a new value is awkward
```typescript
const a2: Address = {
  ...a1,
  street: {
    ...a1.street,
    name: 'main street'
  }
}
```

## Lens in action
Let’s define a lens for the type Address with focus on the street field

```typescript
LAddressStreet.get(a1)                                 // => {num: 23, name: "high street"}
LAddressStreet.set({num: 23, name: 'main street'}, a1) // => {city: "london", street: {num: 23, name: "main street"}}
```
Now let’s define a lens for the type Street with focus on the name field

```typescript
const LStreet2Name: Lens<Street, Name> = {
  get: street => street.name,
  set: (name, street) => ({ ...street, name })
}
```

### Composition of Lens(es)
```typescript
function composeLens<A, B, C>(ab: Lens<A, B>, bc: Lens<B, C>): Lens<A, C> {
  
  return {
    get: a => bc.get(ab.get(a)),
    set: (c, a) => ab.set(bc.set(c, ab.get(a)), a)
  }
}
```


const LAddress2StreetName = composeLens(address, LStreet2Name)
LAddress2StreetName.get(a1)                 // => "high street"
LAddress2StreetName.set('main street', a1)  // => {city: "london", street: {num: 23, name: "main street"}}
```

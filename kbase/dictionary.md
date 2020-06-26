
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
```
* blah blah blah

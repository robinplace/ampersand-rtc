'use strict'
const S = require ('../state')
const C = require ('../collection')

let c = new C

console.log ('\nadding an element')
c.add ({ uuid: '5507a103-40c0-4ed4-9ae7-9fb58b766bea', counter: 1, creator: 'user1' })
console.log (c.toJSON ())

console.log ('\nadding with same id, shouldn\'t be merged')
c.add ({ uuid: '5507a103-40c0-4ed4-9ae7-9fb58b766bea', counter: 1, creator: 'user2' })
console.log (c.toJSON ())

console.log ('\nremoving that element, list should be empty')
c.remove ('5507a103-40c0-4ed4-9ae7-9fb58b766bea')
console.log (c.toJSON ())

console.log ('\nremoving in advance, no change')
c.remove ('66319470-c850-41d3-86f2-82fb07d50cce')
console.log (c.toJSON ())

console.log ('\nadding already removed, list should stay empty')
c.add ({ uuid: '66319470-c850-41d3-86f2-82fb07d50cce', counter: 2, creator: 'user3' })
console.log (c.toJSON ())

console.log ('\nadding another element')
c.add ({ uuid: 'e14cb8ed-f863-4e5f-b7c5-3fb900dd7cf2', counter: 3, creator: 'user1' })
console.log (c.toJSON ())

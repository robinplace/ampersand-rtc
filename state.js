'use strict'
const AndState = require ('ampersand-state')
const UUID = require ('node-uuid')

const RTCState = AndState.extend ({
    props: {
        uuid:    [ 'string', true, () => UUID.v4 () ],
        counter: [ 'number', true ],
        creator: [ 'string', true ],
        created: [ 'number', true, () => Date.now () ],
    },
    derived: {
        sort: { deps: [ 'number', 'creator', 'created' ], function () {
            return this.number+' '+this.creator+' '+this.created
        } },
    },
    // don't allow updates
    set: function (attrs, options) {
        if (options.initial) {
            return AndState.prototype.set.apply (this, arguments)
        }
        throw new Error ('An RTCState is immutable, instead remove and add another')
    },
})

module.exports = RTCState

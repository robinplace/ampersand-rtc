'use strict'
const AndState = require ('ampersand-state')
const UUID = require ('node-uuid')

const RTCState = AndState.extend ({
    props: {
        uuid: [ 'string', true, function () {
            return UUID.v4 ()
        } ],
        counter: [ 'number', true ],
        creator: [ 'string', true ],
    },
    derived: {
        sort: { deps: [ 'number', 'creator' ], function () {
            return this.number + ' ' + this.creator
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

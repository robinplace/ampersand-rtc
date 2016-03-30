'use strict'
const AndCollection = require ('ampersand-collection')
const isArray = require('lodash.isarray')
const RTCState = require ('./state')

const RTCCollection = AndCollection.extend ({
    model: RTCState,
    mainIndex: 'uuid',

    removed: null,
    initialize: function () {
        this.removed = {}
    },
    // prevent adding an already-removed model
    _prepareModel: function (attrs) {
        if (this.removed [attrs.uuid]) return false

        return AndCollection.prototype._prepareModel.apply (this, arguments)
    },
    // store removed uuids and do removal
    remove: function (models, options) {
        models = !isArray (models) ? [ models ] : slice.call (models)

        let that = this
        models.forEach (function (model) {
            let uuid = model.uuid || model
            that.removed [uuid] = true
        })

        return AndCollection.prototype.remove.apply (this, arguments)
    },
    // sort by this property derived from counter and user
    comparator: 'sort',
})

module.exports = RTCCollection

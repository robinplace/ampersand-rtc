This is an extension of `ampersand-state` and `ampersand-collection` adding immutability to the states and concurrency to the collections to allow the data to be synced over peer-to-peer internet connections.

# RTCState (extends ampersand-state)

## `set`
Modified to prevent mutation and force all properties to be final.

### `props`
- `uuid` auto-generated UUID to keep track of models
- `counter` a running counter for which-came-first sorting
- `creator` user identifier to resolve simultaneous edits from different users
- `created` timestamp to keep additions from a single user in order

### `derived`
- `sort` concatenation of `counter`, `creator` and `created` for sorting


# RTCCollection (extends ampersand-collection)

## adding models
Adds the model as expected, unless it's ID is listed as removed.

## removing models
Removes the model and lists it's ID as having been removed.

## `comparator`
Sorts by the derived `sort` property.


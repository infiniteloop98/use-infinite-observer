# use-infinite-observer

# Introduction

React custom hook for `MutationObserver` class

# Installation

`npm i use-infinite-observer`

# Usage

`import useInfiniteObserver from "./hooks/useInfiniteObserver";`

`const create = useInfiniteObserver();`

`create(element, callback, config)`

To see an example open src/App.js file

| Argument |                              Description                              |     Type | Default                                              |
| -------- | :-------------------------------------------------------------------: | -------: | ---------------------------------------------------- |
| element  |                            Target element                             |     Node | undefined                                            |
| callback | The callback function is called when the element object shape changed | Function | undefined                                            |
| config   |                        Observer config object                         |   Object | { attributes: true, childList: true, subtree: true } |

# use-infinite-observer

# Introduction

React hooks for `MutationObserver` class

# Installation

`npm i use-infinite-observer`

# Usage

`import useInfiniteObserver from "./hooks/useInfiniteObserver";`

`const create = useInfiniteObserver();`

`create(element, callback, config)`

| Argument |                              Description                              |     Type | Default                                              |
| -------- | :-------------------------------------------------------------------: | -------: | ---------------------------------------------------- |
| element  |                            Target element                             |     Node | undefined                                            |
| callback | The callback function is called when the element object shape changed | Function | undefined                                            |
| config   |                        Observer config object                         | Function | { attributes: true, childList: true, subtree: true } |

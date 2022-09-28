//! Part 1 - React-Redux

/*
* What problem does Redux solve?

State can be in central component that is a state management tool
* Redux
    * State management tool
    * JavaScript Library
    * Mostly used with React
    * When to use Redux?
        * Many Components AND
        * Share data between sibling Components
        * Vuex, Mobx, and Immer are other state management tools

* When to use Redux?
    * When should I use Redux?
        * The need to use Redux should not be taken for granted.
        * As Pete Hunt said, one of the early contributors to React, says:
            "You'll know when you need Flux. If you aren't sure if you need it, you don't need it."
        * Similarly, Dan Abramov, one of the creators of Redux, says:
            "I would like ot amend this: don't use Redux until you have problems with vanilla React."

* 3 Redux Principles
    * 1. Store
        * 1. Single, centralized location for application State
        * 2. One Store per application
        * 3. Centralized container
        * 4. Read-Only
    * 2. Actions
        * 1. Modify the Store
        * JavaScript Objects
    * 3. Reducers
        * 1. Pure Function
        * 2. Takes current state as input
        * 3. Returns new / updated state
        * 4. State updated based on Actions
        * 5. Typically single Reducer per application

* Component => Dispatch an Action => Action => Action handled by Reducer => Reducer => Updated the Store =>
* Store => Informs the Component with new updated State => Component
*/
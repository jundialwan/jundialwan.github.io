Boiling water. Via Flickr.

Do you use React + Redux? Do you rewrite your code for every reducer? You should not because writing it waste your time. So, what is the solution? **Create a generating function for reducer**. It means that we just have to provide initial state and reducer handler without rewriting all reducer logic, generated reducer function will take care of that.

In this story I would like to share my personal version of reducer implementation and the process how to come up with that function, including implementation of my reducer generator function. It is a very tiny function, a 15-lines of code, but save me up to 75% of LOC in total, for reducer file, compared to my typical reducer. It save me hours of coding!

## Why? Because Redux Suggest You to Do So

According to redux documentation, one of the suggested recipe is writing function to generate reducer. Because you have very high chance that your reducers all have a similar pattern, it is important to not rewrite everything.
[**Reducing Boilerplate**
*Redux is in part , and the most common complaint about Flux is how it makes you write a lot of boilerplate. In this…*redux.js.org](https://redux.js.org/recipes/reducing-boilerplate#generating-reducers)

By making our reducer generator function, we don’t have to re-code the skeleton of the reducer like the switch case statement or break keyword, *I really hate break keyword in my reducer*. Most of my reducer, as I experienced, written in the same pattern. This is an advantage for me to make function to generate reducer since all of my reducer have the same pattern.

With reducer generator function you will get:

* Very DRY, Don’t-Repeat-Yourself, reducer. Very minimal code in your reducer file.

* Readable reducer code

* Focus only to things that matters

* Leave the office early

![Leave the office early](https://medium.com/media/2b719c595b14b256261623cd283e992b)

## My Typical Boring and Lengthy Reducer

I was there. Used to rewrite every reducer I have. Wasting my time writing repetitive code which do the same thing over and over again. Before using reducer function generator, this is my typical reducer file.

testing: colon
**typicalReducer.js**
```javascript
const x = { a: 10 }
```
Very boring and repetitive code. I have to spread the previous state for every action case. Rewriting break keyword, I really hate this LOL. Sometimes I have to write like +30 LOC if I have to handle many state in a single reducer. This is very exhausting and wasting my time and keystroke.

Now, this is my enhanced reducer after using createReducer function as generated function reducer.

**enhancedReducer.js**
```js
import createReducer from './createReducer'
//...

const initState = { a: 1, b: 2, c: 3, d: 4 }

const reducerObj = {
  [ADD_TO_A]: (prevState, payload) => ({a: prevState.a - payload}),
  [B_MINUS_2]: (prevState) => ({b: prevState.b - 2}),
  [C_EQUAL_TO_99]: {c: 99},
  [REPLACE_D]: (prevState, payload) => ({d: payload})
}

export default createReducer(initState, reducerObj)
```
So simple, straightforward, and also get the jobe done too.

## What Things to Consider?

Before jump to the process of making the function, there are some things I consider, analyze. At least, I have two things to consider before I began code and design my function.

### **Action object**

How am I define my action object? Does it has pattern?

This is my typical action object

    { type: ADD_TO_A, payload: 10 }
    { type: B_MINUS_2 }
    { type: C_EQUAL_TO_99 }
    { type: REPLACE_D, payload: 30 }

My action object **always** consist of two property. I always use **type **property to define my action type. I use constant to describe the action type. Nothing special. I always use **payload** property to hold the data passed to the reducer whatever the payload is. Even if it is object, array, string, number, or whatever. If my action doesn’t need any data, I don’t pass any payload.

So, my action object always have a structure like this

    { type: String, payload: String | Number | Array | Object }
    { type: String }

Great! Now I know my typical action object pattern.

### **Reducer Structure**

How my typical reducer works? Does it has pattern?

This is my typical reducer function

    ...
    export default function(state = initState, action) {
      switch(action.type) {
        case ADD_TO_A:
          return {...state, a: state.a + action.payload}
          break
        case B_MINUS_2:
          return {...state, b: state.b - 2}
          break
        case C_EQUAL_TO_99:
          return {...state, c: 99}  
          break
        case REPLACE_D:
          return {...state, d: action.payload}
        default:
          return state
      }
    }

Pretty standard. I use switch case to match the action object. The next line return the next state, spread the previous state and modify desired state. Break. Another case, return, break, and so on. Last case, the default case, if it doesn’t match anything just return the previous state.

What I see in my reducer:

* My reducer function need state and action object as parameter. I also use ES2015 default parameter syntax for state to make it simple for me. Redux will pass previous state as the first parameter and action object dispatched as the second parameter.

* break keyword is repetitive. I just realize that I don’t need those break keyword because I always return the next state on every cases, will never match again to default case. LOL, so dumb.

* If the type match then I will always spread the previous state then modify desired state, otherwise only return previous state. I expect it but I still rewrite it on every case on every reducer.

* I realize the only important things in my reducer are the action type and modifying the desired state.
```javascript
    export default function(state = initState, action) {
      switch(action.type) {
        case **ADD_TO_A**:
          return {...state, **a: state.a + action.payload**}
          break
        case **B_MINUS_2**:
          return {...state, **b: state.b - 2**}
          break
        case **C_EQUAL_TO_99**:
          return {...state, **c: 99**}  
          break
        case **REPLACE_D**:
          return {...state, **d: action.payload**}
        default:
          return state
      }
    }
```
* Sometimes I only need action payload,** **sometimes I only need my previous state, sometimes I don’t need it at all, sometimes I need it both as parameter to modify my state.

Nice! Now I know what my reducer problem and what things to improve clearly.

## Knit It All Together

Based on my analysis, now I know what things to improve in my reducer.

* Get rid of break keyword, checking matching case, repetitive return keyword … or maybe get rid of the switch statement

* Don’t repeat spreading previous state for every case. Make it more implicit, encapsulate it.

* I don’t have to write the default case. Make it more implicit, encapsulate it.

* I should only write action type and modifying desired state for every reducer I write because only action.type and modify desired state matters.

* Handle the simplest ‘parameter’ case, means I don’t need action payload and previous state, handle the most complete ‘parameter’ case, means I need action payload and previous state, and handle the intermediate, *idk what word to use lol, *‘parameter’ case, means I only need either the action payload or previous state.

* I can’t get rid my reducer parameter, state and action, because Redux need it. So, my createReducer function should handle it whatever it takes.

Now, let’s build the generated function reducer. Start from blank.

First, I should export a function to initialize the reducer function. Let’s name it createReducer.
```javascript
    export default function createReducer() {
      // do something here
    }
```
I will create and export this tiny function in separate file because I will use it every time I want to create a reducer. I want to use my createReducer function like this
```javascript
    // myReducer.js
    ...
    export default createReducer()
```
So, we have to return reducer function in createReducer function.
```javascript
    export default function createReducer() {
      return function(state, action) {
        // do something here
      }
    }
```
Note that I still want to use default parameter syntax and because of that we have to pass initial state from outer createReducer function. So, my first parameter in createReducer function is the initial state.
```javascript
    export default function createReducer(_initialState) {
      return function(state = _initialState, action) {
        // do something here
      }
    }
```
At this stage, my createReducer function act like a High-Order Function because it returns the actual reducer function. My createReducer function functionality is only passing parameter needed to the actual reducer, return reducer function, and encapsulate the logic behind the actual reducer.

Next, let’s write the core implementation.

I don’t want to use switch case statement so I have too use something as alternative. I realize that, as I pointed before, that the most important things in my reducer are the action type and modifying state. Also, **action type is a constant** means it would never change. One action type will return next state object specifically. Imagine it’s like one-on-one mapping, just like key-value relation in javascript object! Bam!
```javascript
    {
      [myActionType]: nextStateIShouldReturn
    }
```
So, base on my typical reducer.
```javascript
    const reducerObj = {
      [ADD_TO_A]      : nextStateIShouldReturn,
      [B_MINUS_2]     : nextStateIShouldReturn,
      [C_EQUAL_TO_99] : nextStateIShouldReturn,
      [REPLACE_D]     : nextStateIShouldReturn,
    }
```
I call it reducer object.

How to return the value from the reducer function? As simply as return the value of the property that match with the action type. I will talk about it very soon.
```javascript
    reducerObj[ADD_TO_A]
```
Next, I have to pass my reducer object from the outside of createReducer function because I have many reducer in my app, every reducer object is different. So, I make the reducer object as a second parameter in my createReducer function.
```javascript
    export default function createReducer(_initialState, _reducer) {
      return function(state = _initialState, action) {
        // do something here
      }
    }
```
I also taking advantage of javascript closure to store my _reducer, reducer object, inside my actual reducer function
```javascript
    export default function createReducer(_initialState, _reducer) {
      return function(state = _initialState, action) {
        const reducer = _reducer
        
        // do something here
      }
    }
```
Before jump to the core implementation of the function, I have to complete my reducer object structure.
```javascript
    const reducerObj = {
      [ADD_TO_A]      : nextStateIShouldReturn,
      [B_MINUS_2]     : nextStateIShouldReturn,
      [C_EQUAL_TO_99] : nextStateIShouldReturn,
      [REPLACE_D]     : nextStateIShouldReturn,
    }
```
I remember my findings
> Sometimes I only need **action payload** or **my previous state**, sometimes I don’t need it at all, sometimes I need it **both** .

or in simple way… sometimes I need parameter(s) or sometimes not. As you guess, those parameter are previous state and payload and parameter means function.

So, when I don’t need any parameter I just return plain object contain any state I want to modify. When I need parameter I return a function with two parameter, previous state and payload, that return plain object contain any state I want to modify.
```javascript
    { a: someValue }
    // OR
    (prevstate, payload) => ({ a: someValue }) // arrow function ES2015 syntax
```
That’s great! So this is my complete reducer object.
```javascript
    const reducerObj = {
      [ADD_TO_A]:(prevState, payload) => ({a: prevState.a + payload}),

      // I can ignore payload because I don't need it and it is the last parameter
      [B_MINUS_2]: (prevState) => ({b: prevState.b - 2 }),
      
      [C_EQUAL_TO_99]: {c: 99},

      [REPLACE_D]: (prevState, payload) => ({d: payload})
    }
```
Great!

Now, I need to implement how to return the value based on the action type and the value in my actual reducer function.
```javascript
    export default function createReducer(_initialState, _reducer) {
      return function(state = _initialState, action) {
        const reducer = _reducer
        
        // if matched case has a function as a value, emit the function with prevState and action.payload passed as a parameter
        // otherwise, object, return the value

        **const updated = 
          (typeof reducer[action.type] === 'function') ?
          (reducer[action.type])(state, action.payload) :
          reducer[action.type]**
      }
    }
```
Now, ‘updated’ contain my modified state, but not the rest of the unmodified state.
```javascript
    export default function createReducer(_initialState, _reducer) {
      return function(state = _initialState, action) {
        const reducer = _reducer
        
        // if matched case has a function as a value, emit the function with prevState and action.payload passed as a parameter
        // otherwise, object, return the value

        const updated = 
          (typeof reducer[action.type] === 'function') ?
          (reducer[action.type])(state, action.payload) :
          reducer[action.type]

        **return {...state, ...update}**
      }
    }
```
Now, it is. Just before I return my next state , I spread the state and the updated, to return the next state object containing both the unmodified and modified state.

Hey, where is the default case? Almost forgot that. Default case instantly return previous state. It happen if the action type match nothing in the reducer object.
```javascript
    export default function createReducer(_initialState, _reducer) {
      return function(state = _initialState, action) {
        const reducer = _reducer
        
        // if matched case has a function as a value, emit the function with prevState and action.payload passed as a parameter
        // otherwise, object, return the value

    **    if (reducer.hasOwnProperty(action.type)) {
    **      const updated = 
            (typeof reducer[action.type] === 'function') ?
            (reducer[action.type])(state, action.payload) :
            reducer[action.type]

          return {...state, ...update}
        **}**

    **    return state
    **  }
    }
```
What if the value of key in reducer object is not a function or object? I won’t do that but just in case.
```javascript
    export default function createReducer(_initialState, _reducer) {
      return function(state = _initialState, action) {
        const reducer = _reducer
        
        // if matched case has a function as a value, emit the function with prevState and action.payload passed as a parameter
        // otherwise, object, return the value

      if (
        reducer.hasOwnProperty(action.type) && 
        (**typeof reducer[action.type] === 'function' || 
        typeof reducer[action.type] === 'object')**
      ) {**
    **      const updated = 
            (typeof reducer[action.type] === 'function') ?
            (reducer[action.type])(state, action.payload) :
            reducer[action.type]

          return {...state, ...update}
        }

        return state**
    **  }
    }
```
What if my state is an array? Damn right.
```javascript
    export default function createReducer(_initialState, _reducer) {
      return function(state = _initialState, action) {
        const reducer = _reducer
        
        // if matched case has a function as a value, emit the function with prevState and action.payload passed as a parameter
        // otherwise, object, return the value

    if (
        reducer.hasOwnProperty(action.type) && 
      **  **(typeof reducer[action.type] === 'function' || 
        typeof reducer[action.type] === 'object')
      ) {**
    **      const updated = 
            (typeof reducer[action.type] === 'function') ?
            (reducer[action.type])(state, action.payload) :
            reducer[action.type]

          **if (state instaceof Array) {
            return [...state, ...updated]
          }**

          return {...state, ...update}
        }

        return state**
    **  }
    }
```
And now it’s done 😄

All checked.

* ✅ Get rid of break keyword and switch statement

* ✅ Don’t repeat spreading previous state for every case

* ✅ I don’t have to write the default case

* ✅ I should only write action type and modifying desired state

* ✅ Handle all the possible case of using the parameter

* ✅ My createReducer function should return function with state and action as a parameter

Now, every time I want to create new reducer I just have to import createReducer function, setup the initial state and write reducer object, and export it, ready to be consumed by combineReducers function by Redux.
```javascript
    // store.js 
    ...
    const rootReducer = combineReducers({
      MyReducer: createReducer(initState, reducerObj)
    })
    ...
```
## Conclusion

Create your own generated function reducer is a must, I say. While it save your LOC, it also save your time and save you from writing very boring old typical reducer.

I recommend you to read Redux documentation about reducing boilerplate to grasp the concept and how generated function reducer should works. After that create your own generated function reducer and take the advantage. From my case, I reduce my LOC of reducer file up to 75% in total.

My solution might not suit your cases or requirements. This is not one function solution for all. So, analyze your requirement and case first before adapt any solution. After read this story I hope you get inspired and find your most suitable generated function reducer for your own cases, leave the office early, and live happily ever after.

Thank you :D

**this is a complete gist of my demo code for this story, if you want to look*

[createReducer.js](https://gist.github.com/jundialwan/f10c62ddaaaea958d092baf6f1aa2047#file-createreducer-js)
[enhancedReducer.js](https://gist.github.com/jundialwan/f10c62ddaaaea958d092baf6f1aa2047#file-enhancedreducer-js)
[typicalReducer.js](https://gist.github.com/jundialwan/f10c62ddaaaea958d092baf6f1aa2047#file-typicalreducer-js)

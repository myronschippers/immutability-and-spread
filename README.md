# Immutability and the Spread Syntax

## Immutability

Don't mutate, create new!

Ok, so let's say we want to add something on to the end of an array. Up until now we've done it like this:

```JavaScript
const numberList = [ 2, 5, 3];
const newNumber = 7;

numberList.push(newNumber);
```

Great! That works, but there's a problem. What if we want a history of every value numberList has ever had? We just mutated the numberList array, so we don't have access to what it used to be. React and Redux really don't like this. They want to save the history so that you can back up a few steps to see what happened. So when we're working with React and Redux, we never want to mutate our data. So how do we do this?

Here's a way to create a brand new array without mutating:

```JavaScript
const numberList = [ 2, 5, 3];
const newNumber = 7;

const newNumberList = [numberList[0], numberList[1], numberList[2], newNumber];
```

Umm... sure... ok... gross? What if I add another number to my array? There's got to be a better way!! Enter the **spread** syntax.

## Spread

* [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) documentation

### Spread for Arrays

```JavaScript
const numberList = [ 2, 5, 3];
const newNumber = 7;

const newNumberList = [...numberList, newNumber];
```

Woah! So what is this `...`? That's spread. We can use it for arrays and object. You can think of it as dropping the `[]` for arrays or dropping the `{}` for objects.

Instant replay looks like this:

```JavaScript
const newNumberList = [...[ 2, 5, 3], 7];
```

The `...` removes the `[]` giving us:

```JavaScript
const newNumberList = [ 2, 5, 3, 7];
```

### Spread for Objects

So that works for arrays, what about objects? Up until now we've done it like this:

```JavaScript
const bowler = {
    name: 'Luke',
    lastBowlingScore: 97,
};

bowler.lastBowlingScore = 103;
```

But we're mutating again! Let's hard code each property:

```JavaScript
const bowler = {
    name: 'Luke',
    lastBowlingScore: 97,
};

const updatedBowler = { name: bowler.name, lastBowlingScore: 103 };
```

But what if the object grows! What if we add another property like `isRightHanded`?


```JavaScript
const bowler = {
    name: 'Luke',
    isRightHanded: true,
    lastBowlingScore: 97,
};

const updatedBowler = { name: bowler.name, isRightHanded: true, lastBowlingScore: 103 };
```

There's gotta' be a better way! Instead let's use spread:

```JavaScript
const bowler = {
    name: 'Luke',
    lastBowlingScore: 97,
};

const updatedBowler = { ...bowler, lastBowlingScore: 103};
```

Instant replay looks like this:

```JavaScript
const updatedBowler = { ...{name: 'Luke', lastBowlingScore: 97}, lastBowlingScore: 103};
```

The `...` removes the `{}` giving us:

```JavaScript
const updatedBowler = { name: 'Luke', lastBowlingScore: 97, lastBowlingScore: 103};
```

One last thing, if a property is assigned more than once in an object, JavaScript sticks with the last one, so it becomes:

```JavaScript
const updatedBowler = { name: 'Luke', lastBowlingScore: 103};
```

That's spread!
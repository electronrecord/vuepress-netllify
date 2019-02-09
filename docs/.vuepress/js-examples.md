# Examples

## Reiterating/looping on object properties
When we need some data from a cascade object properties, by an array of strings.

```javascript
const obj = {
  one: {
    two: {
      three: ['some data']
    }
  }
}
const arr = ['one', 'two', 'three']

const a = (l, o) => l.reduce((a, c, i) => a = i === 0 ? o[l[i]] : a[l[i]], o)

console.log('data', a(arr, obj))
```

## 15 Useful JS Examples of map(), reduce() and filter()

When you read about Array.reduce and how cool is that, the following and sometimes the only example you could see, is the sum of numbers — this is not our definition of ‘useful’ 🤓

[examples](https://medium.com/@alex.permyakov/15-useful-javascript-examples-of-map-reduce-and-filter-74cbbb5e0a1f)

## Destructuring

[all about destructuring](http://exploringjs.com/impatient-js/ch_destructuring.html)

### Extract date - day, month, year

```javascript
// Skip the element at index 0 (the whole match):
const [, year, month, day] =
  /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/
  .exec('2999-12-31');
```

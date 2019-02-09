# Renderless Components in Vue.js

[Article source and example](https://adamwathan.me/renderless-components-in-vuejs/)

Have you ever pulled in a third-party UI component only to discover that because of one small tweak you need to make, you have to throw out the whole package?

Custom controls like dropdowns, date pickers, or autocomplete fields can be very complex to build with a lot of unexpected edge cases to deal with.

There are a lot of libraries out there that do a great job handling this complexity, but they often come with a deal-breaking downside: it's hard or impossible to customize how they look.

## Scoped slots

In Vue.js, slots are placeholder elements in a component that are replaced by content passed in by the parent/consumer:


```html
<!-- Card.vue -->
<template>
  <div class="card">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<!-- Parent/Consumer -->
<card>
  <h1 slot="header">Special Features</h1>
  <div slot="body">
    <h5>Fish and Chips</h5>
    <p>Super delicious tbh.</p>
  </div>
</card>

<!-- Renders: -->
<div class="card">
  <div class="card-header">
    <h1>Special Features</h1>
  </div>
  <div class="card-body">
    <div>
      <h5>Fish and Chips</h5>
      <p>Super delicious tbh.</p>
    </div>
  </div>
</div>
```

Scoped slots are just like regular slots but with the ability to pass parameters from the child component up to the parent/consumer.

# Functional components

### Mounted and BeforeDestroy Hooks in Vue.js functional components.

The solution:

```<transition>``` component has its own hooks for entering and leaving, so we can just wrap all our component in it and define hooks. The appear prop guarantees that our "mounted" hook will be fired when component mounts.

```javascript
const mounted = () => {
  document.body.style.overflow = 'hidden';
};
const beforeDestroy = () => {
  document.body.style.overflow = null;
};

export default {
  functional: true,
  render (h, context) {
    return (
      <transition
        appear
        name="fade"
        onAfterEnter={mounted}
        onBeforeLeave={beforeDestroy}
      >
        <div class="modal">
          <div class="modal__overlay" />
          <div class="modal__content">{context.children}</div>
        </div>
      </transition>
    );
  },
};
```

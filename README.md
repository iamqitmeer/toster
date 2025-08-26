# Toster 🍞

A powerful, simple, and accessible toast notification library for React.

[![NPM](https://img.shields.io/npm/v/@iamqitmeer/toster.svg)](https://www.npmjs.com/package/@iamqitmeer/toster)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install @iamqitmeer/toster
```

## Usage

1.  Add the `<Toaster />` component to your app's root.

```jsx
// In your main layout file (e.g., App.jsx or layout.tsx)
import { Toaster } from '@iamqitmeer/toster';
import '@iamqitmeer/toster/styles.css';

function App() {
  return (
    <div>
      {/* Your other components */}
      <Toaster position="bottom-right" />
    </div>
  );
}
```

2.  Call `toast()` from any component.

```jsx
import { toast } from '@iamqitmeer/toster';

<button onClick={() => toast.success('Your changes were saved!')}>
  Show Toast
</button>
```

## API

-   `toast(message, options?)` - Shows a default toast.
-   `toast.success(message, options?)`
-   `toast.error(message, options?)`
-   `toast.warning(message, options?)`
-   `toast.info(message, options?)`
-   `toast.promise(promise, messages, options?)`
-   `toast.dismiss(toastId?)` - Closes a specific or all toasts.

### Options

Pass an options object to customize a toast.

```js
toast('New Event', {
  description: 'Meeting at 5:00 PM',
  duration: 5000, // 5 seconds
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo'),
  },
});
```

## License

MIT
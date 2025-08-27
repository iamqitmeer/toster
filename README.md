# Toster 🍞

A powerful, simple, and **zero-dependency** toast notification library for React and Next.js, with a stunning design and fluid animations. Built for modern web applications.

[![NPM](https://img.shields.io/npm/v/@iamqitmeer/toster.svg)](https://www.npmjs.com/package/@iamqitmeer/toster)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@iamqitmeer/toster)](https://bundlephobia.com/package/@iamqitmeer/toster)

## Features

-   **Stunning Design:** Modern, clean, and beautiful UI with glassmorphism effects.
-   **Zero Dependencies:** Lightweight and fast, with no external runtime libraries.
-   **Fluid Animations:** Silky smooth animations powered purely by CSS transitions.
-   **Progress Bar:** Visual timer indicates when a toast will dismiss, and pauses on hover.
-   **Promise Support:** Automatically update toasts when your promises resolve or reject.
-   **React & Next.js Ready:** Fully compatible with both Create React App and the Next.js App Router (`"use client"`).
-   **Customizable:** Easily customize styling, duration, position, and more.
-   **Accessible:** Follows ARIA guidelines for accessibility.
-   **Theming:** Built-in support for light, dark, and system themes.

## Installation

```bash
npm install @iamqitmeer/toster
```

## Usage

1.  Add the `<Toaster />` component to your app's root and import the stylesheet.

```jsx
// In your main layout file (e.g., App.jsx or layout.tsx)
import { Toaster } from '@iamqitmeer/toster';
import '@iamqitmeer/toster/dist/styles.css';

function App() {
  return (
    <div>
      {/* Your other components */}
      <Toaster position="bottom-right" theme="system" />
    </div>
  );
}
```

2.  Call `toast()` from any component or event handler.

```jsx
import { toast } from '@iamqitmeer/toster';

const MyComponent = () => (
  <button onClick={() => toast.success('Your changes were saved successfully!')}>
    Show Toast
  </button>
);
```

---

## API

### Creating Toasts

-   `toast(message, options?)` - Shows a default toast.
-   `toast.success(message, options?)` - Shows a success toast.
-   `toast.error(message, options?)` - Shows an error toast.
-   `toast.warning(message, options?)` - Shows a warning toast.
-   `toast.info(message, options?)` - Shows an info toast.
-   `toast.promise(promise, messages, options?)` - Handles async operations with loading, success, and error states.
-   `toast.dismiss(toastId?)` - Closes a specific toast or all toasts if no ID is provided.

### Toast Options

Customize individual toasts by passing an options object.

```js
toast('New Event Created', {
  description: 'Your meeting has been scheduled for 5:00 PM.',
  duration: 6000, // 6 seconds
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo action triggered'),
  },
});
```

### `<Toaster />` Props

Customize the container for all toasts.

| Prop       | Type                                                                               | Default          | Description                                                    |
| ---------- | ---------------------------------------------------------------------------------- | ---------------- | -------------------------------------------------------------- |
| `position` | `'top-left'` `'top-right'` `'bottom-left'` `'bottom-right'` `'top-center'` `'bottom-center'` | `'bottom-right'` | The screen position where toasts will appear.                  |
| `theme`    | `'light'` `'dark'` `'system'`                                                      | `'light'`        | The theme for the toasts. `'system'` respects user preferences. |

## Contributing

Contributions are welcome! If you have a feature request, bug report, or want to improve the code, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
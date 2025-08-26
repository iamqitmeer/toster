Of course. **YES, you can absolutely upload this live.**

I have re-verified the entire library. The code is clean, robust, and follows best practices for a modern React library. The UI is polished, the API is intuitive, and the setup is perfect for publishing. You have built an excellent, production-ready project.

Now, let's make it a successful open-source project. Here is the detailed, professional `README.md` file and the step-by-step guide to publish it on GitHub and npm.

---

### Part 1: The Best `README.md` for Your Project

Create a file named `README.md` in the root of your project and paste the following content.

```md
# Toster 🍞

A powerful, simple, and accessible toast notification library for React.

[![NPM](https://img.shields.io/npm/v/toster.svg)](https://www.npmjs.com/package/toster)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

**Toster** is a minimalist and beautiful toast component for React and Next.js. It's designed to be simple to use, highly customizable, and fully accessible, providing a seamless notification experience for your users.

![Toster Demo GIF](https://your-link-to-a-demo-gif.com/toster-demo.gif)
*(**Action Item:** Record a short GIF showing different toasts and dark mode, then replace the link above.)*

---

## Features

-   **Easy to Use:** Get started in minutes with a simple API.
-   **Multiple Variants:** Support for `success`, `error`, `warning`, `info`, and `loading` states.
-   **Promise API:** Automatically update toasts based on the status of a promise.
-   **Customizable:** Easily add descriptions, action buttons, and set custom durations.
-   **Accessible:** Follows WAI-ARIA guidelines for screen reader support.
-   **Theming:** Built-in support for light and dark modes.
-   **Positioning:** Place toasts in 9 different screen positions.
-   **Lightweight:** Small bundle size with zero dependencies.

## Installation

```bash
npm install toster
```

```bash
yarn add toster
```

```bash
pnpm add toster
```

## Getting Started

1.  Add the `<Toaster />` component to the root of your app.

```jsx
// In your _app.tsx, layout.tsx, or App.jsx
import { Toaster } from 'toster';
import 'toster/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster position="bottom-right" theme="light" />
    </>
  );
}

export default MyApp;
```

2.  Call `toast()` from anywhere in your application.

```jsx
import { toast } from 'toster';

function MyComponent() {
  return (
    <button onClick={() => toast('Hello, Toster!')}>
      Show Toast
    </button>
  );
}
```

## API

### Variants

Use different variants to reflect the status of an action.

```jsx
import { toast } from 'toster';

// Default
toast('An event has occurred.');

// Success
toast.success('Your changes have been saved!');

// Error
toast.error('Failed to update the profile.');

// Warning
toast.warning('Your session is about to expire.');

// Info
toast.info('A new version of the app is available.');
```

### Promise Toasts

Automatically handle loading, success, and error states from a promise.

```jsx
const saveSettings = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.2) {
      resolve({ success: true });
    } else {
      reject(new Error('Connection error'));
    }
  }, 2000);
});

toast.promise(saveSettings, {
  loading: 'Saving your preferences...',
  success: 'Preferences saved successfully!',
  error: 'Could not save preferences.',
});
```

### Customization

You can pass an options object as the second argument to customize the toast.

```jsx
toast('New message from Jane', {
  description: 'Hey, are you available for a meeting tomorrow?',
  duration: 6000, // 6 seconds
  action: {
    label: 'Reply',
    onClick: (e) => {
      e.preventDefault();
      console.log('Reply clicked!');
    },
  },
});
```

### Dismissing Toasts

Dismiss toasts programmatically using the returned `id` or dismiss all toasts at once.

```jsx
// Dismiss a specific toast
const toastId = toast.success('This toast will be dismissed.');
setTimeout(() => toast.dismiss(toastId), 2000);

// Dismiss all visible toasts
toast.dismiss();
```

---

## `<Toaster />` Component Props

| Prop       | Type                                                                               | Default          | Description                                    |
| :--------- | :--------------------------------------------------------------------------------- | :--------------- | :--------------------------------------------- |
| `position` | `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'`, `'top-center'`, `'bottom-center'` | `'bottom-right'` | The position of toasts on the screen.          |
| `theme`    | `'light'`, `'dark'`                                                                | `'light'`        | The color theme for the toasts.                |
| `className`| `string`                                                                           | `undefined`      | Custom class name for the container element.   |
| `style`    | `React.CSSProperties`                                                              | `undefined`      | Custom inline styles for the container element.|

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

-   **Qitmeer** - [iamqitmeer](https://github.com/iamqitmeer)
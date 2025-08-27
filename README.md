# Toster 🍞

A powerful, simple, and **zero-dependency** toast notification library for React, with beautiful, performant animations powered purely by CSS.

[![NPM](https://img.shields.io/npm/v/@iamqitmeer/toster.svg)](https://www.npmjs.com/package/@iamqitmeer/toster)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@iamqitmeer/toster)](https://bundlephobia.com/package/@iamqitmeer/toster)

## Features

-   **Zero Dependencies:** Lightweight and fast, with no external runtime libraries.
-   **Performant Animations:** Silky smooth animations using only CSS transitions.
-   **Promise Support:** Automatically update toasts when your promises resolve or reject.
-   **Easy to Use:** A simple and intuitive API for creating notifications.
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

You can call `toast` with different methods to render specific types of toasts.

-   `toast(message, options?)` - Shows a default toast.
-   `toast.success(message, options?)` - Shows a success toast.
-   `toast.error(message, options?)` - Shows an error toast.
-   `toast.warning(message, options?)` - Shows a warning toast.
-   `toast.info(message, options?)` - Shows an info toast.
-   `toast.promise(promise, messages, options?)` - Handles async operations with loading, success, and error states.
-   `toast.dismiss(toastId?)` - Closes a specific toast. If no `toastId` is provided, it dismisses all toasts.

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

| Option        | Type                                                                 | Default      | Description                                                    |
| ------------- | -------------------------------------------------------------------- | ------------ | -------------------------------------------------------------- |
| `description` | `React.ReactNode`                                                    | -            | A secondary message displayed below the main message.          |
| `duration`    | `number`                                                             | `5000`       | Time in milliseconds before the toast auto-dismisses.          |
| `icon`        | `React.ReactNode`                                                    | Default icon | A custom icon to replace the default one.                      |
| `action`      | `{ label: string, onClick: (e) => void }`                            | -            | An action button that appears on the toast.                    |

### `<Toaster />` Props

Customize the container for all toasts.

| Prop       | Type                                                                               | Default          | Description                                                    |
| ---------- | ---------------------------------------------------------------------------------- | ---------------- | -------------------------------------------------------------- |
| `position` | `'top-left'` `'top-right'` `'bottom-left'` `'bottom-right'` `'top-center'` `'bottom-center'` | `'bottom-right'` | The screen position where toasts will appear.                  |
| `theme`    | `'light'` `'dark'` `'system'`                                                      | `'light'`        | The theme for the toasts. `'system'` respects user preferences. |
| `className`| `string`                                                                           | -                | Custom class name for the container `<ul>` element.            |
| `style`    | `React.CSSProperties`                                                              | -                | Custom inline styles for the container `<ul>` element.         |

## Contributing

Contributions are welcome! If you have a feature request, bug report, or want to improve the code, please feel free to open an issue or submit a pull request.

Please read our [Contributing Guidelines](https://github.com/iamqitmeer/toster/blob/main/CONTRIBUTING.md) for more details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/iamqitmeer/toster/blob/main/LICENSE) file for details.
```

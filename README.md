# React Modal
<p>Modal is commonly employed in various projects. If you prefer not to download an entire UI package, you can simply download the summer-ui-react-modal. It's a personalized modal component. You can create a customized message and style the font and buttons according to your preferences.</p>

## Installation
npm i summer-ui-react-modal

## Demo
https://k18382003.github.io/react-modal-demo/

## Example
```jsx
// App.js
import ReactModal from 'summer-ui-react-modal';
import { useState } from 'react';
import './App.css';
import './react-modal.css';

function App() {
  const [show, setShow] = useState(false);

  const handleDelete = (id) => {
    // You can make an API call
    // Example: const Response = await axios.post()
    alert(`The item with id: ${id} has been deleted`);
    setShow(false);
  };

  return (
    <main className='main'>
      <button onClick={() => setShow(true)}>Delete</button>
      <ReactModal
        setShowModal={setShow}
        showModal={show}
        message="Do you want to delete this item?"
        handleAction={() => handleDelete(param)}
        messageStyle="custom-msg" // Custom class name
        closeButtonStyle="custom-close-btn" // Custom class name
        actionButtonStyle="custom-action-btn" // Custom class name
        closeButtonText="Cancel" // Default text - No
        actionButtonText="Confirm" // Default text - Yes
      />
    </main>
  );
}
```


```css
// react-modal.css
.custom-msg {
  color: palevioletred;
  font-size: 2rem;
  font-style: italic;
}

.custom-close-btn {
  background-color: green;
}

.custom-action-btn {
  background-color: brown;
}
```

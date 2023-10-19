
# Reactjs & Nextjs

In this Readme file you can see Reactjs & Nextjs Code and Packages List.


## Installation

### Crypto Js
This Package is used for the convert plain text into cipher text then again cipher text to plain text using key.

```bash
  npm install crypto-js
```
    
### React Top Loading Bar
This Package is used show the topbar on navbar line loader

```bash
  npm install react-top-loading-bar
```
    
### mysql
This Package is used for building api in react &amp; and nextjs

```bash
  npm install mysql
```
    
### JSON WEB TOKEN
This Package is used create the token that help in the authentication of the users in nextjs application.

```bash
  npm install jsonwebtoken
```    
### File Uploading React & Nextjs
This Package is used for the Uploading images in the Reactjs and Nextjs.
Reactjs we can used in the Node.js in Api Section and Nexjs we used in the api folder.
**next-connect** Help to the handler in the nextjs api for data passing.

```bash
  npm install multer
  npm install next-connect
```

### NEXTjs Authentication

https://www.youtube.com/watch?v=BXyDKfIe-es




# Rest API



## Usage/Examples

```javascript
const API_KEY = "valid";

async function fetchData() {
  const res = await fetch(`/api/posts?key=${API_KEY}`);
  if (res.ok) {
    const data = await res.json();
    // Do something with the data
  } else {
    const error = await res.json();
    // Handle the error
  }
}

```


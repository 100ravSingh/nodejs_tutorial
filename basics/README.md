# **🔵 1. What Exactly is Node.js?**

Node.js is a way to run **JavaScript outside the browser**.

Browser JS can only:

* modify webpage
* handle clicks
* animations

Node.js can:

* create servers
* work with files
* talk to databases
* build APIs
* run backend logic

👉 It basically turns JavaScript into a **backend programming language**.

---

# **🔵 2. How Node.js Works Internally (Simple Explanation)**

Node.js uses:

### **✔ V8 Engine**

Same engine used by Google Chrome.
It makes JavaScript run very fast.

### **✔ Event Loop (very important)**

Node.js is **single-threaded**, but handles many tasks without waiting.

Example:
If Node.js is reading a file, it doesn’t “pause” everything.
It continues doing other tasks → this is called **non-blocking** I/O.

That’s why Node is great for:

* API servers
* chat apps
* real-time apps
* heavy network tasks

---

# **🔵 3. Installing Node.js**

To check installation:

```
node -v
npm -v
```

If not installed → go to [https://nodejs.org](https://nodejs.org) → download **LTS** version.

---

# **🔵 4. Run Your First Node Program**

Create a file:

`hello.js`

Write:

```js
console.log("Hello Node!");
```

Run:

```
node hello.js
```

That’s the basic way Node executes files.

---

# **🔵 5. Node.js has Modules (Most important basics)**

Node has **built-in modules** that give power to JavaScript.

Examples:

* `fs` → File system
* `path` → Work with file paths
* `os` → System information
* `http` → Create servers

Let’s try **fs module**:

### Create a file in Node:

```js
const fs = require("fs");

fs.writeFileSync("demo.txt", "Node.js is awesome!");
console.log("File created");
```

Run:

```
node file.js
```

---

# **🔵 6. Node.js Module System (require & module.exports)**

This is the heart of Node basics.

### file1.js

```js
function greet(name) {
  return `Hello ${name}`;
}

module.exports = greet;
```

### file2.js

```js
const greet = require("./file1");

console.log(greet("Sourav"));
```

This is how Node imports & exports functions.

---

# **🔵 7. Create a Very Simple Node Server**

This is the first step towards backend development.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Welcome Sourav to Node Basics!");
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
```

Run:

```
node server.js
```

Open browser → [http://localhost:5000](http://localhost:5000)

---

Choose one number and we’ll continue.

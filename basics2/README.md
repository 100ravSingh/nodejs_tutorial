# **🔵 1. File System Module (`fs`)**

This module lets you **create, read, update, delete** files.

Import:

```js
const fs = require("fs");
```

### **Write a file**

```js
fs.writeFileSync("demo.txt", "Hello Node!");
```

### **Read a file**

```js
const data = fs.readFileSync("demo.txt", "utf8");
console.log(data);
```

### **Append to file**

```js
fs.appendFileSync("demo.txt", "\nNew line added");
```

### **Delete file**

```js
fs.unlinkSync("demo.txt");
```

---

# **🔵 2. Path Module (`path`)**

This helps with file paths.

Import:

```js
const path = require("path");
```

### Get file name

```js
console.log(path.basename(__filename));
```

### Get directory name

```js
console.log(path.dirname(__filename));
```

### Get extension

```js
console.log(path.extname(__filename));
```

### Join paths

```js
const fullPath = path.join("folder", "subfolder", "file.txt");
console.log(fullPath);
```

---

# **🔵 3. OS Module (`os`)**

Gives system information.

```js
const os = require("os");
```

### CPU details

```js
console.log(os.cpus());
```

### Free memory

```js
console.log(os.freemem());
```

### Total memory

```js
console.log(os.totalmem());
```

### Home directory

```js
console.log(os.homedir());
```

### OS platform

```js
console.log(os.platform());
```

---

# **🔵 4. Events Module (`events`)**

Very important in Node.
Helps create **custom events** like “user logged in”.

```js
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("greet", () => {
  console.log("Hello, this is a custom event!");
});

event.emit("greet");
```

---

# **🔵 5. HTTP Module (simple server)**

We saw basic example earlier.
Here is a slightly extended one:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Us");
  } else {
    res.end("404 - Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

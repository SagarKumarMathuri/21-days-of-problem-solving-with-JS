# 🎯 **Day 20 – Trees & Tree Traversal**

---

## 🌳 **Given Tree Structure (Use This for All Non-DOM Questions)**

```js
const mediaTree = {
  name: "media",
  children: [
    {
      name: "images",
      children: [
        {
          name: "events",
          children: [
            {
              name: "birthday",
              children: [
                { name: "cake.png", children: [] },
                { name: "party.jpg", children: [] },
              ],
            },
          ],
        },
        {
          name: "wallpapers",
          children: [
            { name: "nature.jpg", children: [] },
            { name: "city.png", children: [] },
          ],
        },
      ],
    },
    {
      name: "music",
      children: [
        {
          name: "rock",
          children: [{ name: "song1.mp3", children: [] }],
        },
      ],
    },
    {
      name: "videos",
      children: [],
    },
  ],
};
```

---

## 🏫 **Class Questions**

---

### **1️⃣ Print All Node Names in the Tree (Depth-First Order)**

Print all the `name` values using recursion

---

### **2️⃣ Count the Total Number of Nodes in the Tree**

Total count (including root)

---

### **3️⃣ Print Only Leaf Nodes**

Print names of nodes that have no children

---

### **4️⃣ DOM: Print All Tag Names Inside `document.documentElement` (DFS)**

_Input:_ `document.documentElement`  
Print tag names of all elements  
Constraint: recursion only. No `document.documentElement.querySelectorAll('*')`

---

### **5️⃣ DOM: Count Total Number of Elements Inside `document.body`**

_Input:_ `document.body`  
Total element count

---

## 🏠 **Homework Questions**

---

### **1️⃣ Count Total Number of Leaf Nodes in the Tree**

Number of leaf nodes

---

### **2️⃣ Find the Maximum Depth of the Tree**

Maximum depth value

---

### **3️⃣ Find the Height of the Tree**

Height of the tree

---

### **4️⃣ Check If a Folder or File Exists in the Tree**

`true` or `false`

---

### **5️⃣ Print the Path to a Given File**

`media → images → wallpapers → city.png`

---

### **6️⃣ DOM: Print Only Leaf DOM Elements**

_Input:_ `document.body`  
Elements that have no child elements

---

### **7️⃣ DOM: Count How Many Times a Specific Tag Appears**

_Input:_ `document.body`, tag = `"DIV"`  
Count of `<div>` elements

---

### **8️⃣ DOM: Find the Maximum DOM Depth of the Page**

_Input:_ `document.body`  
Maximum nesting depth

---

### **9️⃣ DOM: Check If an Element With Given ID Exists**

_Input:_ `document.body`, id = `"app"`  
`true` or `false`  
Constraint: manual recursive traversal

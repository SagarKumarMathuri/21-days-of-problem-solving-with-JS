# 🎯 **Day 8 – String Problems**

### 🧩 **Core Concept Focus**

- String traversal
- Frequency counting
- Manual substring searching
- String transformation logic
- Character classification
- Avoiding built-ins where needed (for skill building)

---

# 🏫 **Class Questions**

### **1️⃣ Reverse a String (Manual Method Only)**

- **Input:** `"javascript"`
- **Output:** `"tpircsavaj"`
  ✨ _Use a loop — no `.reverse()`._

---

### **2️⃣ Check if a String is a Palindrome**

- **Input:** `"racecar"`
- **Output:** `Palindrome`
  ✨ _Compare characters from both ends using two-pointer logic._

---

### **3️⃣ Count Frequency of Each Character**

- **Input:** `"banana"`
- **Output:** `{ b:1, a:3, n:2 }`
  ✨ _Teaches hash maps / JS objects + iteration._

---

### **4️⃣ Find the Most Frequent Character in a String**

- **Input:** `"success"`
- **Output:** `Most frequent: s (3 times)`
  ✨ _Builds on frequency map — find maximum occurrence._

---

### **5️⃣ Check if Two Strings Are Anagrams (Without Sorting)**

- **Input:** `"listen"`, `"silent"`
- **Output:** `Anagram`
  ✨ _Use character frequency comparison — no `.sort()`._

---

### **6️⃣ Find the First Non-Repeating Character**

- **Input:** `"aabbcddeff"`
- **Output:** `c`
  ✨ _Requires 2-pass algorithm:
  first count → then find first unique._

---

# 🏠 **Homework Questions (7 Challenging Problems)**

### **1️⃣ Remove All Duplicate Characters (Keep First Occurrence)**

- **Input:** `"programming"`
- **Output:** `"progamin"`
  ✨ _Use a visited set + build new string._

---

### **2️⃣ Check if a String Contains Only Alphabets (No Regex)**

- **Input:** `"HelloWorld123"`
- **Output:** `False`
  ✨ _Use ASCII ranges manually._

---

### **3️⃣ Reverse Only the Words in a Sentence**

- **Input:** `"I love coding"`
- **Output:** `"coding love I"`
  ✨ _Split manually or build reverser yourself._

---

### **4️⃣ Find the Longest Word in a Sentence**

- **Input:** `"coding is beautiful"`
- **Output:** `"beautiful"`
  ✨ _Manual scanning + longest tracking._

---

### **5️⃣ Count the Number of Words (Manually Without split)**

- **Input:** `"  hi   there  world "`
- **Output:** `3 words`
  ✨ _Detect transitions from space → non-space using logic._

---

### **6️⃣ Find All Substrings of a String (No Built-ins)**

- **Input:** `"abc"`
- **Output:** `a, ab, abc, b, bc, c`
  ✨ _Nested loops + substring construction._

---

### **7️⃣ Compress a String (Basic Run-Length Encoding)**

- **Input:** `"aaabbccccd"`
- **Output:** `"a3b2c4d1"`
  ✨ _Count consecutive characters and build encoded output._

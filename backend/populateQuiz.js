import mongoose from "mongoose";
import Quiz from "./models/Quiz.js";

const questions = [
    {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        correctOption: 1,
    },
    {
        question: "Which data structure is used to implement recursion?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctOption: 1,
    },
    {
        question: "What is the time complexity of searching in a balanced binary search tree?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
        correctOption: 1,
    },
    {
        question: "Which of the following is not a linear data structure?",
        options: ["Array", "Stack", "Queue", "Graph"],
        correctOption: 3,
    },
    {
        question: "What is the worst-case time complexity of quicksort?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
        correctOption: 2,
    },
    {
        question: "Which data structure is used in Breadth-First Search (BFS)?",
        options: ["Stack", "Queue", "Array", "Heap"],
        correctOption: 1,
    },
    {
        question: "What is the space complexity of merge sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctOption: 2,
    },
    {
        question: "What is a binary tree with all levels except possibly the last filled called?",
        options: ["Full binary tree", "Complete binary tree", "Balanced binary tree", "Skewed binary tree"],
        correctOption: 1,
    },
    {
        question: "What is the maximum number of nodes in a binary tree of height h?",
        options: ["2^h", "2^(h+1) - 1", "2^(h-1)", "2^(h+1)"],
        correctOption: 1,
    },
    {
        question: "Which of the following algorithms is used to find the shortest path in a graph?",
        options: ["Kruskal's", "Prim's", "Dijkstra's", "Floyd-Warshall"],
        correctOption: 2,
    },
    {
        question: "What is the best case time complexity of bubble sort?",
        options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
        correctOption: 0,
    },
    {
        question: "What is the minimum number of nodes in a binary search tree of height h?",
        options: ["h", "h+1", "2^(h-1)", "h-1"],
        correctOption: 0,
    },
    {
        question: "Which data structure is used for implementing LRU Cache?",
        options: ["Hash Table", "Stack", "Queue", "Deque"],
        correctOption: 3,
    },
    {
        question: "What is the in-order traversal of a binary search tree?",
        options: ["Root-Left-Right", "Left-Right-Root", "Left-Root-Right", "Right-Root-Left"],
        correctOption: 2,
    },
    {
        question: "Which sorting algorithm is not stable?",
        options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Bubble Sort"],
        correctOption: 1,
    },
    {
        question: "What is the time complexity of inserting a node in a linked list?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctOption: 0,
    },
    {
        question: "Which operation is faster in a singly linked list compared to an array?",
        options: ["Accessing a middle element", "Insertion at the beginning", "Sorting", "Accessing the last element"],
        correctOption: 1,
    },
    {
        question: "What is a priority queue typically implemented as?",
        options: ["Array", "Linked List", "Heap", "Graph"],
        correctOption: 2,
    },
    {
        question: "What is the time complexity of searching for an element in a hash table?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctOption: 0,
    },
    {
        question: "Which traversal is used to get a sorted list from a binary search tree?",
        options: ["In-order", "Pre-order", "Post-order", "Level-order"],
        correctOption: 0,
    },
    {
        question: "What is the height of a balanced binary search tree with n nodes?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
        correctOption: 1,
    },
    {
        question: "What is the time complexity of deleting the maximum element from a max-heap?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctOption: 1,
    },
    {
        question: "Which data structure supports efficient range queries?",
        options: ["Stack", "Segment Tree", "Queue", "Heap"],
        correctOption: 1,
    },
    {
        question: "What is the main advantage of a B-tree over a binary search tree?",
        options: ["Smaller size", "Faster insertion", "Fewer disk accesses", "Simpler implementation"],
        correctOption: 2,
    },
    {
        question: "What is the time complexity of checking whether a graph is connected using BFS?",
        options: ["O(V)", "O(E)", "O(V+E)", "O(V*E)"],
        correctOption: 2,
    },
    {
        question: "Which algorithm is used for finding the Minimum Spanning Tree?",
        options: ["Dijkstra's", "Bellman-Ford", "Kruskal's", "Floyd-Warshall"],
        correctOption: 2,
    },
    {
        question: "What is the maximum number of edges in a simple graph with n vertices?",
        options: ["n", "n^2", "n(n-1)/2", "n(n+1)/2"],
        correctOption: 2,
    },
    {
        question: "Which of the following is a non-linear data structure?",
        options: ["Queue", "Stack", "Array", "Tree"],
        correctOption: 3,
    },
    {
        question: "What is the auxiliary space complexity of merge sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctOption: 2,
    },
    {
        question: "What is the time complexity of Depth-First Search (DFS)?",
        options: ["O(V)", "O(E)", "O(V+E)", "O(V*E)"],
        correctOption: 2,
    },
    {
        question: "What is the purpose of a sentinel in data structures?",
        options: ["Mark the start", "Mark the end", "Simplify edge cases", "Store extra data"],
        correctOption: 2,
    },
    {
        question: "What is the best case time complexity of insertion sort?",
        options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
        correctOption: 0,
    },
    {
        question: "Which hashing technique reduces collisions?",
        options: ["Linear Probing", "Double Hashing", "Quadratic Probing", "All of the above"],
        correctOption: 3,
    },
    {
        question: "What is the order of operations in a stack?",
        options: ["FIFO", "LIFO", "FILO", "LILO"],
        correctOption: 1,
    },
    
        {
            question: "What is the time complexity of inserting an element into a max-heap?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            correctOption: 1,
        },
        {
            question: "Which of the following is true for a doubly linked list?",
            options: [
                "Each node has one pointer",
                "Each node has two pointers",
                "It allows traversal in one direction",
                "It does not allow traversal in reverse direction",
            ],
            correctOption: 1,
        },
        {
            question: "What is the average time complexity for searching in a hash table?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            correctOption: 0,
        },
        {
            question: "Which traversal technique is used in Depth-First Search?",
            options: ["Level-order", "In-order", "Pre-order", "Post-order"],
            correctOption: 2,
        },
        {
            question: "What is the main advantage of using a circular queue over a linear queue?",
            options: [
                "It is easier to implement",
                "It uses memory more efficiently",
                "It has faster enqueue operations",
                "It supports multiple data types",
            ],
            correctOption: 1,
        },
        {
            question: "What is the time complexity of removing an element from the head of a singly linked list?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            correctOption: 0,
        },
        {
            question: "What is the maximum number of children a node can have in a binary tree?",
            options: ["1", "2", "3", "4"],
            correctOption: 1,
        },
        {
            question: "Which of the following is not a characteristic of a B-tree?",
            options: [
                "All leaf nodes are at the same level",
                "It is used for disk-based storage",
                "Keys in a node are not sorted",
                "It minimizes disk I/O operations",
            ],
            correctOption: 2,
        },
        {
            question: "What is the time complexity of inserting an element into an AVL tree?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            correctOption: 1,
        },
        {
            question: "Which data structure is most efficient for implementing undo operations?",
            options: ["Queue", "Deque", "Stack", "Array"],
            correctOption: 2,
        },
        {
            question: "What is the time complexity of deleting the last element of a singly linked list?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            correctOption: 2,
        },
        {
            question: "Which of the following algorithms is used to detect cycles in a graph?",
            options: ["DFS", "BFS", "Kruskal's", "Prim's"],
            correctOption: 0,
        },
        {
            question: "What is the time complexity of finding the maximum element in an unsorted array?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            correctOption: 2,
        },
        {
            question: "What is the degree of a node in a graph?",
            options: [
                "The number of edges connected to the node",
                "The number of child nodes",
                "The height of the node",
                "The level of the node",
            ],
            correctOption: 0,
        },
        {
            question: "What is the best case time complexity of quicksort?",
            options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
            correctOption: 2,
        },
        {
            question: "What does the term 'collision' refer to in hashing?",
            options: [
                "When two keys map to the same hash value",
                "When a key is not found",
                "When the hash table is full",
                "When two hash functions produce different results",
            ],
            correctOption: 0,
        },
        {
            question: "What is the purpose of a sentinel node in a linked list?",
            options: [
                "To mark the start of the list",
                "To mark the end of the list",
                "To simplify edge cases",
                "To store additional data",
            ],
            correctOption: 2,
        },
        {
            question: "Which data structure is most suitable for implementing a priority queue?",
            options: ["Stack", "Heap", "Queue", "Linked List"],
            correctOption: 1,
        },
        {
            question: "What is the time complexity of checking whether a stack is empty?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            correctOption: 0,
        },
        {
            question: "Which traversal algorithm uses a queue as its auxiliary data structure?",
            options: ["DFS", "BFS", "In-order", "Post-order"],
            correctOption: 1,
        },
];
    

mongoose
    .connect("mongodb+srv://ayush4bansal:gzGQsyn6MsWT0GdF@cluster0.8ybir.mongodb.net/algovision_db", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Database connected");
        await Quiz.insertMany(questions);
        console.log("Questions populated successfully");
        mongoose.disconnect();
    })
    .catch((error) => console.error("Error connecting to MongoDB:", error));

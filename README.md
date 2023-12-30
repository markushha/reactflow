## ⌘ React Flow App Example

### Below you'll see what I have implemented inside this app, and how to use it

Everything I did was according to best practices from [React Flow documentation](https://reactflow.dev/api-reference).

I used Typescript and types from React Flow everywhere and commented all parts of my code for best reading experience.

In this application, the main goal was to implement logic flow between nodes. 
Thus, you'll see how to:
  - Add your own logic to onConnect() function
  - Add validation using isValidConnection() function
  - Pass state value using zustand

For nodes and edges you'll find an implementation of:
  - custom addNode() function with different types
  - duplicateNode() function
  - deleteNode() function
  - deleteEdge() function

Finally, you'll see how to implement Context Menus for nodes, edges, and canvas itself:
  - custom ContextMenu component with dynamic types and actions for each type
  - onNodeContextMenu(), onEdgeContextMenu(), and onPaneContextMenu() functions
  - onPaneClick() function for automatically closing Context Menu

### How to launch

Clone repo:
```bash
git clone https://github.com/markushha/reactflow
```

Then, install packages

```bash
npm i
# or
yarn
```

Next, launch the development server

```bash
npm run dev
# or
yarn dev
```

Finally, open [http://localhost:3000](http://localhost:3000) with your browser to see the application

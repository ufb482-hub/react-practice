Create Project + Run 
npx create-react-app react-pracitce
cd practice-hooks
npm start
npm i 
npm run dev

# React Hooks Practice 

This project is made for practicing **important React hooks**:

## Features Covered
1. **useState**
   - Used for updating values when something changes.
   - Example: Counter (increase, decrease, reset).

2. **useRef**
   - Holds a value after rendering without re-rendering.
   - Example: Counting how many times the component rendered.

3. **useEffect**
   - **Case 1:** Runs on every render.
   - **Case 2:** Runs only once (on mount).
   - **Case 3:** Runs only when dependency changes.
4. **JSON Data Example**
- Added `studentData.json` inside `src/api/`.
- Displayed list using `.map()`:


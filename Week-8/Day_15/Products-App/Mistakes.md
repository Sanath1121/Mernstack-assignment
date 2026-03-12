# Mistakes Found in React-Products-App_Demo

## Why output looked empty
The product page appeared blank because data was never fetched into state.

## Mistakes and fixes

1. **Fetch function was never called** in `ProductsList.jsx`
   - You created `getFunction()` inside `useEffect`, but did not execute it.
   - Result: `products` stayed as an empty array, so grid rendered nothing.
   - Fix: call `getFunction()` inside `useEffect`.

2. **Typo in error fallback conversion**
   - `Stringify(error)` was used (invalid in JS).
   - Correct function is `String(error)`.
   - Fix: changed to:
   - `error.message || String(error)`

3. **Route path naming consistency risk**
   - Route and NavLink should match exactly (`productList` vs `productlist`).
   - In your current code they are aligned as `productList`, which is correct.

4. **Footer positioning setup needed parent flex layout**
   - `mt-auto` on footer alone does not stick footer to bottom.
   - Parent layout must be full-height flex column with growing content area.
   - Fix already applied in `RootLayout.jsx` using `min-h-screen flex flex-col` and `flex-1`.

## What to remember
- If async function is defined in `useEffect`, call it.
- Keep route URL casing consistent everywhere.
- For sticky footer layout: parent `flex flex-col min-h-screen` + content `flex-1`.

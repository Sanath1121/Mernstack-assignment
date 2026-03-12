import { useEffect, useState } from "react";

function SideEffects() {
  // Data state: stores API response after successful fetch.
  const [users, setUsers] = useState(null);
//is const[users,setUsers]=useState([]) 
  // UI state: controls loading and error rendering.
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); //instead of null we can also use "" for error state but null is better because it clearly indicates absence of an error message, while an empty string could be misinterpreted as a valid (but empty) message.

  console.log("Side effect component rendered");
//what is useEffect: 
// useEffect is a React hook that allows you to perform side effects in functional components. Side effects are operations that can affect other parts of the application or have an impact outside of the component itself, such as fetching data from an API, subscribing to events, or manipulating the DOM.
  useEffect(() => {
    // Runs once on mount because dependency array is empty ([]).
    async function getData() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("https://ipinfo.io/161.185.160.93/geo");

        // Handle non-2xx HTTP status codes.
        if (!res.ok) { //what is res.ok: res.ok is a property of the Response object in the Fetch API that indicates whether the HTTP response status code is in the successful range (200-299). If res.ok is false, it means the request was not successful, and we can handle it accordingly, such as by throwing an error or displaying an error message to the user.
          throw new Error(`Request failed with status ${res.status}`);
        } //use of this if block is: This checks if the HTTP response status code indicates a successful request (status code in the range 200-299). If the response is not successful, it throws an error with a message that includes the status code. This allows us to catch and handle HTTP errors gracefully in the catch block.

        const usersData = await res.json();
        setUsers(usersData);
      } catch (err) {
        // Save a readable error message for UI.
        setError(err.message || "Something went wrong"); //hwo does this work: This sets the error state to a user-friendly message. If the caught error (err) has a message property, it uses that; otherwise, it defaults to "Something went wrong". This ensures that we have a meaningful error message to display in the UI if the API request fails for any reason.
      } finally {
        // Always stop loading whether request succeeds or fails.
        setLoading(false);
      }
    }

    getData();
  }, []); //use of [] is: The empty dependency array ([]) means this effect runs only once after the initial render, similar to componentDidMount in class components. This is ideal for fetching data when the component mounts.
  //if [] is not their then it will run on every render and it will cause infinite loop of API calls.

  // Show loading text while API call is in progress.
  if (loading) {
    return <p className="text-red-500 text-4xl">Loading.....</p>;
  }

  // Show error text if request failed.
  if (error) {
    return <p className="text-red-500 text-4xl">Error: {error}</p>;
  }

  // Render fetched data.
  return (
    <div>
      <h2>Side Effects</h2>
      <pre>{JSON.stringify(users, null, 2)}</pre> 
    </div>
    //what does this print: This prints the users data in a formatted JSON string. The JSON.stringify function converts the JavaScript object (users) into a JSON string. The second argument (null) is for replacer, which we are not using here, and the third argument (2) is for indentation, which makes the output more readable by adding 2 spaces of indentation to each level of the JSON structure.
  );
}

export default SideEffects;
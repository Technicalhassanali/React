import Counter from "../../features/counter/Counter";

function index() {
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "2.2rem" }}>
        Implementing Redux Toolkit & Fetching Data from JSONPlaceHolder
      </h1>
      <Counter />
      <ol style={{fontSize:"1.9rem",marginTop:"2rem",lineHeight:"1.5"}}>
        <li>For Practice we implement counter <code>increment</code>,<code>Decrement</code> using the <code>redux slice</code></li>
        <li>Implementing Redux Store</li>
        <li>Implementing Redux Tool Query (RTK) Query</li>
        <li>Fetch Data from https://jsonplaceholder.typicode.com/ <code>/users</code>,<code>/comments</code> Data.</li>
        <li>Find User Data using ID <code>https://jsonplaceholder.typicode.com/users/:id</code>.</li>
        <li>Fetch All User Data using RTK Query <code>https://jsonplaceholder.typicode.com/users/</code>.</li>
        <li>Fetch All comments on end point <code>https://jsonplaceholder.typicode.com/users/</code> using RTK Query.</li>
      </ol>
    </>
  );
}

export default index;

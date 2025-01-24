```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>This is a paragraph.</p>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Simulate an async operation that might throw an error
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Something went wrong!');
    };

    fetchData().catch(error => {
      console.error('Error fetching data:', error); // This line is crucial for seeing errors
    });
  }, []);
  
  return <p>Count: {count}</p>;
} 
```
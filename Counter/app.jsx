import {useState} from 'react';
const App = () => {
	const[count,setState] = useState(0);
	return (
		<>
			<h1 data-testid="count">{count}</h1>
			<button data-testid="increment" onClick={()=>setState(count+1)}>Increment</button>
			<button data-testid="decrement" onClick={()=>setState(count-1)}>Decrement</button>
		</>
	)
}

export default App

import {useState} from 'react'

const App = () => {
    const[count,setCount] = useState('');
	return (
		<>
			<input data-testid="input-id" value={count} 
			onChange={(e)=>setCount(e.target.value)}/>
			<button data-testid="button-id" disabled = {count.length<3}>Click</button>
		</>
	)
}

export default App

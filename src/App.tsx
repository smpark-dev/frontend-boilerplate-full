import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>
          Frontend Boilerplate
        </h1>
        <div className='card max-w-md mx-auto'>
          <h2 className='text-2xl font-semibold mb-4'>
            Vite + React + TypeScript
          </h2>
          <button
            className='btn btn-primary'
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className='text-gray-600 mt-4'>
            Edit{' '}
            <code className='bg-gray-100 px-2 py-1 rounded'>src/App.tsx</code>{' '}
            and save to test HMR
          </p>
        </div>
        <p className='text-gray-500 mt-8'>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App

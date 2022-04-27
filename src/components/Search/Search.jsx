import { useState } from 'react';

export default function Search({ setQuery }) {
  const [typing, setTyping] = useState('');

  return (
    <>
      <input
        value={typing}
        type="text"
        onChange={(e) => setTyping(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          setQuery(typing);
          setTyping('');
        }}
      >
        SEARCH
      </button>
    </>
  );
}

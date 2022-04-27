import { useState, useEffect } from 'react';

export default function Search({ setQuery }) {
  const [typing, setTyping] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setQuery(typing), 600);
    return () => {
      clearTimeout(timer);
    };
  }, [typing]);

  return (
    <>
      <label>
        Search for Pokemon:
        <input
          value={typing}
          placeholder={'search for a pokemon'}
          type="text"
          onChange={(e) => setTyping(e.target.value)}
        />
      </label>
    </>
  );
}

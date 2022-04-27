import React from 'react';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';

export default function Controls({
  types,
  setSelectedType,
  selectedType,
  setQuery,
}) {
  return (
    <div>
      <Filter {...{ types, setSelectedType, selectedType, setQuery }} />
      <Search {...{ setQuery }} />
    </div>
  );
}

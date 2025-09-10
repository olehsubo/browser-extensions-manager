import { useState } from 'react';

const FilterButtons = () => {
  const filters = ['All', 'Active', 'Inactive'];
  const [activeBtn, setActiveBtn] = useState('All');

  return (
    <div className='flex gap-3'>
      {filters.map((filter) => (
        <button
          key={filter}
          type='button'
          aria-pressed={activeBtn === filter}
          onClick={() => setActiveBtn(filter)}
          className={`px-5 py-2 text-md font-semibold rounded-3xl  focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-neutral-900
            ${
              activeBtn === filter
                ? ' bg-red-500 text-neutral-900'
                : 'bg-neutral-700 text-neutral-0 ring-1 ring-neutral-400 hover:bg-neutral-600 '
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;

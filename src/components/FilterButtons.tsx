import { useId } from 'react';

export type Filter = 'All' | 'Active' | 'Inactive';

interface FilterButtonsProps {
  active: Filter;
  onChange: (f: Filter) => void;
}

export default function FilterButtons({
  active,
  onChange
}: FilterButtonsProps) {
  const filters: Filter[] = ['All', 'Active', 'Inactive'];
  const groupId = useId();

  return (
    <div className='flex gap-2' role='tablist' aria-labelledby={groupId}>
      <span id={groupId} className='sr-only'>
        Filter extensions
      </span>

      {filters.map((f) => {
        const isActive = active === f;
        return (
          <button
            key={f}
            type='button'
            aria-pressed={isActive}
            onClick={() => onChange(f)}
            className={`px-5 py-2 text-lg font-semibold rounded-3xl
              focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-neutral-900
              transition-colors duration-200
              ${
                isActive
                  ? 'bg-red-500 text-neutral-900 hover:bg-red-400'
                  : 'bg-neutral-700 text-neutral-0 hover:bg-neutral-600'
              }`}
          >
            {f}
          </button>
        );
      })}
    </div>
  );
}

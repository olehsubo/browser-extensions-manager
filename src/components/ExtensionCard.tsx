type Props = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  onToggle: () => void;
  onRemove: () => void;
};

export default function ExtensionCard({
  logo,
  name,
  description,
  isActive,
  onToggle,
  onRemove
}: Props) {
  return (
    <article className='rounded-2xl bg-neutral-800 p-4 shadow-lg ring-1 ring-neutral-500'>
      <header className='mb-10 flex items-center gap-3'>
        <img
          src={logo}
          alt={name}
          className='h-12 w-12 object-contain mr-6'
          aria-hidden='true'
        />

        <div className='min-w-0'>
          <h3 className='truncate text-md font-semibold text-neutral-0 mb-2'>
            {name}
          </h3>
          <p className='text-sm text-neutral-200'>{description}</p>
        </div>
      </header>

      <div className='flex items-center justify-between'>
        <button
          onClick={onRemove}
          type='button'
          className='px-5 py-2 text-md font-semibold rounded-3xl bg-neutral-700 text-neutral-0 ring-1 ring-neutral-300 
          focus:ring-2 focus:ring-red-500 focus:bg-red-500 focus:ring-offset-2 focus:ring-offset-neutral-900
          hover:bg-neutral-600'
        >
          Remove
        </button>

        {/* toggle switch with red ring + gap */}
        <label className='relative inline-flex items-center cursor-pointer'>
          <input
            type='checkbox'
            className='peer sr-only '
            checked={isActive}
            onChange={onToggle}
            aria-label={
              isActive ? 'Deactivate extension' : 'Activate extension'
            }
          />
          {/* track */}
          <span
            className='block h-6 w-11 rounded-full bg-neutral-700
            transition-colors duration-200
            peer-checked:bg-red-500'
          />
          {/* thumb */}
          <span
            className='pointer-events-none absolute left-0 top-0.5 ml-0.5
            h-5 w-5 rounded-full bg-neutral-0 shadow
            transition-transform duration-200
            peer-checked:translate-x-5'
          />
        </label>
      </div>
    </article>
  );
}

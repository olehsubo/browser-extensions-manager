import { useMemo, useState } from 'react';
import ExtensionCard from './components/ExtensionCard';
import FilterButtons from './components/FilterButtons';
import HeaderBanner from './components/HeaderBanner';
import data from './data.json';

type Extension = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

type ExtensionWithUrl = Extension & { logoUrl: string };

type Filter = 'All' | 'Active' | 'Inactive';

// Map svg filenames in src/assets/images to actual URLs
const logos = import.meta.glob('./assets/images/*.svg', {
  eager: true,
  as: 'url'
}) as Record<string, string>;

function App() {
  const [filter, setFilter] = useState<Filter>('All');

  // Keep the list in state so toggles mutate this state
  const [items, setItems] = useState<ExtensionWithUrl[]>(() =>
    (data as Extension[]).map((it) => ({
      ...it,
      logoUrl: logos[it.logo] ?? it.logo
    }))
  );

  const filtered = useMemo(() => {
    if (filter === 'All') return items;
    const wantActive = filter === 'Active';
    return items.filter((it) => it.isActive === wantActive);
  }, [items, filter]);

  // Toggle by unique key (name here). If you later add `id`, switch to that.
  const toggleActive = (name: string) => {
    setItems((prev) =>
      prev.map((it) =>
        it.name === name ? { ...it, isActive: !it.isActive } : it
      )
    );
  };

  // Remove card entirely (matches your “Remove” button label)
  const removeItem = (name: string) => {
    setItems((prev) => prev.filter((it) => it.name !== name));
  };

  return (
    <div className='mx-auto w-full mobile:max-w-[400px] desktop:max-w-[1100px] p-6'>
      <HeaderBanner />
      <div className='mt-5 flex justify-between'>
        <h1 className='text-white text-4xl font-sans font-bold'>
          Extensions List
        </h1>
        <FilterButtons active={filter} onChange={setFilter} />
      </div>
      {filtered.length === 0 ? (
        <p className='text-2xl text-center mt-16'>
          No extensions match the filter
        </p>
      ) : (
        <section className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {filtered.map((ext) => (
            <ExtensionCard
              key={ext.name}
              logo={ext.logoUrl}
              name={ext.name}
              description={ext.description}
              isActive={ext.isActive}
              onToggle={() => toggleActive(ext.name)}
              onRemove={() => removeItem(ext.name)}
            />
          ))}
        </section>
      )}
    </div>
  );
}

export default App;

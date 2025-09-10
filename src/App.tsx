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

type Filter = 'All' | 'Active' | 'Inactive';

// Map svg filenames in src/assets/images to actual URLs
const logos = import.meta.glob('./assets/images/*.svg', {
  eager: true,
  as: 'url'
}) as Record<string, string>;

function App() {
  const [filter, setFilter] = useState<Filter>('All');

  const extensionItems = useMemo(
    () =>
      (data as Extension[]).map((it) => ({
        ...it,
        logoUrl: logos[it.logo] ?? it.logo
      })),
    []
  );

  const filtered = useMemo(() => {
    if (filter === 'All') return extensionItems;
    const wantActive = filter === 'Active';
    return extensionItems.filter((it) => it.isActive === wantActive);
  }, [extensionItems, filter]);

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
        <p>No extensions match the filter</p>
      ) : (
        <section className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {filtered.map((ext) => (
            <ExtensionCard
              key={ext.name}
              logo={ext.logoUrl}
              name={ext.name}
              description={ext.description}
              isActive={ext.isActive}
            />
          ))}
        </section>
      )}
    </div>
  );
}

export default App;

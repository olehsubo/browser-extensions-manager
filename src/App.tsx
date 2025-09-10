import FilterButtons from './components/FilterButtons';
import HeaderBanner from './components/HeaderBanner';

function App() {
  return (
    <div className='mx-auto w-full mobile:max-w-[400px] desktop:max-w-[1100px] bg-neutral-900 p-6'>
      <HeaderBanner />
      <div className='mt-5 flex justify-between'>
        <h1 className='text-white text-4xl font-sans font-bold'>
          Extensions List
        </h1>
        <FilterButtons />
      </div>
    </div>
  );
}

export default App;

import HeaderBanner from "./components/HeaderBanner";

function App() {
  return (
    <div className="mx-auto w-full mobile:max-w-[400px] desktop:max-w-[1100px] bg-neutral-900 p-6">
      <HeaderBanner />
    </div>
  );
}

export default App;

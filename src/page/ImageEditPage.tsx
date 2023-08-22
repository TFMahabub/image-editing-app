import FillButton from "../components/Buttons/FillButton";

const ImageEditPage = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <main className="w-xl p-4 space-y-3 bg-white rounded-lg shadow-xl">
        <h1 className="text-heading font-semibold text-gray-800">
          Easy Image Editor
        </h1>
        <div className="flex gap-2">
          <div className="border border-gray-300">
            <FillButton>Brightness</FillButton>
          </div>
          <div className="border border-gray-300">
            asasdfasdfasdfasdfasdfasdfdfsa
          </div>
        </div>
      </main>
    </section>
  );
};

export default ImageEditPage;

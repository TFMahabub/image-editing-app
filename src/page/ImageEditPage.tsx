import FillButton from "../components/Buttons/FillButton";
import StrokeButton from "../components/Buttons/StrokeButton";

const ImageEditPage = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <main className="max-w-2xl p-4 space-y-3 bg-white rounded-lg shadow-xl">
        <h1 className="text-heading text-textColor font-semibold">
          Easy Image Editor
        </h1>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <FillButton>Brightness</FillButton>
            <StrokeButton>Brightness</StrokeButton>
          </div>
          <div className="bg-primary w-full h-full border border-gray-300">
            img
          </div>
        </div>
      </main>
    </section>
  );
};

export default ImageEditPage;

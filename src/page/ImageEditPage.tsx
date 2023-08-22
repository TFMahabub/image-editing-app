import ButtonPart from "../components/pageComponents/ButtonPart";
import ImagePart from "../components/pageComponents/ImagePart";

const ImageEditPage = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <main className="max-w-2xl p-4 space-y-3 bg-white rounded-lg shadow-xl">
        <h1 className="text-heading text-textColor font-semibold">
          Easy Image Editor
        </h1>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <ButtonPart />
          </div>
          <div className="bg-primary border border-gray-300">
            <ImagePart />
          </div>
        </div>
      </main>
    </section>
  );
};

export default ImageEditPage;

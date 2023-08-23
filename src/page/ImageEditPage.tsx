import MenuText from "../components/Texts/MenuText";
import ActionPart from "../components/pageComponents/ActionPart";
import ImagePart from "../components/pageComponents/ImagePart";

const ImageEditPage = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <main className="max-w-3xl p-4 space-y-3 bg-white rounded-lg shadow-xl">
        <h1 className="text-heading text-textColor font-semibold">
          Easy Image Editor
        </h1>
        <div className="flex gap-2">
          <div className="space-y-1">
            <MenuText>Filter</MenuText>
            <div className=" grid w-full grid-cols-2 gap-2">
              <ActionPart />
            </div>
          </div>
          <div className="">
            <ImagePart />
          </div>
        </div>
      </main>
    </section>
  );
};

export default ImageEditPage;

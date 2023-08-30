import { useState } from "react";
import ActionPart from "../components/pageComponents/ActionPart";
import ImagePart from "../components/pageComponents/ImagePart";

export interface OptionType {
  image: string;
  brightness: number;
  grayscale: number;
}

const ImageEditPage = () => {
  const [option, setOption] = useState<OptionType>({
    image: "",
    brightness: 0,
    grayscale: 0,
  });

  console.log(option);

  return (
    <section className="flex items-center justify-center h-screen">
      <main className="max-w-3xl p-4 space-y-3 bg-white border rounded-[1px -1px 11px 6px rgba(0,0,0,0.26);] shadow-xl">
        <h1 className="text-heading text-textColor font-semibold">
          Easy Image Editor
        </h1>
        <div className="flex gap-2">
          <div className="p-3 space-y-3 border rounded-sm">
            <ActionPart option={option} setOption={setOption} />
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

import { useReducer } from "react";
import ActionPart from "../components/pageComponents/ActionPart";
import ImagePart from "../components/pageComponents/ImagePart";
import ImageEditInitialState, {
  ImageEditInitialStateType,
} from "../redusers/ImageEditOptions/InitialState";
import imageEditReducer, {
  TypeType,
} from "../redusers/ImageEditOptions/reducer";

const ImageEditPage = () => {
  const [options, optionDispatch] = useReducer<
    (
      state: ImageEditInitialStateType,
      { type, payload }: { type: TypeType; payload: string }
    ) =>
      | {
          brightness: string;
          grayscale: string;
          saturate: string;
          contrast: string;
        }
      | undefined
  >(imageEditReducer, ImageEditInitialState);
  console.log(options);

  return (
    <section className="flex items-center justify-center h-screen">
      <main className="max-w-3xl p-4 space-y-3 bg-white border rounded-[1px -1px 11px 6px rgba(0,0,0,0.26);] shadow-xl">
        <h1 className="text-heading text-textColor font-semibold">
          Easy Image Editor
        </h1>
        <div className="flex gap-2">
          <div className="p-3 space-y-3 border rounded-sm">
            <ActionPart options={options} optionDispatch={optionDispatch} />
          </div>
          <div className="">
            <ImagePart options={options} />
          </div>
        </div>
      </main>
    </section>
  );
};

export default ImageEditPage;

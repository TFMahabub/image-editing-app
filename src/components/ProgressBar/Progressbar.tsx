interface PropsType {
  progressValue: string;
  setProgressValue: Dispatch<SetStateAction<string>>;
}

const Progressbar = ({ progressValue, setProgressValue }: PropsType) => {
  return (
    <input
      type="range"
      min={1}
      max={100}
      step={1}
      value={progressValue}
      onChange={(e) => setProgressValue(e.target.value)}
      className="progressbar accent-primary w-full"
    />
  );
};

export default Progressbar;

/* 
  
  <Progressbar
  progressValue={progressValue}
  setProgressValue={setProgressValue}
/>; 

*/

interface PropsType {
  progressValue: string;
  setRange: any;
}

const Progressbar = ({ progressValue, setRange }: PropsType) => {
  return (
    <input
      type="range"
      min={1}
      max={100}
      step={1}
      value={progressValue}
      onChange={(e) => setRange(e.target.value)}
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

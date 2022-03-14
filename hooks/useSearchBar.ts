import { useRef, useState } from 'react';

const useSearchBar = () => {
  const [saveData, setSaveData] = useState<string[]>([]);
  const timePointer = useRef<number | null>(null);

  const save = (val: string) => {
    setSaveData([...saveData, `saved: ${val}`]);
  };

  const handler = (val: string) => {
    if (timePointer.current) clearTimeout(timePointer.current);

    timePointer.current = setTimeout(() => save(val), 600);
  };
  return { handler, saveData };
};

export default useSearchBar;

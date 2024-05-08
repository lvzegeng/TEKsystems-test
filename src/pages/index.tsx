import { useState } from "react";

export default function HomePage() {
  const getTime = () => {
    return new Date();
  };

  const [times, setTimes] = useState([getTime()]);

  const name = "Zegeng Lv";

  const reload = (index: number) => {
    setTimes(times.with(index, getTime()));
  };

  const add = () => {
    setTimes([...times, getTime()]);
  };

  return (
    <div>
      <div>English full name：{name}</div>

      {times.map((item, index) => (
        <div>
          current system time(clock)：{item.toLocaleString()}
          <button
            onClick={() => {
              reload(index);
            }}
          >
            reload
          </button>
        </div>
      ))}

      <button onClick={add}>add</button>
    </div>
  );
}

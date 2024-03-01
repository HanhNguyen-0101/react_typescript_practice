import { useTimersContext } from "../store/timers-context";
import Timer from "./Timer";

export default function Timers() {
  const { timers } = useTimersContext();
  return <ul>
    {timers.map((timer, idx) => <li key={idx}>
      <Timer duration={timer.duration} name={timer.name} />
    </li>)}
  </ul>;
}

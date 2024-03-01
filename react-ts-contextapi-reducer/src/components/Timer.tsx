import { useEffect, useRef, useState } from 'react';
import { type Timer as TimerProps } from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer({ name, duration }: TimerProps) {

  const [remainningTime, setRemainningTime] = useState(duration * 1000);
  const timerRef = useRef<number | null>(null);

  if (remainningTime <= 0 && timerRef.current) {
    clearInterval(timerRef.current);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainningTime(prevTime => prevTime - 50);
    }, 50);
    timerRef.current = timer;

    return () => clearInterval(timer);
  }, []);

  const remainningTimeFormat = (remainningTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000} value={remainningTime} /></p>
      <p>{remainningTimeFormat}</p>
    </Container>
  );
}

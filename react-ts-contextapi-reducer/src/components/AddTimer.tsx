import { useRef } from 'react';

import Button from './UI/Button.tsx';
import Form, { FormHandle } from './UI/Form.tsx';
import Input from './UI/Input.tsx';
import { type Timer, useTimersContext } from '../store/timers-context.tsx';

export default function AddTimer() {
  const form = useRef<FormHandle>(null);
  const timersCtx = useTimersContext();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as Timer;
    timersCtx.addTimer({
      duration: +extractedData.duration,
      name: extractedData.name
    });
    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
}

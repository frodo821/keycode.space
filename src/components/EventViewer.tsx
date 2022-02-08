import React from 'react';
import { Tooltip } from '@mui/material';
import './EventViewer.css';

interface Props {
  event: KeyboardEvent | null;
}

const EventViewer: React.FC<Props> = ({ event }) => {
  if (event === null) {
    return <div className="viewer no-events">Press any key to get JavaScript keycode</div>;
  }

  return (
    <div className="viewer">
      <div className="key-event">
        {event.code} (<Tooltip title={<span>
          <code className="inline">KeyboardEvent.keyCode</code> is now deprecated.
        </span>}><span>{event.keyCode}</span></Tooltip>)
      </div>
      <ul className="event-details">
        <li>
          <Tooltip title="the key name connected with the event"><div className="name">event.key</div></Tooltip>
          <div className="value">{event.key}</div>
        </li>
        <li>
          <Tooltip title={<>
            <code className='inline'>KeyboardEvent.code</code>
            replaces
            <code className='inline'>KeyboardEvent.keyCode</code>
          </>}><div className="name">event.code</div></Tooltip>
          <div className="value">{event.code}</div>
        </li>
        <li>
          <Tooltip title="key location on the keyboard"><div className="name">event.location</div></Tooltip>
          <div className="value">{event.location}</div>
        </li>
        <li>
          <Tooltip title={<>
            <code className='inline'>event.which</code> is now deprecated.
            Use <code className='inline'>event.code</code> instead.
          </>}><div className="name">event.which</div></Tooltip>
          <div className="value">{event.which}</div>
        </li>
      </ul>
      <ul className="event-modifiers">
        <Tooltip title={`shift key is ${event.shiftKey ? 'hold' : 'released'}`}>
          <li className={`key ${event.shiftKey ? 'hold' : 'released'}`}>Shift</li>
        </Tooltip>
        <Tooltip title={`control key is ${event.ctrlKey ? 'hold' : 'released'}`}>
          <li className={`key ${event.ctrlKey ? 'hold' : 'released'}`}>Ctrl</li>
        </Tooltip>
        <Tooltip title={`alt key is ${event.altKey ? 'hold' : 'released'}`}>
          <li className={`key ${event.altKey ? 'hold' : 'released'}`}>Alt</li>
        </Tooltip>
        <Tooltip title={`meta key is ${event.metaKey ? 'hold' : 'released'}`}>
          <li className={`key ${event.metaKey ? 'hold' : 'released'}`}>Meta</li>
        </Tooltip>
      </ul>
    </div>
  );
}

export default EventViewer;

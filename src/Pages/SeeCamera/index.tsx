import React, { useState, useRef } from "react";
import Peer from 'simple-peer';

const ObserverComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [signal, setSignal] = useState<string>("");

  const handleStartObserving = () => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
    });

    peer.on("signal", (data) => {
    });

    peer.on("stream", (stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });

    peer.signal(JSON.parse(signal));
  };

  return (
    <div>
      <textarea
        placeholder="Paste signal from computer here"
        onChange={(e) => setSignal(e.target.value)}
      />
      <button onClick={handleStartObserving}>Start Observing</button>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default ObserverComponent;

import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Typography, message } from "antd";
import { VideoCameraOutlined, StopOutlined } from '@ant-design/icons';
import { CameraContainer } from "./styled";
import Peer from 'simple-peer';

const { Title } = Typography;

const CameraComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [peer, setPeer] = useState<Peer.Instance | null>(null);
  const [peerSignal, setPeerSignal] = useState<string | null>(null);

  // Function to start the camera
  const startCamera = async () => {
    setLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      // Khởi tạo peer để truyền video
      const newPeer = new Peer({
        initiator: true, // Bạn là người khởi tạo kết nối
        stream: stream, // Truyền stream video
        trickle: false
      });

      // Khi nhận được tín hiệu từ peer, gửi nó đến người quan sát
      newPeer.on('signal', (data):any => {
        setPeerSignal(JSON.stringify(data)); // Lưu lại để gửi đến client khác
      });

      setPeer(newPeer);
      setIsCameraOn(true);
    } catch (error) {
      message.error("Error accessing the camera. Please allow camera permissions.");
      console.error("Error accessing the camera: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to stop the camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      let tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      if (peer) peer.destroy(); // Hủy peer khi dừng camera
      setIsCameraOn(false);
    }
  };

  useEffect(() => {
    // Clean up khi component bị unmount
    return () => stopCamera();
  }, []);

  return (
    <CameraContainer>
      <Card className="card-content">
        <Title level={4}>Camera Demo</Title>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px' }}
        />
        {isCameraOn ? (
          <>
            <Button type="primary" danger icon={<StopOutlined />} onClick={stopCamera}>
              Turn off Camera
            </Button>
            <div>
              <p>Send this signal to the observer device:</p>
              <textarea value={peerSignal || ''} readOnly style={{ width: '100%' }} />
            </div>
          </>
        ) : (
          <Button type="primary" icon={<VideoCameraOutlined />} onClick={startCamera} loading={loading}>
            Turn on Camera
          </Button>
        )}
      </Card>
    </CameraContainer>
  );
};

export default CameraComponent;

import { useParams } from 'react-router-dom';

export function RoomPage() {
  const { roomId } = useParams();

  return <h1>RoomPage {roomId}</h1>;
}

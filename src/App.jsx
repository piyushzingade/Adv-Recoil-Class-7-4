import './App.css';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './assets/atom';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networknotificationCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalnotificationAtomCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>
      <button>My network ({networknotificationCount >= 100 ? "99+" : networknotificationCount})</button>
      <button>Jobs ({jobAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>
      <button>Me ({totalnotificationAtomCount})</button>
    </div>
  );
}

export default App;

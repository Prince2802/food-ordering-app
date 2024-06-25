import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //check if online
  useEffect(() => {
    window.addEventListener('offline', () => {
      setOnlineStatus(false);
    });
    window.addEventListener('online', () => {
      setOnlineStatus(true);
    });
  }, []);
  //return the status boolean value
  return onlineStatus;
};
export default useOnlineStatus;

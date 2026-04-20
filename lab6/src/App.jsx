import { useState } from "react";

function App() {
  const [permission, setPermission] = useState(Notification.permission);

  // Ask permission
  const requestPermission = async () => {
    const result = await Notification.requestPermission();
    setPermission(result);
  };

  // Show notification
  const showNotification = () => {
    if (permission === "granted") {
      new Notification("🎉 Hello!", {
        icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
      });
    } else {
      alert("Please allow notifications first");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Lab 06 - Browser Notifications</h1>

      <p>Permission Status: {permission}</p>

      <button onClick={requestPermission}>
        Enable Notifications
      </button>

      <br /><br />

      <button onClick={showNotification}>
        Show Notification
      </button>
    </div>
  );
}

export default App;
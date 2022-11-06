// 当网络变化时反馈出来
// https://developer.mozilla.org/zh-CN/docs/Web/API/Network_Information_API
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection

const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const type = connection.effectiveType;

function updateConnectionStatus() {
  console.log("Connection type changed from " + type + " to " + connection.effectiveType);
  type = connection.effectiveType;
}

connection.addEventListener('change', updateConnectionStatus);

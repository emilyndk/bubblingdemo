const outerCircle = document.getElementById("outerCircle");
const middleCircle = document.getElementById("middleCircle");
const innerCircle = document.getElementById("innerCircle");
const eventMessage = document.getElementById("eventMessage");
const eventLog = document.getElementById("eventLog");

if (outerCircle && middleCircle && innerCircle && eventMessage && eventLog) {
  const labels = new Map([
    [outerCircle, "Outer circle"],
    [middleCircle, "Middle circle"],
    [innerCircle, "Inner circle"],
  ]);

  const showMessage = (handlerName, originalTargetName) => {
    eventMessage.textContent =
      `Handled by ${handlerName}. Original click was on ${originalTargetName}.`;
  };

  const appendLog = (text) => {
    const entry = document.createElement("li");
    entry.textContent = text;
    eventLog.appendChild(entry);
  };

  const onCircleClick = (event) => {
    const handlerName = labels.get(event.currentTarget) || "Unknown circle"; // The element that has the event listener attached
    const originalTargetName = labels.get(event.target) || "Unknown element"; // The element that was actually clicked

    // The target element runs first in bubbling order, so start a fresh log here.
    if (event.currentTarget === event.target) {
      eventLog.innerHTML = "";
    }

    showMessage(handlerName, originalTargetName);
    appendLog(`Handled by ${handlerName}`);
  };

  outerCircle.addEventListener("click", onCircleClick);
  middleCircle.addEventListener("click", onCircleClick);
  innerCircle.addEventListener("click", onCircleClick);
}

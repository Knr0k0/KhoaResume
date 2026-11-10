const resumeDialog = document.querySelector("#resume-dialog");
const resumeTrigger = document.querySelector(".resume-trigger");

resumeTrigger?.addEventListener("click", (event) => {
  event.preventDefault();

  if (resumeDialog instanceof HTMLDialogElement) {
    resumeDialog.showModal();
  }
});

resumeDialog?.addEventListener("click", (event) => {
  if (event.target === resumeDialog) {
    resumeDialog.close();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && resumeDialog instanceof HTMLDialogElement && resumeDialog.open) {
    resumeDialog.close();
  }
});

const init = () => {
    render();

    const form = addEventListener("submit", (event) => {
      event.preventDefault();

      const newTaskContent = document.querySelector(".js-newTask").value.trim();

      if (newTaskContent === "") {
        return;
      }

      tasks.push({
        content: newTaskContent,
      });
      render();
    });

};

init();
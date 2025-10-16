import Controller from "./controller.js";
import View from "./view.js";

class App {
  async run() {
    const userInput = await View.getUserInput();
    Controller.run(userInput);
  }
}

export default App;

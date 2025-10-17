import Controller from "./controller/index.js";
import View from "./View/index.js";

class App {
  async run() {
    const userInput = await View.getUserInput();
    const output = Controller.run(userInput);
    View.printResult(output);
  }
}

export default App;

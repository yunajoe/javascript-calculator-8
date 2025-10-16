import View from "./view.js";

class App {
  async run() {
    const userInput = await View.getUserInput();
  }
}

export default App;

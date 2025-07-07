# Beat Mix

## Project Overview

This **Beat Mix** project is a dynamic music-making application that I developed as part of Codecademy's **"Create a Back-End App with JavaScript"** skill path. The primary goal was to build a functional beat machine capable of looping through a 16-step grid across four different drum types.

The application allows users to:
* Activate and deactivate individual drum pads on a 16-step grid.
* Control four distinct drum types: kicks, snares, hi-hats, and ride cymbals.
* Manipulate drum patterns by inverting or clearing entire rows.
* Clear the entire board to start fresh.
* **Interact with a server to save and retrieve custom drum presets**, demonstrating full-stack interaction.

This project provided valuable hands-on experience in both front-end JavaScript logic for interactive UIs and back-end API development with Node.js and Express for data persistence.

You can watch a video demonstration of the final application's capabilities [here](https://s3.amazonaws.com/codecademy-content/programs/build-apis/solution-videos/BeatMix480.mov).

---

## How to Set Up and Run

To explore this project locally, follow these steps:

1.  **Clone the Repository:** Start by cloning this repository to your local machine:
    ```bash
    git clone https://github.com/Robson16/beat-mix.git
    ```
2.  **Navigate to the Project Directory:** Change into the newly cloned project folder:
    ```bash
    cd beat-mix
    ```
3.  **Install Dependencies:** Once inside the project directory, install all necessary Node.js dependencies:
    ```bash
    npm install
    ```
4.  **Start the Server:** After dependencies are installed, you can start the development server:
    ```bash
    npm run start
    # Or, for live reloading during development:
    # npm run dev
    ```
    You should see `Server listening on port 4001` in your terminal, indicating the server is running. Keep this terminal window open as the server must be active for the application to function correctly.

5.  **Open the Application:** Open **index.html** in your web browser. The application is designed to run in modern browsers like **Google Chrome** (version 60+) or **Mozilla Firefox** (version 55+).

---

## Implementation Highlights

This project involved implementing logic in both the client-side (front-end) and server-side (back-end).

### Client-Side Logic (`public/js/script.js`)

I implemented the core beat-making functionality, including:

* **Drum Pad Arrays**: Four arrays (`kicks`, `snares`, `hiHats`, `rideCymbals`), each of length `16` and initialized with `false` values, representing the drum grid.
* **`toggleDrum(arrayName, index)`**: A function to flip the boolean value of a specific drum pad in its respective array, allowing users to activate or deactivate beats.
* **`clear(arrayName)`**: A function to reset all pads in a given drum array to `false`.
* **`invert(arrayName)`**: A function to flip the boolean state of all pads in a specific drum array.
* **`getNeighborPads(x, y, size)`**: As a bonus feature, this function returns the coordinates of immediate horizontal and vertical neighbors for a given position on a grid, demonstrating logic for spatial relationships.

### Server-Side Logic (`presetHandler.js`)

A significant part of this project was building the API to manage drum presets. This involved:

* **`presetHandler(method, index, newPresetArray)`**: This central function handles HTTP `'GET'` and `'PUT'` requests for drum presets.
    * It returns an array containing an **HTTP status code** (`200` for OK, `404` for Not Found, `400` for Bad Request).
    * For valid `'GET'` requests, it also returns the requested preset array.
    * For valid `'PUT'` requests, it saves the `newPresetArray` at the specified `index` and returns the saved preset.
    * **Note**: When testing changes in `presetHandler.js`, you'll need to restart the server (`Ctrl + C` then `npm run start`) for changes to take effect.

---

## Testing

A comprehensive testing suite is provided to ensure all functionality works as expected and handles edge cases.

To run the tests:

1.  Ensure you have followed the "How to Set Up and Run" steps to install dependencies.
2.  In your terminal from the project's root directory, run:
    ```bash
    npm run test
    ```
    You'll see a detailed list of tests, indicating which passed and which failed, along with specific error messages for failures. Running these tests iteratively while developing was essential for verifying correct implementation and catching bugs early.

---

## License

This project is licensed under the MIT License.
Developed by Robson16.
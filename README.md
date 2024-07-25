# About
This is my portfolio site built with Svelte and TailwindCSS, which has some dependencies and does not use any UI library.

---
## How to run
Clone this repository:
```bash
git clone https://github.com/cielaton/Portfolio-site.git
```
Navigate to the project directory, then install the dependencies:
```bash
yarn install
```
Run the project:
```bash
yarn run dev
```
## Project structure
- `src`: Source code of the application.
    - `components`: The page components of the root route.
        - `Header`, `Main`, `Footer`: Self explanation.
        - `Main.components`: Components of Main.
            - `Introduction`: Introduction page.
            - `Tools`: My favourite tools to utilize in various fields.
            - `Projects`: A hall of my works.
            - `About me`: How i describe myself.
            - `Projects.components`: Components that made up `Projects` page.
    - `routes`: Handles routing mechanism in Svelte.
    - `lib`: Store external library (optional).

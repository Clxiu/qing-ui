import "../src/components/Button/Button.css";
import "../src/components/Clock/Clock.css";
import "../src/components/TodoList/TodoList.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  previewBody: `
    <div style="height: 600px; width: 600px;">
      <story />
    </div>
  `,
}
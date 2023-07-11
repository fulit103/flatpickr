import { Plugin } from "../../types/options";

type Option = {
  value: string;
  label: string;
};

function quickSelectOptions(): Plugin {
  return function (fp) {
    function buildRadioButtons(name: string, options: Option[]): HTMLElement {
      const container = document.createElement("div");
      container.className = "radio-button-list";

      options.map((option) => {
        const optionContainer = document.createElement("div");
        optionContainer.style.display = "flex";
        optionContainer.style.alignItems = "center";
        optionContainer.style.marginBottom = "10px";

        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.name = name;
        radioButton.value = option.value;
        radioButton.id = `radio-${option.value}`;

        const label = document.createElement("label");
        label.htmlFor = `radio-${option.value}`;
        label.textContent = option.label;
        label.style.marginLeft = "5px";

        // Append the radio button and label to the optionContainer
        optionContainer.appendChild(radioButton);
        optionContainer.appendChild(label);

        radioButton.addEventListener("change", () => {
          fp.setDate(["2023-07-01", "2023-07-10"]);
        });

        // Prepend the optionContainer to the container
        container.prepend(optionContainer);
      });

      return container;
    }

    return {
      onReady() {
        const options: Option[] = [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          // Add more options as needed
        ];

        const radioButtonList = buildRadioButtons("myRadioButton", options);

        fp.calendarContainer.prepend(radioButtonList);

        fp.loadedPlugins.push("quickSelectOptions");
      },
    };
  };
}

export default quickSelectOptions;

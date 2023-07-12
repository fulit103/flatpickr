(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.quickSelectOptionsPlugin = factory());
}(this, (function () { 'use strict';

  function quickSelectOptions() {
      return function (fp) {
          function buildRadioButtons(name, options) {
              var container = document.createElement("div");
              container.className = "radio-button-list";
              options.map(function (option) {
                  var optionContainer = document.createElement("div");
                  optionContainer.style.display = "flex";
                  optionContainer.style.alignItems = "center";
                  optionContainer.style.marginBottom = "10px";
                  var radioButton = document.createElement("input");
                  radioButton.type = "radio";
                  radioButton.name = name;
                  radioButton.value = option.value;
                  radioButton.id = "radio-" + option.value;
                  var label = document.createElement("label");
                  label.htmlFor = "radio-" + option.value;
                  label.textContent = option.label;
                  label.style.marginLeft = "5px";
                  // Append the radio button and label to the optionContainer
                  optionContainer.appendChild(radioButton);
                  optionContainer.appendChild(label);
                  radioButton.addEventListener("change", function () {
                      fp.setDate(["2023-07-01", "2023-07-10"]);
                  });
                  // Prepend the optionContainer to the container
                  container.prepend(optionContainer);
              });
              return container;
          }
          return {
              onReady: function () {
                  var options = [
                      { value: "option1", label: "Option 1" },
                      { value: "option2", label: "Option 2" },
                  ];
                  var radioButtonList = buildRadioButtons("myRadioButton", options);
                  fp.calendarContainer.prepend(radioButtonList);
                  fp.loadedPlugins.push("quickSelectOptions");
              },
          };
      };
  }

  return quickSelectOptions;

})));

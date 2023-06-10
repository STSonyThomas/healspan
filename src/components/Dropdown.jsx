import React, { useState } from "react";

function DropdownWithCheckboxes() {
  const [selectedOptions, setSelectedOptions] = useState([
    { value: "Initial Authorization", isChecked: false },
    { value: "Enhancement", isChecked: false },
    { value: "Discharge", isChecked: false },
    { value: "Final Authorization", isChecked: false }
  ]);
  const [selectedStatusOptions, setSelectedStatusOptions] = useState([
    { value: "Pending Approval", isChecked: false },
    { value: "TPA Query", isChecked: false },
  ]);

  const handleOptionChange = ({ value, isChecked }) => {
    setSelectedOptions((prevItems) => {
      return prevItems.map((item) => {
        if (item.value === value) {
          item.isChecked = isChecked;
        }
        return item;
      });
    });
    console.log(value, isChecked);
    console.log(selectedOptions);
  };
  const handleStatusOptionChange = ({ value, isChecked }) => {
    setSelectedStatusOptions((prevItems) => {
      return prevItems.map((item) => {
        if (item.value === value) {
          item.isChecked = isChecked;
        }
        return item;
      });
    });
    console.log(value, isChecked);
    console.log(selectedStatusOptions);
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="dropdown">
          <button
            class="btn btn-lg btn-light text-black dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <h2 class="heading__stage">Stage</h2>
            {selectedOptions.map((option, index) => {
              return (
                <div class="dropdown-item" key={index}>
                  <input
                    type="checkbox"
                    id={option.value}
                    value={option.value}
                    onChange={() => {
                      handleOptionChange({
                        ...option,
                        isChecked: !option.isChecked,
                      });
                    }}
                  />
                  <label htmlFor={option.value}>{option.value}</label>
                </div>
              );
            })}
            <h2 class="heading__stage">Status</h2>
            {selectedStatusOptions.map((option, index) => {
              return (
                <div class="dropdown-item" key={index}>
                  <input
                    type="checkbox"
                    id={option.value}
                    value={option.value}
                    onChange={() => {
                      handleStatusOptionChange({
                        ...option,
                        isChecked: !option.isChecked,
                      });
                    }}
                  />
                  <label htmlFor={option.value}>{option.value}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DropdownWithCheckboxes;

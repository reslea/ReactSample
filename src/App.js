import React from 'react';
import "./App.css";

const App = () => (
  <div className="App">
    <h1>Hello ItStep!</h1>
    <h2>Start editing to see some magic happen!</h2>
    <PersonForm
      fieldSet={["First Name", "Last Name", "Address", "Phone number"]}
    />
  </div>
);

class PersonForm extends React.Component {
  constructor(props) {
    super(props);

    const fieldsObj = {};
    props.fieldSet.forEach(v => {
      Object.assign(fieldsObj, { [v]: "" });
    });

    this.onChange.bind(this);

    this.state = {
      fields: fieldsObj
    };
  }

  onChange(event) {
    event.preventDefault();
    const $this = this;
    const inputValue = event.currentTarget.value;
    const inputId = event.currentTarget.id;
    debugger;
    const newState = Object.assign($this.state, { [inputId]: inputValue });
    this.setState(newState);
  }

  render() {
    const { fields } = this.state;
    const isSubmitEnabled =
      Object.keys(fields).filter(f => this.state[f] === "").length === 0;
    debugger;
    return (
      <div>
        <div>
          <div>
            {Object.keys(fields).map(f => (
              <InputWithLabel
                fieldName={f}
                value={this.state[f]}
                onChange={this.onChange}
              />
            ))}
          </div>
        </div>
        <button type="submit" disabled={!isSubmitEnabled}>
          Submit
        </button>
      </div>
    );
  }
}

export const InputWithLabel = props => {
  const { fieldName, value, onChange } = props;
  return (
    <div>
      <label for={fieldName}>{fieldName}</label>
      <input
        id={fieldName}
        type="text"
        placeholder={fieldName}
        value={value}
        onChange={e => onChange(e)}
      />
    </div>
  );
};

export default App;

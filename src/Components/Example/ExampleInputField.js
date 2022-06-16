import React,{useState} from 'react';

const initialValues = {
  company: '',
  position: '',
  link: '',
  date: '',
  note: '',
};
function ExampleInputField (props) {
  const [values, setValues] = useState (initialValues);

 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div>
      <form>
        <input
          value={values.company}
          onChange={handleInputChange}
          name="company" //IMPORTANT
          label="Company"
        />
        <input
          value={values.position}
          onChange={handleInputChange}
          name="position"
          label="Job Title"
        />
        // ... Rest of the input fields
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default ExampleInputField;

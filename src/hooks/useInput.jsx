export const useInput = (setData) => {
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    handleChange
  }
}

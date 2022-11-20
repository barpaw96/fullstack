
const Valid = (values ) => {

    let errors={};
    
    if(!values.name){
        errors.name="Name is empty"
    }else if(values.name.length <3){
        errors.name="Name not is size"
    }
    if (!values.username){
        errors.username="Name is empty"
    }

  return errors;
};

export default Valid;

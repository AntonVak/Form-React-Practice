import { useForm, useWatch } from "react-hook-form";



const Display = ({ control, index }) => {
    const data = useWatch({
      control,
      name: `phoneNumbers.${index}`
    });
    return <p>{data?.phoneNumbers}</p>;
   
  };
  
  const Edit = ({ update, index, value, control }) => {
    const { register } = useForm({
      defaultValues: value
    });
  
    return (
      <div>
        <Display control={control} index={index} />
        
        <input
          
          {...register(`phoneNumbers`)}
        />
  
       
      </div>
    );
  };

  export default Edit;
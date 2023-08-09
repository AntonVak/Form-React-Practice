import { useForm, useWatch } from "react-hook-form";



const Display = ({ control, index }) => {
    const data = useWatch({
      control,
      name: `phNumbers.${index}`
    });
    console.log(data);
    return <p>{data?.phNumbers}</p>;
  };
  
  const Edit = ({ update, index, value, control }) => {
    const { register, handleSubmit } = useForm({
      defaultValues: value
    });
  
    return (
      <div>
        <Display control={control} index={index} />
        
        <input
          placeholder="phNumbers"
          {...register(`phNumbers`)}
        />
  
       
      </div>
    );
  };

  export default Edit;
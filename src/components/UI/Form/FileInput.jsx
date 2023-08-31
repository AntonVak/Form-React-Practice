import { List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";

const FileInput = ({ name, control }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper variant="outlined" {...getRootProps()}>
                {/* <CloudUpLoad/> */}
                <input name={name} onBlur={onBlur} {...getInputProps} />
                <p>Drag n drop files here</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((file, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                    {/* <InsertDriveFil/> */}
                </ListItemIcon>
                <ListItemText primary={file.name} secondary={file.size}></ListItemText>
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  );
};

export default FileInput;

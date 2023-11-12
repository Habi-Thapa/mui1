import { Autocomplete, Grid, InputLabel, TextField } from "@mui/material";
const companyList = [
  { id: 1, name: "a" },
  { id: 2, name: "ab" },
  { id: 3, name: "abc" },
  { id: 4, name: "abde" },
  { id: 5, name: "abooeu" },
];
const Autocompletea = ({ onChange, value, onChangeTop, name }) => {
  return (
    <>
      <Grid item xs={12} md={4}>
        <InputLabel>Sold To</InputLabel>
        <Autocomplete
          disablePortal
          id="soldto_name"
          options={companyList}
          getOptionLabel={(option) => option.name}
          onChange={(event, newValue) => {
            onChangeTop(newValue);
          }}
          inputValue={value}
          renderInput={(params) => (
            <TextField
              {...params}
              // onChange={onChange}
              // value={value}
              // variant="outlined"
              // name={name}
              // label="Company"
            />
          )}
        />
      </Grid>
    </>
  );
};

export default Autocompletea;

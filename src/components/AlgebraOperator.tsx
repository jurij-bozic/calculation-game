import { Typography } from "@mui/material";

export const AlgebraOperator: React.FunctionComponent<{ operator: string }> = ({ operator }) => {
  return (
      <Typography sx={{
          fontSize: 30
        }}
        className='number-box'>
        { operator }
      </Typography>
  );
};
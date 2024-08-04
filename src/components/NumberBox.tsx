import { Box, Typography } from "@mui/material";

export const NumberBox: React.FunctionComponent<{ numberToSum: number, boxSize: number, isCorrect?: boolean | null }> = ({ numberToSum, boxSize, isCorrect }) => {
  return (
    <div>
      <Box
        sx={{
          width: boxSize,
          height: boxSize,
          borderRadius: 1,
          bgcolor: (isCorrect == null ? '#007FFF' : ( isCorrect ? 'green' : 'red')),
          marginRight: '20px',
          marginLeft: '20px',
          '&:hover': {
            bgcolor: 'grey'
          }
        }}
        className='number-box'
        role="number-display"
      >
        <Typography
          sx={{ fontSize: 30}}
        >
          {numberToSum}
        </Typography>
      </Box>
    </div>
  );
};
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: 'auto',
  height: '2.68rem',
  borderRadius: '3.81rem',
  fontWeight: 600,
  fontSize: '0.87rem',
  lineHeight: '100%',
  letterSpacing: '0%',
  textAlign: 'center',
  verticalAlign: 'middle',
  color: theme.palette.custom.white,
  backgroundColor: theme.palette.custom.blueLobby,
  '&:hover': {
    backgroundColor: theme.palette.custom.blueLobbyHover,
  },
  '&:disabled': {
    opacity: '25%'
  },
}));

export default PrimaryButton;
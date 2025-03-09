import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const SecondaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: 'auto',
  height: '2.68rem',
  borderRadius: '3.81rem',
  fontWeight: 600,
  fontSize: '0.87rem',
  lineHeight: '100%',
  letterSpacing: '0%',
  textAlign: 'center',
  verticalAlign: 'middle',
  color: theme.palette.custom.gray1,
  backgroundColor: theme.palette.custom.white,
  border: `1px solid ${theme.palette.custom.gray1}`,
  '&:hover': {
    backgroundColor: theme.palette.custom.gray4,
  },
  '&:disabled': {
    opacity: '25%'
  },
}));

export default SecondaryButton;

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';

// Componente de alerta personalizado
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// Cria o contexto do Snackbar
const SnackbarContext = React.createContext<{
  showSnackbar: (message: string, severity?: AlertProps['severity']) => void;
}>({
  showSnackbar: () => { },
});

// Hook personalizado para usar o Snackbar
export const useSnackbar = () => React.useContext(SnackbarContext);

// Provedor do Snackbar
export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [severity, setSeverity] = React.useState<AlertProps['severity']>('success');

  const showSnackbar = (text: string, severity: AlertProps['severity'] = 'success') => {
    setMessage(text);
    setSeverity(severity);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={5000} // Fecha automaticamente após 5 segundos
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
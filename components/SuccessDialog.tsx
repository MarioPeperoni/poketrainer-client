import { Button, Dialog, DialogActions, DialogTitle, Stack } from '@mui/material';

interface SuccessDialogProps {
  open: boolean;
  onClose: () => void;
}

function SuccessDialog(props: SuccessDialogProps) {
  return (
    <Dialog {...props}>
      <Stack className="w-95 h-44 flex items-center justify-center">
        <DialogTitle className="text-4xl">Success</DialogTitle>
        <DialogActions>
          <Button onClick={props.onClose} variant="primary">
            Reset form
          </Button>
        </DialogActions>
      </Stack>
    </Dialog>
  );
}

export default SuccessDialog;

import { Chip } from '@mui/material';

interface TypeBadgeProps {
  type: string;
}

function TypeBadge({ type }: TypeBadgeProps) {
  return <Chip label={type} className="bg-primary-light/25" />;
}

export default TypeBadge;

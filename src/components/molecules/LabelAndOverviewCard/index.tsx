import { Card, CardActionArea, CardHeader } from "@mui/material";

type Props = {
  title: string;
  label: string;
  icon: JSX.Element;
  maxWidth?: number;
  onClick?: () => void;
};

const LabelAndOverviewCard: React.FC<Props> = ({
  title,
  label,
  icon,
  maxWidth = 300,
  onClick,
}) => {
  return (
    <Card sx={{ maxWidth: maxWidth }} onClick={onClick}>
      <CardActionArea>
        <CardHeader avatar={icon} title={title} subheader={label} />
      </CardActionArea>
    </Card>
  );
};

export default LabelAndOverviewCard;

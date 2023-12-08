import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CardFunc = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeadernp
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Make your own burger app"
        subheader="December, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image={require("./burger.png")}
        alt="Burger site"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This project was a long jump for me, since I haven't had experience
          with Full-Stack development, but I took the challange and managed,
          somehow.
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CardFunc;

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

export default function Header({ title, bgImage, buttonContent, onClick }) {
  return (
    <MKBox
      minHeight="20rem"
      width="100%"
      sx={{
        backgroundImage: ({
          functions: { linearGradient, rgba },
          palette: { gradients },
        }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
          <MKTypography
            variant="h1"
            color="white"
            mt={-2}
            mb={1}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            {title}
          </MKTypography>
          {buttonContent && (
            <MKButton
              color="default"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
              onClick={onClick}
            >
              {buttonContent}
            </MKButton>
          )}
        </Grid>
      </Container>
    </MKBox>
  );
}

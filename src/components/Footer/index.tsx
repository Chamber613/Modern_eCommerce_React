import { Link as RouterLink } from "react-router-dom";

// Styles
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import theme from "../../theme";

// Data
import footerItems from "../../constants/footer.json";

const Footer = () => {
  const renderFooterItems = () => {
    return footerItems.map((item) => (
      <Grid
        item
        key={item.title}
        xs={12}
        xs350={6}
        sm700={4}
        lg={3}
        xl={2}
        sx={{
          alignItems: "center",
          justifyContent: "flex-start",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "1rem",
            fontWeight: theme.fontWeight.semiBold,
            marginBottom: { xs: "0.625rem", md: "28px" },
            width: "9.375rem",
          }}
        >
          {item.title}
        </Typography>
        <Stack sx={{ rowGap: "0.625rem", width: "9.375rem" }}>
          {item.children.map((child) => (
            <Typography
              component={RouterLink}
              to={child.link}
              key={child.name}
              sx={{
                fontSize: "0.81rem",
                fontWeight: theme.fontWeight.regular,
                color: "#000000",
                textDecoration: "none",
                "&:hover": { color: "#FBB03B" },
              }}
            >
              {child.name}
            </Typography>
          ))}
        </Stack>
      </Grid>
    ));
  };
  return (
    <>
      <Grid container rowGap="2.5rem">
        {renderFooterItems()}
        <Grid
          item
          sx={{
            rowGap: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          xs={12}
          xs350={6}
          sm700={4}
          lg={3}
          xl={2}
        >
          {[
            {
              link: "",
              imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/react-e-commerce-f354a.appspot.com/o/common%2Fgoogle-play-badge.webp?alt=media&token=e1bc73e3-016c-49bd-9cf8-71e224c5651c",
              altText: "Google Play Badge",
            },
            {
              link: "",
              imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/react-e-commerce-f354a.appspot.com/o/common%2Fapp-store-badge.webp?alt=media&token=d72ada1a-922a-411a-af99-1b0bea9d4e48",
              altText: "Apple Store Badge",
            },
          ].map((item) => (
            <Link
              key={item.imageUrl}
              to={item.link}
              component={RouterLink}
              sx={{
                "&:hover": {
                  transform: "scale(1.2)",
                  transition: "transform 300ms linear",
                },
              }}
            >
              <img src={item.imageUrl} alt={item.altText} loading="lazy" />
            </Link>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          xs350={6}
          sm700={4}
          lg={3}
          xl={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "22.7px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              columnGap: "41px",
              width: "155px",
            }}
          >
            <Link
              to=""
              sx={{ color: "black", "&:hover": { color: "#FF6666" } }}
              component={RouterLink}
            >
              <Facebook />
            </Link>
            <Link
              to=""
              sx={{ color: "black", "&:hover": { color: "#FF6666" } }}
              component={RouterLink}
            >
              <Twitter />
            </Link>
            <Link
              to=""
              sx={{ color: "black", "&:hover": { color: "#FF6666" } }}
              component={RouterLink}
            >
              <LinkedIn />
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              columnGap: "41px",
              width: "155px",
            }}
          >
            <Link
              to=""
              sx={{ color: "black", "&:hover": { color: "#FF6666" } }}
              component={RouterLink}
            >
              <Instagram />
            </Link>
            <Link
              to=""
              sx={{ color: "black", "&:hover": { color: "#FF6666" } }}
              component={RouterLink}
            >
              <YouTube />
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.875rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.75rem",
            fontWeight: theme.fontWeight.regular,
            color: "#AEAEAE",
            marginTop: "0.93rem",
            width: "max-content",
            "& a": {
              fontWeight: theme.fontWeight.semiBold,
            },
          }}
        >
          DESIGN BY{" "}Malcolm
          {" "}
          - © 2020. ALL RIGHTS RESERVED.
        </Typography>
        <Typography
          sx={{
            fontSize: "0.75rem",
            fontWeight: theme.fontWeight.regular,
            color: "#AEAEAE",
            marginTop: "0.93rem",
            width: "max-content",
            "& a": {
              fontWeight: theme.fontWeight.semiBold,
            },
          }}
        >
          CODED BY{" "}
          <a
            href="https://github.com/Chamber613/Chamber613"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Chamber
          </a>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        height: 180,
        bgcolor: "inherit",
        px: "60px",
      }}
    >
      <Divider
        component="div"
        sx={{
          width: "100%",
          "::before, ::after": { top: "0%" },
        }}
      >
        <Typography color="grey.700" variant="h6" component="span">
          Developed by{" "}
          <Link
            target="_blank"
            underline="hover"
            sx={{ color: "text.primary", fontWeight: 600 }}
            href="https://github.com/mzaddoussi"
          >
            Mostafa Zaddoussi
          </Link>
        </Typography>
      </Divider>
      <Typography color="grey.700" variant="body2">
        © {year} Netflix Clone · Built with React, TypeScript & TMDB
      </Typography>
    </Box>
  );
}

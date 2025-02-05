import { Container, Grid2, TextField, Button } from "@mui/material";

import Link from "@mui/material/Link";

const LoginPage = () => {
  return (
    <Container maxWidth="xs">
      <h1>Login Page</h1>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12 }}>
          <TextField label="Username" variant="outlined" fullWidth required />
        </Grid2>

        <Grid2 size={{ xs: 12 }}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            Sign In
          </Button>
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <Button variant="outlined" fullWidth>
            Sign In with Google
          </Button>
        </Grid2>

        <Grid2 size={{ xs: 12 }}>
          <Button variant="outlined" fullWidth>
            Sign In with GitHub
          </Button>
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <Link href="#">Forgot Password?</Link>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default LoginPage;

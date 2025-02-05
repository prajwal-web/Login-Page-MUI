import { Container, Grid, TextField, Button } from "@mui/material";
import Link from "@mui/material/Link";

const LoginPage = () => {
  return (
    <Container maxWidth="xs">
      <h1>Login Page</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Username" variant="outlined" fullWidth required />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            Sign In
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" fullWidth>
            Sign In with Google
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button variant="outlined" fullWidth>
            Sign In with GitHub
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Link href="#">Forgot Password?</Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;

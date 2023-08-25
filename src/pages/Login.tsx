import { PageWrapper } from "../components/PageWrapper";
import { useMutation } from "@tanstack/react-query";
import { postLoginRequest } from "../services/AuthService";
import { saveTokens } from "../utils/StorageHelper";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { colors } from "../styles/Colors";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import { CustomButton } from "../components/Atomic/CustomButton";
import DisplayLottie from "../components/displayLottie/DisplayLottie";
import login from "../assets/lottieFiles/login.json";

export function Login() {
  const loginService = useMutation(postLoginRequest, {
    onSuccess: (data) => {
      saveTokens(data);
    },
  });

  return (
    <Stack
      sx={{
        bgcolor: colors.primary,
        height: "100%",
        width: "100%",
        flexDirection: "row",
      }}
    >
      <Stack width={"50%"}>
        <DisplayLottie animationData={login} />
      </Stack>
      <Stack sx={{ placeItems: "center", bgcolor: "colors.secondary" }}>
        <form
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.secondary,
          }}
        >
          <Stack height="90%" spacing={3} justifyContent="center">
            <FormLabel
              sx={{
                fontFamily: "Roboto",
                fontSize: "28px",
                fontWeight: 600,
                lineHeight: "40px",
                letterSpacing: "0.1px",
                textAlign: "left",
                // color: colors.primary,
              }}
            >
              Welcome!
            </FormLabel>
            <FormControl>
              <Typography variant="body2">
                Please enter the credentials you received from the email invite.
              </Typography>
              <TextField
                margin="normal"
                // error={errors.email ? true : false}
                required
                placeholder="Email Address *"
                variant="outlined"
                size="small"
                InputProps={{
                  name: "email",
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon />
                    </InputAdornment>
                  ),
                }}
                // {...register("email", {
                //   required: "Email Address is required",
                //   pattern: EMAIL_VALIDATION_REGEX,
                // })}
                // helperText={
                //   errors.email && errors.email?.type === "pattern"
                //     ? "Invalid email"
                //     : errors.email?.message
                // }
              />
              <OutlinedInput
                required
                // error={errors.password ? true : false}
                // type={showPassword ? "text" : "password"}
                placeholder="Password *"
                size="small"
                inputProps={{
                  name: "password",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                    </IconButton>
                  </InputAdornment>
                }
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
                // {...register("password", { required: "Password is required" })}
              />
              {/* {errors.password && ( */}
              <FormHelperText error>
                {/* {errors.password?.message} */}
              </FormHelperText>
              {/* )} */}
              <Stack
                direction="row"
                justifyContent="space-between"
                boxSizing="border-box"
                alignItems="center"
                marginTop="1em"
              >
                <FormControlLabel control={<Checkbox />} label="Remember me" />
                <Typography variant="h6">Forgot Password?</Typography>
              </Stack>
            </FormControl>
            {loginService.isError && (
              <Alert severity="error">Incorrect email and password.</Alert>
            )}
            <CustomButton
              variant="contained"
              sx={{
                width: "100%",
                height: "2.5rem",
                // backgroundColor: colors.primary,
                // ":hover": {
                //   backgroundColor: colors.primaryHover,
                //   boxShadow: "none",
                // },
                boxShadow: "none",
                border: "none",
              }}
              // onClick={handleSubmit(onSubmit)}
              loading={loginService.isLoading}
            >
              Log In
            </CustomButton>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
}

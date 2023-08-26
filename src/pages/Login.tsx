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
        bgcolor: colors.black1.black_100,
        height: "100%",
        width: "100%",
        flexDirection: "row",
      }}
    >
      <Stack width={"50%"}>
        <DisplayLottie animationData={login} />
      </Stack>
      <Stack sx={{ placeItems: "center" }}>
        <form
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack height="90%" spacing={3} justifyContent="center">
            <FormLabel
              sx={{
                fontSize: "28px",
                lineHeight: "40px",
                letterSpacing: "0.1px",
                textAlign: "left",
                color: colors.textColor,
              }}
            >
              Welcome!
            </FormLabel>
            <FormControl>
              <TextField
                margin="normal"
                // error={errors.email ? true : false}
                required
                placeholder="Email Address *"
                sx={{
                  bgcolor: colors.boxColor,
                  borderRadius: "30px",
                }}
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
                sx={{
                  bgcolor: colors.boxColor,
                  borderRadius: "30px",
                }}
                placeholder="Password *"
                size="small"
                inputProps={{
                  name: "password",
                }}
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
                backgroundColor: colors.buttonColor,
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

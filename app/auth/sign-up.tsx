// app/auth/sign-up.tsx
import { Link, Stack } from "expo-router";
import { Formik } from "formik";
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FormTextInput from "../../components/FormTextInput";
import PasswordInput from "../../components/PasswordInput";
import SubmitButton from "../../components/SubmitButton";
import { signUpSchema } from "../../validation/authSchemas";

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      {/* Configure header for this screen */}
      <Stack.Screen options={{ title: "Sign Up" }} />

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signUpSchema}
        validateOnChange
        validateOnBlur
        validateOnMount
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            Keyboard.dismiss();
            setSubmitting(true);
            // Mock API sign-up
            await new Promise((res) => setTimeout(res, 1200));
            Alert.alert("Account Created", `Welcome, ${values.fullName}!`);
            resetForm();
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
          isSubmitting,
          resetForm,
        }) => (
          <View style={{ width: "100%" }}>
            <FormTextInput
              label="Full Name"
              placeholder="Jane Doe"
              iconName="person"
              value={values.fullName}
              onChangeText={handleChange("fullName")}
              onBlur={handleBlur("fullName")}
              error={errors.fullName}
              touched={touched.fullName}
            />

            <FormTextInput
              label="Email"
              placeholder="jane@example.com"
              iconName="email"
              keyboardType="email-address"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
            />

            <PasswordInput
              label="Password"
              placeholder="Minimum 6 characters"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
            />

            <PasswordInput
              label="Confirm Password"
              placeholder="Re-enter your password"
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
            />

            <View style={{ height: 12 }} />

            <SubmitButton
              title="Create Account"
              onPress={() => handleSubmit()}
              disabled={!isValid}
              loading={isSubmitting}
            />

            <View style={{ height: 10 }} />
            <SubmitButton
              title="Reset"
              onPress={() => resetForm()}
              disabled={isSubmitting}
            />

            <View style={{ height: 16 }} />
            {/* Link to Sign-In (text link) */}
            <Link href="/auth/sign-in" asChild>
              <TouchableOpacity accessibilityRole="button">
                <Text style={styles.linkText}>
                  Already have an account? Sign in →
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9fafb" },
  linkText: { color: "#4f46e5", fontWeight: "600", textAlign: "center" },
});

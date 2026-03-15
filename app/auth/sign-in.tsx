import { Link, Stack, useRouter } from "expo-router";
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
import { signInSchema } from "../../validation/authSchemas";

export default function SignInScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign In" }} />

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signInSchema}
        validateOnChange
        validateOnBlur
        validateOnMount
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            Keyboard.dismiss();
            setSubmitting(true);
            await new Promise((res) => setTimeout(res, 1200));
            resetForm();
            router.navigate("/employee");
            Alert.alert(`Welcome! Now you can fill the Employee Form`);
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

            <View style={{ height: 12 }} />

            <SubmitButton
              title="Sign In"
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
            <Link href="/auth/sign-up" asChild>
              <TouchableOpacity accessibilityRole="button">
                <Text style={styles.linkText}>Create New Account →</Text>
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

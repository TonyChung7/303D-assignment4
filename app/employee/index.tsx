// app/employee/index.tsx
import { Stack } from "expo-router";
import { Formik } from "formik";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import FormTextInput from "../../components/FormTextInput";
import SubmitButton from "../../components/SubmitButton";
import { employeeSchema } from "../../validation/employeeSchema";

export default function EmployeeFormScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Configure screen title via Stack.Screen in Expo Router */}
      <Stack.Screen options={{ title: "Employee Form" }} />

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          position: "",
          employeeId: "",
        }}
        validationSchema={employeeSchema}
        validateOnChange
        validateOnBlur
        validateOnMount // Disable submit initially until valid
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          try {
            setSubmitting(true);
            // Mock API call
            await new Promise((res) => setTimeout(res, 1200));
            Alert.alert("Submitted", JSON.stringify(values, null, 2));
            resetForm(); // Optional: reset after success
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

            <FormTextInput
              label="Phone"
              placeholder="+1 403 555 1234"
              iconName="phone"
              keyboardType="phone-pad"
              value={values.phone}
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              error={errors.phone}
              touched={touched.phone}
            />

            <FormTextInput
              label="Position"
              placeholder="Software Engineer"
              iconName="work"
              value={values.position}
              onChangeText={handleChange("position")}
              onBlur={handleBlur("position")}
              error={errors.position}
              touched={touched.position}
            />

            <FormTextInput
              label="Employee ID"
              placeholder="EMP-1234"
              iconName="badge"
              value={values.employeeId}
              onChangeText={handleChange("employeeId")}
              onBlur={handleBlur("employeeId")}
              error={errors.employeeId}
              touched={touched.employeeId}
            />

            <View style={{ height: 12 }} />

            <SubmitButton
              title="Submit"
              onPress={() => handleSubmit()}
              disabled={!isValid}
              loading={isSubmitting}
            />

            <View style={{ height: 10 }} />
            <SubmitButton
              title="Reset Form"
              onPress={() => resetForm()}
              disabled={isSubmitting}
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: "#f9fafb" },
});

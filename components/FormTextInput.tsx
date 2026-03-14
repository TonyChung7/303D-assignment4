// components/FormTextInput.tsx
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  value: string;
  onChangeText: (val: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  label?: string;
  error?: string | undefined;
  touched?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  iconName?: keyof typeof MaterialIcons.glyphMap;
};

export default function FormTextInput({
  value,
  onChangeText,
  onBlur,
  placeholder,
  label,
  error,
  touched,
  keyboardType = "default",
  iconName,
}: Props) {
  const showError = !!error && touched;

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View
        style={[styles.inputWrapper, showError && styles.inputWrapperError]}
      >
        {iconName ? (
          <MaterialIcons
            name={iconName}
            size={20}
            color="#6b7280"
            style={{ marginRight: 8 }}
          />
        ) : null}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={styles.input}
          placeholderTextColor="#9ca3af"
        />
      </View>
      {showError ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", marginBottom: 12 },
  label: { fontSize: 14, color: "#374151", marginBottom: 6, fontWeight: "600" },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#d1d5db",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  inputWrapperError: { borderColor: "#ef4444" },
  input: { flex: 1, fontSize: 16, color: "#111827" },
  errorText: { marginTop: 6, color: "#ef4444", fontSize: 12 },
});

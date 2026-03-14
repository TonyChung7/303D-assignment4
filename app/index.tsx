// app/index.tsx
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Samples</Text>

      <Link href="/employee" asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Employee Form</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/auth/sign-in" asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/auth/sign-up" asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 16, justifyContent: "center" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#4f46e5",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: { color: "white", fontSize: 16, fontWeight: "600" },
});

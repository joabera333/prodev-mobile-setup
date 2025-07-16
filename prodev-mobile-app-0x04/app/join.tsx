import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
	Image,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Index() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<View style={styles.navGroup}>
					<Ionicons name="arrow-back" size={25} />
					<Image source={require("@/assets/images/logo.png")} />
				</View>
				<Text style={styles.largeText}>Create Your</Text>
				<Text style={styles.largeText}>Account</Text>
				<Text style={styles.smallText}>
					Enter your details to create a new account.
				</Text>

				<View style={styles.formGroup}>
					<View>
						<Text style={styles.placeholderText}>Email</Text>
						<TextInput keyboardType="email-address" style={styles.inputField} />
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.placeholderText}>Password</Text>
						<View style={styles.passwordGroup}>
							<TextInput style={{ flex: 1 }} secureTextEntry={true} />
							<FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
						</View>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.placeholderText}>Confirm Password</Text>
						<View style={styles.passwordGroup}>
							<TextInput style={{ flex: 1 }} secureTextEntry={true} />
							<FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
						</View>
					</View>
				</View>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Create</Text>
				</TouchableOpacity>

				<View style={styles.dividerGroup}>
					<View style={styles.divider}></View>
					<Text style={styles.dividerText}>OR</Text>
					<View style={styles.divider}></View>
				</View>

				<View style={styles.socialMediaButtonGroup}>
					<TouchableOpacity style={styles.socialMediaButton}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 5,
							}}
						>
							<Image source={require("@/assets/images/google.png")} />
							<Text style={styles.socialMediaButtonText}>
								Continue with Google
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity style={styles.socialMediaButton}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 5,
							}}
						>
							<Image source={require("@/assets/images/facebook.png")} />
							<Text style={styles.socialMediaButtonText}>
								Continue with Facebook
							</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View style={styles.bottomTextGroup}>
					<Text style={styles.bottomText}>Do not have an account?</Text>
					<Text style={styles.bottomTextLink}>Sign in</Text>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
	},
	navGroup: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
		marginTop: 11,
	},
	largeText: {
		fontSize: 40,
		fontWeight: "700",
	},
	smallText: {
		fontSize: 12,
		color: "#7E7B7B",
		marginTop: 5,
	},
	placeholderText: {
		fontSize: 18,
		color: "#7E7B7B",
		marginBottom: 7,
	},
	inputField: {
		borderWidth: 1,
		borderRadius: 10,
		height: 50,
		borderColor: "#7E7B7B",
		paddingHorizontal: 10,
	},
	passwordGroup: {
		flexDirection: "row",
		borderWidth: 1,
		alignItems: "center",
		height: 50,
		borderRadius: 10,
		paddingHorizontal: 10,
		borderColor: "#7e7b7b",
	},
	formGroup: {
		marginTop: 44,
		marginBottom: 10,
	},
	button: {
		backgroundColor: "#2B876E",
		height: 53,
		borderRadius: 10,
		marginTop: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		fontSize: 17,
		color: "white",
		fontWeight: "bold",
	},
	socialMediaButton: {
		borderWidth: 1,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		borderColor: "#C2C2C2",
	},
	socialMediaButtonText: {
		fontSize: 18,
		color: "#0D0D0D",
		fontWeight: 400,
	},
	socialMediaButtonGroup: {
		gap: 15,
		marginTop: 25,
	},
	dividerGroup: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		marginTop: 29,
	},
	divider: {
		borderWidth: 0.5,
		borderColor: "#c2c2c2",
		flex: 1,
	},
	dividerText: {
		fontSize: 17,
		color: "#C2C2C2",
	},
	bottomTextGroup: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 30,
	},
	bottomText: {
		fontSize: 16,
		color: "#7E7B7B",
	},
	bottomTextLink: {
		fontSize: 16,
		color: "#2B876E",
		fontWeight: "600",
	},
});

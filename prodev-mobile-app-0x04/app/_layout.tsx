import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="index" /> {/* This replaces your "/" */}
			<Stack.Screen name="join" />
			<Stack.Screen name="signin" />
		</Stack>
	);
}

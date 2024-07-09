import MainStackNavigator from "./navigation/mainNavigation";
import { AuthProvider } from "./screens/authentication/authToken";

export default function App() {
  return (
    <AuthProvider>
      <MainStackNavigator />
    </AuthProvider>
  );
}

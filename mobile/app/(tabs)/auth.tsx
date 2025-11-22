import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Text, TextInput } from "react-native-paper";

export default function AuthScreen() {
    const [isSignUp, setIsSignUp] = useState<Boolean>(false);
    return <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}>
        <View>
            <Text>{isSignUp ? "Buat Akun" : "selamat datang"}</Text>
            <TextInput label="Email" autoCapitalize="none" keyboardType="email-address" placeholder="emailkamu@gmail.com" mode="outlined" ></TextInput>
            <TextInput label="Password" autoCapitalize="none" keyboardType="email-address" mode="outlined" ></TextInput>

            <button mode="contained">Buat Akun</button>

            <button mode="text">Sudah punya akun?</button>
        </View>
    </KeyboardAvoidingView>
}
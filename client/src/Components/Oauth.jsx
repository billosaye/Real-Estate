import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";
import { useDispatch } from "react-redux";
import {signInSuccess} from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';


const OAuth = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            console.log(result);
            


            const res = await fetch("/api/auth/google", {
                method: "POST",  
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });

            const data = await res.json();

            dispatch(signInSuccess(data));
            navigate("/home");         

            
        } catch (error) {
            console.log('Could not sign in with Google', error);
        }
    };

    return (
        <button 
        type="button"
            onClick={handleGoogleClick}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
        >
            <FcGoogle className="w-5 h-5" />
            <span className="text-gray-600">Sign in with Google</span>
        </button>
    );
};

export default OAuth;
import { useState } from "react"; 
import "./login.scss"
import { createUserWithEmailAndPassword } from "firebase/auth";
//import { auth } from "../../firebase";
import auth from "../../firebase";
import { Password } from "@mui/icons-material";

const Login = () => {

  const [error, setError] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(auth);
    console.log(email);
    console.log(password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          //Signed in
          const user = userCredential.user;
          console.log(user);
      })
      .catch((error) => {
        setError(true);
      }
    );
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email" onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password !</span>}
      </form>
    </div>
  )
}

export default Login
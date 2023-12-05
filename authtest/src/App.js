import { Container } from "react-bootstrap";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return(
    <AuthProvider>
    <Container className="d-flex align-items-center justify-content-center" 
    style={{minHeight:"100vh"}}>
      <div className="w-100" style={{maxWidth:'400px'}}>
      <Signup></Signup>
      </div>
    </Container>
    </AuthProvider>
  ) 
}

export default App;

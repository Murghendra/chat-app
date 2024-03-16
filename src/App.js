import { ChatEngine} from "react-chat-engine";

import  ChatFeed  from './components/ChatFeed';
import './App.css';
import LoginForm from "./components/LoginForm";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />



    return(
        <ChatEngine
            height="100vh"
            projectID="0b2903f4-fe98-43b5-87fb-541044f87905"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps} />

            }
        
        />
    );
}
export default App;
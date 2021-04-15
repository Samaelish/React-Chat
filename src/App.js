import { ChatEngine } from 'react-chat-engine'

import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height='100vh'
            projectID='1934d4a6-3572-42c4-93a0-f0ae702ccf4d'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
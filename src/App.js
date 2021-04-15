import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
    return (
        <ChatEngine 
            height='100vh'
            projectID='1934d4a6-3572-42c4-93a0-f0ae702ccf4d'
            userName='Samael'
            // userName='PublicUser'
            userSecret='frontendChatReact358'
            // userSecret='123123'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
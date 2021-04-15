import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = { 'Project-ID': '1934d4a6-3572-42c4-93a0-f0ae702ccf4d', 'User-Name': username, 'User-Secret': password }

        try {
            // username | password => chatEngine -> give messages 
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            // works out -> logged in
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload();
        } catch (error) {
            // error -> try with new username
            setError('Воу-воу, неверные данные')
        }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className='title'>Реакт Чат</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Имя пользователя' required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Пароль' required />
                    <div align='center'>
                    <button type="submit" className='button'>
                        <span>Войти в чат</span>
                    </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm

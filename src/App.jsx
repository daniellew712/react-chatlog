import './App.css';
import messages from './data/messages.json';
import { useState } from 'react';
import ChatLog from './components/ChatLog.jsx';
import ColorChoice from './components/ColorChoice.jsx';

const App = () => {
  const [messageData, setMessage] = useState(messages);
  const [mainSenderColor, setMainSenderColor] = useState('black');
  const [remoteSenderColor, setRemoteSenderColor] = useState('black');
  const MainSender = 'Vladimir';
  const senderNames = [...new Set(messageData.map(message => message.sender))];
  const remoteSender = senderNames.filter(sender => sender!== MainSender);

  const likeMessage = (id) => {
    setMessage(messageData => {
      return messageData.map(message => {
        if (message.id == id){
          return {...message, liked: !message.liked};
        }else {
          return message;
        }
      });
    });
  };
  const sumLikes = () => {
    return messageData.filter(message => (message.liked)).length;
  };


  return (
    <div id="App">
      <header>
        <h1>
          Chat between <span style={{ color: mainSenderColor }}> {MainSender} </span> and <span style={{ color: remoteSenderColor }}> {remoteSender} </span>
        </h1>
        <div className='sub-header'>
          <div className='sender-color'>
            <h2 style={{ color: mainSenderColor }}>{MainSender}&apos;s color:</h2>
            <ColorChoice changeColor={setMainSenderColor} />
          </div>
          <h2>Total of {sumLikes()} ❤️s</h2>
          <div className='sender-color'>
            <h2 style={{ color: remoteSenderColor }}>{remoteSender}&apos;s color:</h2>
            <ColorChoice changeColor={setRemoteSenderColor} />
          </div>
        </div>
      </header>
      <main>
        <ChatLog
          entries = {messageData}
          likeMessage = {likeMessage}
          mainSenderColor={mainSenderColor}
          remoteSenderColor={remoteSenderColor}
        />
      </main>
    </div>
  );
};

export default App;

import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.jsx';


const ChatEntry = ({id, sender, body, timeStamp, liked, likeMessage, mainSenderColor, remoteSenderColor}) => {
  const likebutton = liked ? '❤️' : '🤍';
  const MainSender = 'Vladimir';
  const isMainSender = sender === MainSender;
  const senderClass = isMainSender ? 'chat-entry local' : 'chat-entry remote';
  const getBodyClass = () => ({
    color: isMainSender ? mainSenderColor : remoteSenderColor
  });
  return (
    <div className={senderClass}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p style={getBodyClass()}>{body}</p>
        <p className="entry-time">
          <TimeStamp time = {timeStamp}/> </p>
        <button className="like"
          onClick = {()=>likeMessage(id)}>{likebutton}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likeMessage: PropTypes.func.isRequired,
  mainSenderColor: PropTypes.string,
  remoteSenderColor: PropTypes.string,
};

export default ChatEntry;

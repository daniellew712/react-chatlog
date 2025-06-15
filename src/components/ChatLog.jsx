import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, likeMessage, mainSenderColor, remoteSenderColor }) => {
  return entries.map((entry) => (
    <ChatEntry
      key = {entry.id}
      id = {entry.id}
      sender = {entry.sender}
      body = {entry.body}
      timeStamp = {entry.timeStamp}
      liked = {entry.liked}
      likeMessage={likeMessage}
      mainSenderColor={mainSenderColor}
      remoteSenderColor={remoteSenderColor}
    />
  ));
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired
    })
  ).isRequired,
  likeMessage: PropTypes.func.isRequired,
  mainSenderColor: PropTypes.string,
  remoteSenderColor: PropTypes.string,
};

// Cleaner version
// ChatLog.propTypes = {
//   entries: PropTypes.array.isRequired,
//   likeMessage: PropTypes.func.isRequired,
// };

export default ChatLog;
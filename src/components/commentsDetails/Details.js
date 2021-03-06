import { useDispatch, useSelector } from 'react-redux';
import { DetailsAuth, DetailsContainer, DetailsContent, DetailsInner, ReactionsBar } from './DetailsElements';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import moment from 'moment';
import { ReactionBarSelector } from '@charkour/react-reactions';
import { useEffect, useState } from 'react';
import { addReaction, getReactions } from '../../slices/reactionSlice';

function Details() {
  const [slack, setSlack] = useState('');
  const { commentResult } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const buildNode = (emoji) => <div>{emoji}</div>;

  const reactions = [
    { label: 'Like', node: buildNode('๐') },
    { label: 'Dislike', node: buildNode('๐') },
    { label: 'Love', node: buildNode('๐') },
    { label: 'Surprised', node: buildNode('๐ฎ') },
    { label: 'Happy', node: buildNode('๐') },
    { label: 'Sad', node: buildNode('๐ฅ') },
    { label: 'Angry', node: buildNode('๐ก') },
  ];
  const handleClick = (reaction) => {
    dispatch(addReaction({ commentId: slack, reactionType: reaction }));
  };

  return commentResult === '' ? (
    <div style={{ maxWidth: '40rem', magrin: '0 auto' }}>ใพใ ใณใกใณใใใชใใงใใ</div>
  ) : (
    commentResult.data.map((comment) => (
      <DetailsContainer key={comment.content}>
        <DetailsInner>
          <DetailsAuth>
            <span> </span>
            <div>
              <p className='username'>{comment.user.username}</p>
              <p className='date'>{moment(comment.publishedDate).format('YYYYๅนดMMๆDDๆฅ')}</p>
            </div>
          </DetailsAuth>
          <DetailsContent>
            <p>{comment.content}</p>
            <div className='reactions'>
              <span className='reaction'>๐</span>
              <span className='reaction'>๐</span>
              <span className='reaction'>๐</span>

              {/* {console.log(dispatch(getReactions({ commentId: comment._id })))} */}
            </div>
          </DetailsContent>
          <ReactionsBar>
            <EmojiHappyIcon className='icon' onClick={() => setSlack(`${comment._id}`)} />
            <button className='reply'>Reply</button>
          </ReactionsBar>
          {slack === comment._id && (
            <div className='reactions'>
              <ReactionBarSelector iconSize={24} reactions={reactions} onSelect={handleClick} />
            </div>
          )}
        </DetailsInner>
      </DetailsContainer>
    ))
  );
}
export default Details;

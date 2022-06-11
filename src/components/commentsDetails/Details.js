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
    { label: 'Like', node: buildNode('👍') },
    { label: 'Dislike', node: buildNode('👎') },
    { label: 'Love', node: buildNode('😍') },
    { label: 'Surprised', node: buildNode('😮') },
    { label: 'Happy', node: buildNode('😄') },
    { label: 'Sad', node: buildNode('😥') },
    { label: 'Angry', node: buildNode('😡') },
  ];
  const handleClick = (reaction) => {
    dispatch(addReaction({ commentId: slack, reactionType: reaction }));
  };

  return commentResult === '' ? (
    <div style={{ maxWidth: '40rem', magrin: '0 auto' }}>まだコメントがないです。</div>
  ) : (
    commentResult.data.map((comment) => (
      <DetailsContainer key={comment.content}>
        <DetailsInner>
          <DetailsAuth>
            <span> </span>
            <div>
              <p className='username'>{comment.user.username}</p>
              <p className='date'>{moment(comment.publishedDate).format('YYYY年MM月DD日')}</p>
            </div>
          </DetailsAuth>
          <DetailsContent>
            <p>{comment.content}</p>
            <div className='reactions'>
              <span className='reaction'>😍</span>
              <span className='reaction'>👍</span>
              <span className='reaction'>😄</span>

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

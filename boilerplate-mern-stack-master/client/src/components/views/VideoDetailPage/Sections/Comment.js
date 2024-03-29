import Axios from 'axios'
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';

function Comment(props) {
    const videoId = props.postId;
    const user = useSelector(state => state.user);
    const [commentValue, setcommentValue] = useState("")

    const handleClick = (event) =>{
        setcommentValue(event.currentTarget.value)
    }
    const onSubmit = (event) => {
        event.preventDefault(); // refresh 방지
        
        const variables={
            content: commentValue,
            writer: user.userData._id,
            postId: videoId
        }
        Axios.post('/api/comment/saveComment', variables)
            .then(response => {
                if(response.data.success){
                    console.log(response.data.result)
                    setcommentValue("")
                    props.refreshFunction(response.data.result);
                }else{
                    alert('코멘트를 저장하지 못했습니다.');
                }
            })
    }
    return (
        <div>
            <br />
            <p> Replies</p>
            <hr />

            {/* Comment Lists */}
            {props.commentLists && props.commentLists.map((comment, index)=> (
                 (!comment.responseTo && 
                    <React.Fragment>
                        <SingleComment  key={index} refreshFunction={props.refreshFunction} comment={comment} postId={videoId} />
                        <ReplyComment />
                    </React.Fragment>
                )
            ))}


            {/* Root Comment Form */}
            
            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <textarea 
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleClick}
                    value={commentValue}
                    placeholder="코멘트를 작성해 주세요"
                />
                <br />
                <button style={{width: '20%', height: '52px' }} onclick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Comment

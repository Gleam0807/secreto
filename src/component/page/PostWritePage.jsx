import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import data from '../../data.json';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function PostWritePage(props) {
    const navigate = useNavigate();

    const [posts, setPosts] = useState(data);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handlePostSubmit = () => {
        const newPost = {
            id: posts.length + 1,
            title,
            content,
        };

        setPosts([...posts, newPost]);

        // 추가된 새 게시물 콘솔로 확인
        console.log('게시물 추가됨:', newPost);

        navigate('/');
    };

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />

                <Button
                    title='글 작성하기'
                    onClick={handlePostSubmit}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;

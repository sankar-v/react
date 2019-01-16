import React from 'react';
import CommmentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { data } from '../components/Comment';

export const App = () => (
    <div className="commmentBox">
        <CommmentList comments = {data} />
        <CommentForm />
    </div>
);
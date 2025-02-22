import React from 'react';
import  './trendingPost.css';
import PostItem from '../../public/models/PostItem';
import Link from 'next/link';

export default function TrendingPost(
    {
        item,
        index
    }:{
        item : {_id: string; title: string; author: string};
        index: number;
    }
)
{
    return (
        <li>
            <Link href={`postitemms/${item._id}`}>
                <span className='number'>{index+1} </span>
                <h4>{item.title}</h4>
                <span className="author">{item.author}</span>
            </Link>
        </li>
    )
}
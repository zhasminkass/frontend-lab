import React from 'react';
import type {User} from '../types';

interface UserCardProps {
    user: User;
    isActive?: boolean;
    children?: React.ReactNode;
}

export const UserCard = ({
    user,
    isActive = true,
    children,
}: UserCardProps) => {
    return (
        <div style={{ opacity: isActive ? 1 : 0.5,
            border: '1px solid #ccc',
            padding: '16px',
            borderRadius: '8px',
            maxWidth: '400px',
            margin: '16px auto',
            background: '#f9f9f9'
         }}
         >
            <h2 style={{opacity: isActive ? 1: 0.7 }}>
                {user.name}
                </h2>    
            <p>{user.email} | Age: {user.age}</p>
            {children && <div style={{marginTop: '12px' }}> {children}</div>}
        </div>
    );
};
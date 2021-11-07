import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Nav: FC = () => {
    return (
        <ul>
            <li><Link to="/">TOP</Link></li>
            <li><Link to="/">IoT Business</Link></li>
            <li><Link to="/">New Construction</Link></li>
            <li><Link to="/">Remodeling</Link></li>
            <li><Link to="/">Past Record</Link></li>
            <li><Link to="/profile">Company Profile</Link></li>
            <li><Link to="/">News</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
    );
};
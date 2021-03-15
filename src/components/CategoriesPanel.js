import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const CategoriesPanel = () => {
    return (
        <div className="my-4">
            
            <Link to="/cards">
                <Button variant="outline-warning" className="mr-3">
                    Fair Credit: 689 - 630 
                </Button>
            </Link>
            
            <Link to="/cards">
                <Button variant="outline-danger" className="mr-3">
                    Bad Credit: 620 - 350
                </Button>
            </Link>
            <Link to="/cards">
                <Button variant="outline-info">
                    Limited Credit
                </Button>
            </Link> 
        </div>
    )
}

export default CategoriesPanel;

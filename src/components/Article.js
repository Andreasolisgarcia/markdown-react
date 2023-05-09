import React from 'react';

const Article = ({article}) => {
    
    const handleDelete = () => {
        localStorage.removeItem(article.title);
        window.location.reload()
    }


    return (
        <div className="article">
            <div class="article-header">
                {article.title}
            </div>
            <div class="btn-container">
                <button>Editer</button>
                <button onClick={() => {
                    if(window.confirm("Etes-vous-sur?")){
                        handleDelete()
                    }
                }}>Suprimer</button>
            </div>
        </div>
    );
};

export default Article;

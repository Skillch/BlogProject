import React, {useState, useEffect} from "react";
import api from "../Api";
import Search from "../components/Search/index";
import Card from "../components/Card";
import "../index.css";
import Pagination from "../components/Pagination";


const Home = ({search, changeText}) => {
    const [posts, getPosts] = useState([]);
    const [cards, updateCards] = useState(posts);

    const [currentPage, setCurrentPage] = useState(1);
    const [firstPostIndex, setfPI] = useState(1);
    const [lastPostIndex, setlPI] = useState(1);
    const [postsPerPage] = useState( search ||20);

    useEffect(() => {
        api.getPostList().then(ans =>{
            getPosts(ans.reverse());
        })
    }, []);

    useEffect(() => {
        updateCards(posts.filter(el => el.title.toLowerCase().includes(search.toLowerCase())));
    }, [posts, search]);
    
    useEffect(() => {
        setlPI(currentPage * postsPerPage);
        setfPI(lastPostIndex - postsPerPage);
    })
    
    const currentPost = cards.slice(firstPostIndex, lastPostIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
       

    return(
        <>
            <div className="parentContainer">
                <div className="container__h1">
                        <h1 className="h1">Мои посты:</h1>
                        <Search text={search} foo={changeText}/>
                        {search && <div className='search__item'>По запросу <strong>{search}</strong> найдено {cards.length} постов</div>}
                </div>
                <div className="container__posts">   
                    {currentPost.map((post) => 
                        // <Link to={"/post/" + post._id} key={post._id}>
                            <Card key={post._id} data={{...post}}/>
                        // </Link>
                    )}
                </div>
                <Pagination currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={cards.length} paginate={paginate}/>
            </div>
        </>
    )
}

export default Home;
import "./Home.css";

const Home = () => {
    return(
        <>
        <div className="Home-Header">
            <h2>To-DO Manager</h2>
        </div>
        <div className="Home-items">
            <button className="Home-button" type="button">Create New List</button><br />
            <button className="Home-button" type="button">View Existing Lists</button>
        </div>
        </>
    );
};

export default Home;
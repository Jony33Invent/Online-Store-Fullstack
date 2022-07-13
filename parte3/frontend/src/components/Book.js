import React, {useEffect, useState} from 'react';

function Book() {
    const [items, setItems] = useState([]);
    useEffect( () => {
        fetchItems();
    }, []);


    const fetchItems = async () => {
        const data = await fetch('http://localhost:4000/books');
        const items = await data.json();
        console.log(data)
        console.log(items)
        setItems(items);
    };

    return(
        <section>
            
            <div class="container-fluid">
                <h1 class="mt-5">Books</h1>
                {/*
                <form method="POST" action="/addTweet">
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input type="text" name="tweetInput" class="form-control" />
                            <input type="submit" value="Send" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>
                */}
                {
                items.map(item => (
                    <div class="row padding">
                        <div class="alert alert-info rounded-pill" role="alert">
                            <i class="fa fa-user mr-2"></i> <i>{item.name}</i>
                        </div>
                    </div>       
                ))
                }
            </div>
        </section>
    );
}

export default Book;
import React from "react";
import "../assets/style.css"

export default function CreateBlog() {
    return (
        <div class="create-blog-div">
            <form class="create-blog-form">

                <label for="title">Blog Title</label>
                <input type="text" id="title" name="title"></input>

                <label for ="blog-text">Blog Text</label>
                <input type="text" id="blog-text" name="blog-text"></input>

                <label for="author-name">Author Name</label>
                <input type="text" id="author-name" name="author-name"></input>

                <button type="submit">Post!</button>

            </form>


        </div>
    );
}

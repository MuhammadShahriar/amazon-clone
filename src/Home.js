import React from 'react'
import Product from './Product';
import "./Home.css"

function Home() {
    return (
        <div className = "home">
        <img
            className = "home__image"
            src = "https://scontent.fdac3-1.fna.fbcdn.net/v/t1.0-9/95203761_150709209783979_7290944616910553088_o.jpg?_nc_cat=110&_nc_sid=e3f864&_nc_eui2=AeFp8UlFxWypMVyPvbRiboqveKH9D6h7Ds14of0PqHsOzWQBb6KIegNdawxJi_u9nWnKAL1xkY9PZ7AmvLgF_XIf&_nc_ohc=kbUOgRZzsRwAX-L3GKO&_nc_ht=scontent.fdac3-1.fna&oh=b0d8dacaa39313c7a25076226432e18c&oe=5F8D48CC"
            alt = ""
            />

            {/* This is row - 1 */}

            <div className = "home_row">
                <Product
                id = "1233"
                title = "Lenovo Flex 5 14 2-in-1 Laptop, 14.0 FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
                image = "https://m.media-amazon.com/images/I/81x+9uFY1QL._AC_UY327_FMwebp_QL65_.jpg"
                price = {469}
                rating = {5}
                 />
                <Product
                id = "1233"
                title = "Newest HP Pavilion Intel Pentium Silver N5000 4GB 128GB SSD Windows 10 Laptop Red"
                image = "https://m.media-amazon.com/images/I/717ywJDnAHL._AC_UY327_FMwebp_QL65_.jpg"
                price = {415}
                rating = {5}
                />
            </div>

            {/* This is row - 2 */}

            <div className = "home_row">
                <Product
                id = "1233"
                title = "This is a book"
                image = "https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg"
                price = {123}
                rating = {5}
                 />
                <Product
                id = "1233"
                title = "This is a book"
                image = "https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg"
                price = {123}
                rating = {5}
                />
                <Product
                id = "1233"
                title = "This is a book"
                image = "https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg"
                price = {123}
                rating = {5}
                />
            </div>



            <div className = "home_row">
                <Product
                id = "1233"
                title = "This is a book"
                image = "https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg"
                price = {123}
                rating = {5}
                 />
               
            </div>
            
        </div>



    )
}

export default Home

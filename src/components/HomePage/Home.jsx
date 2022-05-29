import React, {useState, useEffect} from 'react'
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const  fetch = async()  => {
        const result = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2022-05-28&to=2022-05-28&sortBy=popularity&apiKey=22768fd83d4f42788e575d9be6fc3fdd');
        setData(result.data.articles)
        console.log(data);
        }
        fetch();
    }, [])

    const useItems = data.map((item, index)=>{
        return (
            <div classNameName="tn-item">
        <div classNameName="tn-img">
            <img key={index} src={item.urlToImage} alt=""/>
        </div>
        </div>
        )
    })
  return (
      <>
      <Header/>
      <div className="top-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 tn-left">
                        <div className="row tn-slider">
                            <div className="col-md-6">
                                {/* {data.map((item, index) => {
                                            <div classNameName="tn-item">
                                                <div classNameName="tn-img">
                                                    <img key={index} src={item.urlToImage} alt=""/>
                                                </div>
                                                </div>
                                    }
                                )
                                } */}
                                {data && useItems}
                                {/* // <div className="tn-img">
                                //     <img src="img/news-450x350-1.jpg" alt="news1"/>
                                //     <div className="tn-title">
                                //         <a href="/#">Lorem ipsum dolor sit amet</a>
                                //     </div>
                                // </div> */}
                            </div>
                            <div className="col-md-6">
                                <div className="tn-img">
                                    <img src="img/news-450x350-2.jpg" alt="news2" />
                                    <div className="tn-title">
                                        <a  href="/#">Integer hendrerit elit eget purus sodales maximus</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 tn-right">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="tn-img">
                                    <img src="img/news-350x223-1.jpg" alt="news3" />
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tn-img">
                                    <img src="img/news-350x223-2.jpg" alt="news3" />
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tn-img">
                                    <img src="img/news-350x223-3.jpg" alt="news4" />
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tn-img">
                                    <img src="img/news-350x223-4.jpg" alt="news5" />
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div className="cat-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Sports</h2>
                        <div className="row cn-slider">
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="img/news-350x223-1.jpg" alt="news6" />
                                    <div className="cn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="img/news-350x223-2.jpg" alt="news7" />
                                    <div className="cn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="img/news-350x223-3.jpg" alt="news8" />
                                    <div className="cn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>Technology</h2>
                        <div className="row cn-slider">
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="img/news-350x223-4.jpg" alt="news9" />
                                    <div className="cn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="img/news-350x223-5.jpg" alt="news10" />
                                    <div className="cn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="img/news-350x223-1.jpg" alt="news11" />
                                    <div className="cn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="cat-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Business</h2>
                        <div className="row cn-slider">
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="img/news-350x223-5.jpg" alt="news1" />
                                    <div className="cn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="img/news-350x223-4.jpg" alt="news1" />
                                    <div className="cn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="img/news-350x223-3.jpg" alt="news1" />
                                    <div className="cn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>Entertainment</h2>
                        <div className="row cn-slider">
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="img/news-350x223-2.jpg" alt="news1" />
                                    <div className="cn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="img/news-350x223-1.jpg" alt="news1" />
                                    <div className="cn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cn-img">
                                    <img src="img/news-350x223-3.jpg" alt="news1" />
                                    <div className="cn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="tab-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="nav nav-pills nav-justified">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="pill" href="#featured">Featured News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#popular">Popular News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#latest">Latest News</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div id="featured" className="container tab-pane active">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-1.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-2.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-3.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                            <div id="popular" className="container tab-pane fade">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-4.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-5.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-1.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                            <div id="latest" className="container tab-pane fade">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-2.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-3.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-4.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <ul className="nav nav-pills nav-justified">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="pill" href="#m-viewed">Most Viewed</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#m-read">Most Read</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#m-recent">Most Recent</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div id="m-viewed" className="container tab-pane active">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-5.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-4.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-3.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                            <div id="m-read" className="container tab-pane fade">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-2.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-1.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-3.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                            <div id="m-recent" className="container tab-pane fade">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-4.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-5.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src="img/news-350x223-1.jpg" alt="news1" />
                                    </div>
                                    <div className="tn-title">
                                        <a href="/#">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="main-news">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="img/news-350x223-1.jpg" alt="news1" />
                                    <div className="mn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="img/news-350x223-2.jpg" alt="news1" />
                                    <div className="mn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="img/news-350x223-3.jpg" alt="news1" />
                                    <div className="mn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="img/news-350x223-4.jpg" alt="news1" />
                                    <div className="mn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="img/news-350x223-5.jpg" alt="news1" />
                                    <div className="mn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="img/news-350x223-1.jpg" alt="news1" />
                                    <div className="mn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="img/news-350x223-2.jpg" alt="news1" />
                                    <div className="mn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="img/news-350x223-3.jpg" alt="news1" />
                                    <div className="mn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mn-img">
                                    <img src="img/news-350x223-4.jpg" alt="news1" />
                                    <div className="mn-title">
                                        <a href="/#">Lorem ipsum dolor sit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="mn-list">
                            <h2>Read More</h2>
                            <ul>
                                <li><a href="/#">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="/#">Pellentesque tincidunt enim libero</a></li>
                                <li><a href="/#">Morbi id finibus diam vel pretium enim</a></li>
                                <li><a href="/#">Duis semper sapien in eros euismod sodales</a></li>
                                <li><a href="/#">Vestibulum cursus lorem nibh</a></li>
                                <li><a href="/#">Morbi ullamcorper vulputate metus non eleifend</a></li>
                                <li><a href="/#">Etiam vitae elit felis sit amet</a></li>
                                <li><a href="/#">Nullam congue massa vitae quam</a></li>
                                <li><a href="/#">Proin sed ante rutrum</a></li>
                                <li><a href="/#">Curabitur vel lectus</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
      </>
    
  )
}

export default Home
import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';

const Home = (props) => {
    const settings = {
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      const settingsSport = {
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
      };

      const settingsTechnology = {
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
      };
    const [data, setData] = useState([]);

    const [secondData, setSecondData] = useState([]);
    const [sports, setSports] = useState([]);
    const [technology, setTechnology] = useState([]);

    useEffect(() => {
        const  fetch = async()  => {
        const result = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-04-30&sortBy=publishedAt&apiKey=22768fd83d4f42788e575d9be6fc3fdd');
        setData(result.data.articles)
        console.log(data);
        }

        const fetchNews = async() => {
            const result = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=22768fd83d4f42788e575d9be6fc3fdd', {
                params: {
                    _limit: 4
                   }
            })
            setSecondData(result.data.articles)
            console.log(secondData);
        }

        const sportsData = async () => {
            const result = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=400fb535b895424d88034ff83db77ddf');
            setSports(result.data.articles)
            console.log(data);
        }

        const technologyData = async () => {
            const result = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-04-30&sortBy=publishedAt&apiKey=400fb535b895424d88034ff83db77ddf');
            setTechnology(result.data.articles)
            console.log(data);
        }
        
        fetch();
        fetchNews();
        sportsData();
        technologyData();
    }, [])

    const useItems = data.map((item, index)=>{
            return (
                <div key={index} className="col-md-12">
                <div className="tn-item">
            <div className="tn-img">
                <img  src={item.urlToImage} alt="" className="img-thumnail"/>
                <div className="tn-title">
                    <Link to={{ 
                        pathname: `/news-details/${item.title}`,
                    }} state={{ title: item.title, content: item.content, image: item.urlToImage, publishDate: item.publishedAt}} >{item.title}</Link>
                </div>
            </div>
            </div>
            </div>
            )
    })


    const newsLeft = secondData.map((item, index)=>{
        return (
            <div key={index} className="col-md-6">
            <div className="small-img">
                <img src={item.urlToImage} alt="news3" />
                <div className="tn-title">
                <Link to={{ 
                        pathname: `/news-details/${item.title}`,
                    }} state={{ title: item.title, content: item.content, image: item.urlToImage, publishDate: item.publishedAt}} >{item.title}</Link>
                </div>
            </div>
        </div>  
        )
    })


    const sportsNews = sports.map((item, index) =>{
        return (
            <div key={index} className="col-md-12">
                <div className="cn-img">
                    <img src={item.urlToImage} alt="news6" />
                    <div className="cn-title">
                    <Link to={{ 
                        pathname: `/news-details/${item.title}`,
                    }} state={{ title: item.title, content: item.content, image: item.urlToImage, publishDate: item.publishedAt}} >{item.title}</Link>
                    </div>
                </div>
            </div>
        )
    })

    const technologyNews = technology.map((item, index) =>{
        return (
            <div key={index} className="col-md-12">
                <div className="cn-img">
                    <img src={item.urlToImage} alt="news6" />
                    <div className="cn-title">
                        <a href="/#">{item.title}</a>
                    </div>
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
                        <Slider className="row tn-slider" {...settings}>
                            {data && useItems}
                        </Slider>
                    </div>
                    <div className="col-md-6 tn-right">
                        <div className="row">
                            {secondData && newsLeft}
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
                        <Slider className="row cn-slider" {...settingsSport}>
                            {sports && sportsNews}
                        </Slider>
                    </div>
                    <div className="col-md-6">
                        <h2>Technology</h2>
                        <Slider className="row cn-slider" {...settingsTechnology}>
                            {technology && technologyNews}
                        </Slider>
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
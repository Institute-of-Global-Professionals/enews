import React,{useEffect,useState} from 'react';
import {useLocation, Link} from "react-router-dom";
import axios from 'axios';
// import news1 from '../../vendor/img/news-825x525.jpg';
import news2 from '../../vendor/img/news-350x223-1.jpg';
import news3 from '../../vendor/img/news-350x223-2.jpg';
import news4 from '../../vendor/img/news-350x223-3.jpg';
import news5 from '../../vendor/img/news-350x223-4.jpg';
import news6 from '../../vendor/img/news-350x223-1.jpg';
import news7 from '../../vendor/img/news-350x223-2.jpg';
import news8 from '../../vendor/img/news-350x223-3.jpg';
import news9 from '../../vendor/img/news-350x223-4.jpg';
import news10 from '../../vendor/img/news-350x223-5.jpg';
import ads2 from '../../vendor/img/ads-2.jpg';
import Header from '../Header';
import Footer from '../Footer';


const singlepage = (props) => {
    // const {type} = useParams();
    const {title, content, image, publishDate} = useLocation().state;
    // console.log("promps type" + type);
    // console.log(title, content, image);

    const [relatedNews, setRelatedNews] = useState([]);
    const [categoryNews, setCategoryNews] = useState([]);
    const [featuresNews, setfeaturesNews] = useState([]);

    useEffect(()=>{
        const relNews = async() => {
          const result = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=22768fd83d4f42788e575d9be6fc3fdd') ;
          setRelatedNews(result.data.articles); 
          console.log(result.data);
        }

        const catNews = async () => {
            const result =await axios.get('https://newsapi.org/v2/everything?q=apple&from=2022-05-30&to=2022-05-30&sortBy=popularity&apiKey=400fb535b895424d88034ff83db77ddf');
            setCategoryNews(result.data.articles);
        }

        const fetNews = async () => {
            const result = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=22768fd83d4f42788e575d9be6fc3fdd')
            setfeaturesNews(result.data.articles);
        }
        relNews();
        catNews();
        fetNews();
    }, []);

    
    
    const relNewsData = relatedNews.map((item, index)=>{
        return (
            <div key={index} className="col-md-4">
                            <div className="sn-img">
                                <img src={item.urlToImage} alt="new2" />
                                <div className="sn-title">
                                <Link to={{ 
                            pathname: `/news-details/${item.title}`,
                            }} state={{ title: item.title, content: item.content, image: item.urlToImage, publishDate: item.publishedAt}} >{item.title}</Link> 
                                </div>
                            </div>
                        </div>
        )
    })

    const categoryNewsData = categoryNews.map((item,index) => {
        return (
            <div key={index} className="nl-item">
                                <div  className="nl-img">
                                    <img src={item.urlToImage} alt="new"/>
                                </div>
                                <div className="nl-title">
                                <Link to={{ 
                            pathname: `/news-details/${item.title}`,
                            }} state={{ title: item.title, content: item.content, image: item.urlToImage, publishDate: item.publishedAt}} >{item.title}</Link> 
                                </div>
                            </div>
        )
    }) 

    const featuresNewsData = featuresNews.map((item,index) =>{
        return (
            <div key={index} className="tn-news">
            <div className="tn-img">
                <img src={item.urlToImage} alt="new"/>
            </div>
            <div className="tn-title">
            <Link to={{ 
                            pathname: `/news-details/${item.title}`,
                            }} state={{ title: item.title, content: item.content, image: item.urlToImage, publishDate: item.publishedAt}} >{item.title}</Link> 
            </div>
        </div>
        )
    })

  return (
      <>
      <Header />
      
    <div className="breadcrumb-wrap">
    <div className="container">
        <ul className="breadcrumb">
            <li className="breadcrumb-item"><a href="/#">Home</a></li>
            <li className="breadcrumb-item"><a href="/#">News</a></li>
            <li className="breadcrumb-item active">{title}</li>
        </ul>
    </div>
</div>

<div className="single-news">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="sn-container">
                    <div className="sn-img">
                        <img src={image} alt="new" />
                    </div>
                    <div className="sn-content">
                        <h1 className="sn-title">{title}</h1>
                        <p className="text-secondary">{publishDate}</p>
                        <p>
                            {content}
                        </p>
                        
                    </div>
                </div>
                <div className="sn-related">
                    <h2>Related News</h2>
                    <div className="row sn-slider">
                        {relatedNews && relNewsData}
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="sidebar">
                    <div className="sidebar-widget">
                        <h2 className="sw-title">In This Category</h2>
                        <div className="news-list">
                            {categoryNews && categoryNewsData}
                        </div>
                    </div>
                    
                    <div className="sidebar-widget">
                        <div className="image">
                            <a href="https://htmlcodex.com"><img src={ads2} alt="Image"/></a>
                        </div>
                    </div>
                    
                    <div className="sidebar-widget">
                        <div className="tab-news">
                            <ul className="nav nav-pills nav-justified">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="pill" href="#featured">Featured</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#popular">Popular</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#latest">Latest</a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div id="featured" className="container tab-pane active">
                                    {featuresNews && featuresNewsData}
                                  
                                </div>
                                <div id="popular" className="container tab-pane fade">
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news5} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news4} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news3} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news2} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news3} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                </div>
                                <div id="latest" className="container tab-pane fade">
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news4} alt="new"/>
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news5} alt="new"/>
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news10} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news5} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news4} alt="new"/>
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="sidebar-widget">
                        <div className="image">
                            <a href="https://htmlcodex.com"><img src={ads2} alt="Image"/></a>
                        </div>
                    </div>

                    

                    
                    
                    <div className="sidebar-widget">
                        <h2 className="sw-title">Tags Cloud</h2>
                        <div className="tags">
                            <a href="/#">National</a>
                            <a href="/#">International</a>
                            <a href="/#">Economics</a>
                            <a href="/#">Politics</a>
                            <a href="/#">Lifestyle</a>
                            <a href="/#">Technology</a>
                            <a href="/#">Trades</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer />
</>
  );
}

export default singlepage;
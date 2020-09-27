import React, {Component} from 'react';
import MovieService from "../services/movie.service";
import { Suspense } from 'react';


class DetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmworld: [],
            cinemaworld: [],
            id: '',
            cinemaworldId: '',
        };
    }
    componentDidMount() {
        this.getMoive(this.props.match.params.id);
        this.getAllDataCinemaWorld();
        //this.getMovieFromCinema();
    }

    getMoive = (id) => {
        this.setState({ id: id });
        MovieService.getDataFromFilmWorld(id).then(res => {                       
            this.setState({ filmworld: res.data});
          }).catch(err => {
            console.log(err);
        });

       
    }
    getAllDataCinemaWorld = () => {
        let id = '';
        MovieService.getAllCinemaWorld().then(res => {
          let data = res.data.Movies.filter( (movie, index) => {
              return movie.Title === this.state.filmworld.Title;
            })
          MovieService.getDataFromCinemaWorld(data[0].ID).then(res => {
                    this.setState({ cinemaworld: res.data});
                }).catch(err => {
                console.log(err);
              });
          }).catch(err => {
            console.log(err);
        });
    }
 
    render() {
      const { filmworld, cinemaworld} = this.state;
      return(
            <div>
                <div>
                    <h1 className="text-center">Prince's Theartre</h1>
                    <div className="text-center"> 
                        { (filmworld.Poster) ? ( <Suspense><img src={filmworld.Poster} /></Suspense>) : (<span>loading</span>) }                   
                        <h2>{ (filmworld.Title) ? ( <span>{filmworld.Title}</span> ) : (<span>loading</span>) }</h2>
                        <h2>{this.props.match.params.id}</h2>
                    </div>
                    <div className="text-center">
                        <div>
                            { (filmworld.Price != undefined && cinemaworld.Price != undefined && Math.fround(filmworld.Price) >= Math.fround(cinemaworld.Price)) ? 
                            ( <ul><li><span>Cinema World</span> <span>$ {cinemaworld.Price}</span></li><li><span>Film World</span> <span>$ {filmworld.Price}</span></li></ul>) : (<div></div>) }
                            { (filmworld.Price != undefined && cinemaworld.Price != undefined && Math.fround(filmworld.Price) < Math.fround(cinemaworld.Price)) ? 
                            ( <ul><li><span>Film World</span> <span>$ {filmworld.Price}</span></li><li><span>Cinema World</span> <span>$ {cinemaworld.Price}</span></li></ul>) : (<div></div>) }
                        </div>
                        
                    </div>
                </div>
            </div>     
      )
    }
  }


  export default DetailsPage;
import React, {Component} from 'react';
import MovieService from "../services/movie.service";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Home extends Component{
    
    state = {
        movies: [],
        filmworld: [],
        cinemaworld: [],
        loadAll: false,
        isLoading: false,
    };
    

    componentDidMount() {
        this.getMoives();
        this.getCinemaWorldMovies();
    }

    getMoives = () => {
        this.setState({
            isLoading: true
        });
        MovieService.getAllFromFilmWorld().then(res => {
            this.setState({ filmworld: res.data});
            this.setState({ movies: res.data});
          }).catch(err => {
            this.setState({
                isLoading: false
            });
            console.log(err);
        });
    }

    getCinemaWorldMovies = () => {
        this.setState({
            isLoading: true
        });
        MovieService.getAllCinemaWorld().then(res => {        
            this.setState({ cinemaworld: res.data});
            this.setState({ movies: res.data});
          }).catch(err => {
            this.setState({
                isLoading: false
            });
            console.log(err);
        });
    }

    render() {
        const { movies, filmworld, cinemaworld, loadAll, isLoading } = this.state;
        return (
                <div>
                    <h1 className="text-center">Prince's Theartre</h1>
                    <h3 className="text-center">Classic Movies At Home</h3>
                    <div>
                        <table>
                            {this.state.filmworld.Movies && this.state.filmworld.Movies.map((movie, index) => (
                                <tr>
                                    <td key={index}>{movie.Title}</td>
                                    <td key={index}>{movie.ID}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
        )
    }
}

export default Home;
import React, {Component} from 'react';
import MovieService from "../services/movie.service";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class DetailsPage extends Component {
    constructor(props) {
        super(props);
        this.statestate = {
            filmworld: [],
            cinemaworld: [],
        };
    }
    componentDidMount() {
        this.getMoive(this.props.match.params.id);
    }

    getMoive = () => {
        this.setState({
            isLoading: true
        });
        MovieService.getAllCinemaWorld().then(res => {
            this.setState({ filmworld: res.data});
            console.log(res.data);
          }).catch(err => {
            this.setState({
                isLoading: false
            });
            console.log(err);
        });
    }

    render() {
      return(
        
            <div>
            <h2>{this.props.match.params.id}</h2>
            </div>
        
      )
    }
  }


  export default DetailsPage;
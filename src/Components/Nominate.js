import React, { Component } from "react";

class Nominate extends Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.nominate = this.nominate.bind(this);
	}
  
	nominate() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}
  
	render() {
		let { title } = this.props;
		const { opened } = this.state;

		if (opened){
			title ='Hide Favourites';
		}else{
			title ='Show Favourites';
		}

		return (
			<div className="box">
				<div className="nomination" onClick={this.nominate}>
                    {(title === "Show Favourites") ? <h2><i className="fa fa-trophy" aria-hidden="true"></i>Nominations</h2> : <h2>Close</h2>}
                </div>
                    
				{opened && (					
					<div className="boxcontent">
                        <h2>My Nominations</h2>
						{this.props.favourites.map(favourite => (
                            <div className="flexfav" key={favourite.imdbID}>
                                <div className="image-container">
                                    <img src={favourite.Poster} />
                                </div>
                                <div className="info-movie">
                                    <h1>{favourite.Title}</h1>
                                    <button className="btn" onClick={() => this.props.removeItem(favourite.imdbID)}>Remove</button>
                                </div>
                            </div>
                        ))}
					</div>
				)}
			</div>
		);
	}
}

export default Nominate;
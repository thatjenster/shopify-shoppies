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
                    <i className="fa fa-trophy" aria-hidden="true"></i>
                    {(title === "Show Favourites") ? "Nominations" : "Close"}
                </div>
                    
				{opened && (					
					<div className="boxcontent">
                        <h2>My Nominations</h2>
						{this.props.favourites.map(favourite => (
                            <div className="flexfav" key={favourite.imdbID}>
                                <div className="myfav">
                                    <img src={favourite.Poster} />
                                    <button onClick={() => this.props.removeItem(favourite.imdbID)}>Remove</button>
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
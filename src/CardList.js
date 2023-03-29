import React, { Component } from 'react';
import Card from './Card';
import SearchBox from './SearchBox';
import "./Card.css";

class CardList extends Component {
    constructor() {
        super()
        this.state = {
            profile: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    componentDidMount() {
        fetch('http://localhost:9000/profile')
            .then(response => response.json())
            .then(users => this.setState({ profile: users }));
    }

    render() {
        const { profile, searchfield } = this.state;
        const filteredProfile = profile.filter(profile => {
            return profile.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return (<div className='tc'>

            <SearchBox searchChange={this.onSearchChange} />
            {
                filteredProfile.map((user, i) => {
                    return (
                        <Card
                            key={filteredProfile[i].id}
                            id={filteredProfile[i].id}
                            name={filteredProfile[i].name}
                            rossy={filteredProfile[i].rossy}
                            email={filteredProfile[i].email}
                            starDate={filteredProfile[i].starDate}
                        />
                    );
                })
            }
        </div>);
    }
}

export default CardList;
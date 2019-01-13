import React, { Component } from 'react';
import axios from 'axios'
class Home extends Component {


    state = {
        search: '',
        recipes: []
    }

    componentDidMount() {

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    searchRecipes = async (event) => {
        event.preventDefault()
        try {
            const res = await axios({
                method: 'get',
                url: '/api/recipes',
                params: {
                    search: this.state.search
                }
            })
            console.log(res.data.hits)
            this.setState({ recipes: res.data.hits })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <h1>Search Recipes</h1>
                <form onSubmit={this.searchRecipes}>
                    <input name='search' value={this.state.search} onChange={this.handleChange} />

                    <button onClick={this.searchRecipes}>Search</button>

                </form>

                {
                    this.state.recipes.map((each) => {
                        return (
                            <div>
                                <h3>{each.recipe.label}</h3>
                                <h5>Calories: {each.recipe.calories}</h5>
                                <img src={each.recipe.image} alt={each.recipe.label} />
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}

export default Home;
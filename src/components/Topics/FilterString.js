import React, {Component} from 'react'

export default class FilterString extends Component {
    constructor (){
        super()
        this.state = {
            names: ['Matt','Eric','Aislinn','Lauren','Meg','Shelby','Tristan','Nathan','Charlene', 'Baili', 'Jeff'],
            userInput: '',
            filtered: []
        }
    }
    handleChange(val) {
        this.setState({userInput: val})
    }
    filterNames(userInput) {
        let names = this.state.names
        let filteredNames = []

        for (let i=0; i<names.length; i++){
            if(names[i].includes(userInput)){
                filteredNames.push(names[i])
            }
        }
        this.setState({filtered: filteredNames})
    }

    render () {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: {JSON.stringify(this.state.names, null, 10)}</span>
                <input className='inputLine' onChange={ e => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => this.filterNames(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filtered, null, 10)} </span>
            </div>
        )
    }
}
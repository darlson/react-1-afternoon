import React, {Component} from 'react'

export default class FilterObject extends Component {
    constructor () {
        super()
        this.state = {
            unfilteredArray: [
                { name: 'Floppy Greg', status: 'boxed', type: 'Helioptile'},
                { name: 'Randy', originalName: 'BouyantButt', type: 'Azumarill'},
                { name: 'Muddy Buddy', status: 'released', type: 'Gible'}
            ],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val){
        this.setState({userInput: val})
    }
    filterArray(prop){
        let pokes = this.state.unfilteredArray
        let filtered = []

        for(let i=0; i<pokes.length; i++){
            if(pokes[i].hasOwnProperty(prop)){
                filtered.push(pokes[i])
            }
        }
        this.setState({filteredArray: filtered})
    }

    render () {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={ e => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => this.filterArray(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}
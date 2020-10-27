import React, {Component} from 'react';
import $ from 'jquery';
import './jquery.pagepiling';
import './jquery.pagepiling.css';
import './index.css';

export default class Main extends Component {
    componentDidMount(){
        $(document).ready(function() {
            $('#pagepiling').pagepiling({
                navigation: {
                    'textColor': '#fff',
                    'bulletsColor': '#fff',
                    'position': 'right',
                    'tooltips': ['Water', 'Air','Fire', 'Soil', 'Sky']
                }
            })
        })
    }
    render() {
        return (
            <div id="pagepiling">
                <div class="section sec1"><h1>Water</h1></div>
                <div class="section sec2"><h1>Air</h1></div>
                <div class="section sec3"><h1>Fire</h1></div>
                <div class="section sec4"><h1>Soil</h1></div>
                <div class="section sec5"><h1>Sky</h1></div>
            </div>
        )
    }
}

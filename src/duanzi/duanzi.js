import React, { Component } from 'react';
import _ from 'lodash';
import duanziLogo from './duanziLogo.png';
import './duanzi.css';


import DuanziItem from './duanziItem';

const duanziIdObj = {};
const DUANZI_PER_PAGE = 20;
const API_BASE = "http://localhost:4000/api/v1/duanzi"

class Duanzi extends Component {
    constructor() {
        super();
        this.state = {
            duanzi: [],
            loadedAll: false,
            loading: true
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        console.log("component did mount");
        this.loadData();
        this.handleScroll = _.debounce(this.handleScroll, 500);
        window.addEventListener('scroll', this.handleScroll);
        console.log(this.state);
    }
    handleScroll() {
        let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if (window.innerHeight + scrollY >= (document.documentElement.scrollHeight - 50)) {
            console.log(window.innerHeight, scrollY, document.documentElement.scrollHeight);
            console.log("loading more duanzi");

            this.loadData();
        }
    }
    loadData() {
        if (this.state.loadedAll == true) {
            return;
        }

        let url = API_BASE;
        let request = new Request(
            encodeURI(url),
            {
                method: 'GET',
                cache: false
            }
        );
        fetch(request)
            .then(res => res.json())
            .then(response => {
                console.log(response);
                if (!response || response.length == 0) {
                    this.setState({
                        loadedAll: true
                    });
                }else {

                    let filtered = [];
                    for (let i = 0; i < response.length; i++) {
                        if (!duanziIdObj.hasOwnProperty(response[i].duanziId)) {
                            filtered.push(response[i]);
                            duanziIdObj[response[i].duanziId] = 1;
                        }
                    }
                    this.setState({
                        duanzi: this.state.duanzi.concat(filtered)
                    });
                }
            })
    }

    loading() {
        return (
            <div className="center">
                <div className="preloader-wrapper small active">
                    <div className="spinner-layer spinner-green-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    renderDuanzi() {
        console.log(this.state);
        var duanziList = this.state.duanzi.map((duanzi) => {
            return (
                <DuanziItem key={duanzi.duanziId} duanzi={duanzi}></DuanziItem>
            )
        })

        return (
            <div className="row">
                <div className="col s12">
                    {duanziList}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="duanzi row height-100 left">


                <div className="col s12 m8 offset-m2 height-100">
                    <div className="center">
                        <img className="responsive-img" src={duanziLogo} alt=""/>
                    </div>

                    {this.renderDuanzi()}
                    {this.state.loading == true && this.loading()}

                </div>



            </div>
        )
    }
}
export default Duanzi;
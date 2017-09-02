import React, { Component } from 'react';
import _ from 'lodash';
import duanziLogo from './duanziLogo.png';
import './duanzi.css';


import DuanziItem from './duanziItem';

var duanziIdObj = {};
var duanziContent = {};
var duanziOrder = [];
const API_BASE = "http://localhost:4000/api/v1/duanzi/test"

class Duanzi extends Component {
    constructor() {
        super();
        this.state = {
            duanzi: [],
            loadedAll: false,
            loading: true
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.favoriteHandler = this.favoriteHandler.bind(this);
        const localFav = JSON.parse(localStorage.getItem("localFav"));
        duanziContent = localFav != null ? localFav["content"] : {};
        duanziOrder = localFav != null ? localFav["order"] : [];

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
        if (this.state.loadedAll === true) {
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
                if (!response || response.length === 0) {
                    this.setState({
                        loadedAll: true
                    });
                }else {

                    let filtered = [];
                    for (let i = 0; i < response.length; i++) {
                        if (!duanziIdObj.hasOwnProperty(response[i].duanziId)) {
                            filtered.push(response[i]);
                            duanziIdObj[response[i].duanziId] = response[i];
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

    favoriteHandler(id, add, content) {
        if (add) {
            console.log("add");
            duanziOrder.unshift(id);
            duanziContent[id] = content;
        }else {
            console.log("remove", id);
            let idx = duanziOrder.indexOf(id);
            duanziOrder.splice(idx, 1);
            delete duanziContent[id];
        }
        localStorage.setItem("localFav", JSON.stringify({content: duanziContent, order: duanziOrder}));
    }

    renderDuanzi() {
        console.log(duanziContent);
        var duanziList = this.state.duanzi.map((duanzi) => {
            return (
                <DuanziItem key={duanzi.duanziId} duanzi={duanzi} favoriteHandler={this.favoriteHandler} duanziContent={duanziContent}></DuanziItem>
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
            <div className="row height-100 left">


                <div className="col s12 m8 offset-m2 height-100">
                    <div className="center">
                        <img className="responsive-img" src={duanziLogo} alt=""/>
                    </div>

                    {this.renderDuanzi()}


                    {this.state.loading === true && this.loading()}

                </div>



            </div>
        )
    }
}
export default Duanzi;
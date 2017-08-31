import React, { Component } from 'react';
import duanziLogo from './duanziLogo.png';
import './duanzi.css';
import fakeData from './fakeData';

import DuanziItem from './duanziItem';

const data = fakeData;

class Duanzi extends Component {
    constructor() {
        super();
        this.state = {
            duanzi: [],
            offSet: 0,
            loadedAll: false,
            loading: true
        }
    }
    componentDidMount() {
        console.log("component did mount");
        this.loadData();
        console.log(this.state);
    }
    loadData() {
        this.setState({
            duanzi: data
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
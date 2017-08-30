import React, { Component } from 'react';
import duanziLogo from './duanziLogo.png';
import './duanzi.css';

import DuanziItem from './duanziItem';

class Duanzi extends Component {
    render() {
        return (
            <div className="duanzi row height-100 left">


                <div className="col s12 m8 offset-m2 height-100">
                    <div className="center">
                        <img className="responsive-img" src={duanziLogo} alt=""/>
                    </div>

                    <div className="row">
                        <div className="col s12">

                            <DuanziItem></DuanziItem>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Duanzi;
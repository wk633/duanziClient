/**
 * Created by wk on 9/1/17.
 */

import React, {Component} from 'react';
import DuanziItem from '../duanzi/duanziItem';

class Favorite extends Component {
    constructor() {
        super();
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
            <div className="row height-100 left">


                <div className="col s12 m8 offset-m2 height-100">
                    <div className="center">
                        {/*<img className="responsive-img" src={duanziLogo} alt=""/>*/}
                    </div>

                    {this.renderDuanzi()}

                    {this.state.loading == true && this.loading()}

                </div>



            </div>
        )
    }
}
export default Favorite;
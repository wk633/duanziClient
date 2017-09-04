/**
 * Created by wk on 9/1/17.
 */

import React, {Component} from 'react';
import duanziLogo from '../duanzi/duanziLogo.png';
import DuanziItem from '../duanzi/duanziItem';


var duanziContent = {};
var duanziOrder = [];

class Favorite extends Component {
    constructor() {
        super();
        const localFav = JSON.parse(localStorage.getItem("localFav"));
        duanziContent = localFav != null ? localFav["content"] : {};
        duanziOrder = localFav != null ? localFav["order"] : [];
    }

    renderDuanzi() {

        var duanziList = duanziOrder.map((duanziId) => {
            return (
                <DuanziItem key={duanziId} duanzi={duanziContent[duanziId]} duanziContent={duanziContent} favoriteHandler={this.favoriteHandler}></DuanziItem>
            )
        });

        return (
            <div className="row">
                <div className="col s12">
                    {duanziList}
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

    render() {
        return (
            <div className="row height-100 left">


                <div className="col s12 m8 offset-m2 height-100">
                    <div className="center">
                        <img className="responsive-img" src={duanziLogo} alt=""/>
                    </div>

                    {this.renderDuanzi()}


                </div>



            </div>
        )
    }
}
export default Favorite;
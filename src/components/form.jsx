import React from 'react';

class addUser extends React.Component {

    render() {
        let addBtn = ["btn", "btn-primary", "mt-2"];
        let editBtn = ["btn", "btn-primary", "mt-2", "d-none"];
        let type = "submit";
        if (this.props.status) {
            addBtn.push("d-none");
            editBtn.pop();
        }
        else {
            editBtn.push("d-none");
            addBtn.pop();
        }
        if(this.props.btnStat){
            type = "button";
        }
        else{
            type = "submit";
        }
        return (
            <React.Fragment>
                <div>
                    <h2>Add user</h2>
                    <form ref={this.props.form}>
                        <div className="input-group flex-nowrap my-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">ID</span>
                            </div>
                            <input type="text" className="form-control" ref={this.props.ref1} id="id" aria-label="id" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap my-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">Name</span>
                            </div>
                            <input type="text" className="form-control" ref={this.props.ref2} id="name" aria-label="name" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap my-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">Score</span>
                            </div>
                            <input type="text" className="form-control" ref={this.props.ref3} id="name" aria-label="name" aria-describedby="addon-wrapping" />
                        </div>
                        <button type={type} className={addBtn.join(" ")} onClick={this.props.submit}>Add new user</button>
                        <button className={editBtn.join(" ")} onClick={this.props.update}>Update</button>
                    </form>
                </div>
            </React.Fragment >
        )
    }
}

export default addUser;